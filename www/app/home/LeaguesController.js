/**
 * Created by Xin J Zheng on 14/07/2016.
 */
(function(){
'use strict';
  angular.module('eliteApp')
    .controller( 'LeaguesController', ['eliteApi', '$state', LeaguesController] );

  function LeaguesController (eliteApi, $state) {
    var vm = this;

    eliteApi.getLeagues().then(function(leagues){
      vm.leagues = leagues;
    });

    vm.selectLeague = function (id) {
      eliteApi.setLeagueId(id);
      $state.go("app.teams");
    }
  }

})();
