import * as angular from 'angular';

let PersonListComponent = {
  selector: 'personList',
  template: `
    <div class="col-md-12">

      <div class="row"
          infinite-scroll="$ctrl.contacts.loadMore()"
          infinite-scroll-immediate-check="false"
          infinite-scroll-distance="1">

        <cc-card ng-repeat="person in $ctrl.contacts.persons"
                user="person">
        </cc-card>

      </div>

      <div ng-show="$ctrl.contacts.persons.length == 0 && !$ctrl.contacts.isLoading">
        <div class="alert alert-info">
          <p class="text-center">No results found for search term '{{ $ctrl.contacts.search }}'</p>
        </div>
      </div>

      <cc-spinner is-loading="$ctrl.contacts.isLoading" message="Loading..."></cc-spinner>
    </div>
  `,
  bindings: {},
  controller: class PersonListController {

    contacts;
    constructor(ContactService) {
      this.contacts = ContactService;
    }
  }
}

angular
  .module("codecraft")
    .controller("PersonListController", function($scope, ContactService) {
    $scope.contacts = ContactService;
  })