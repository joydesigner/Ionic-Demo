/**
 * Created by Xin J Zheng on 15/07/2016.
 */
(function(){
    'use strict';
  angular.module('eliteApp')
    .controller('StandingController', ['eliteApi', StandingController]);

  function StandingController(eliteApi) {
    var vm = this;

    eliteApi.getLeagueData()
      .then(function (data) {
        vm.standings = data.standings;
      });
  }
})();

