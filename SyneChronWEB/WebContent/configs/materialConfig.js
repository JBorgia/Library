var app = angular.module('ngLibrary');

app.config(function($mdIconProvider) {
    $mdIconProvider
      .iconSet('device', '/assets/js/angular-material/icons/device-icons.svg', 24);
  });