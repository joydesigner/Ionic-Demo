/**
 * Created by Xin J Zheng on 15/07/2016.
 */
(function(){
    'use strict';
  angular.module('eliteApp')
    .controller('LocationsController', ['eliteApi', LocationsController]);

  function LocationsController(eliteApi) {
    var vm = this;

    eliteApi.getLeagueData().then(function (data) {
      vm.locations = data.locations;
    });
  }
})();
