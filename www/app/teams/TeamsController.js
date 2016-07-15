/**
 * Created by Xin J Zheng on 14/07/2016.
 */
(function(){
    'use strict';
  angular.module('eliteApp')
    .controller('TeamsController', ['eliteApi', TeamsController]);

  function TeamsController (eliteApi) {
    var vm = this;

    eliteApi.getLeagueData().then(function(data){
      vm.teams = data.teams;
    });
  }
})();
