/**
 * Created by zhengxin on 1/09/2016.
 */
(function () {
  'use strict';

  angular.module('eliteApp').controller('GameController',['$stateParams', 'eliteApi' ,'lodash', GameController]);

  function GameController($stateParams, eliteApi, lodash) {
    var vm = this;
    var gameId = Number($stateParams.id);
    var games = [];
    eliteApi.getLeagueData().then(function(response){
      games = response.games;
      vm.game = lodash.find(games, {'id': gameId});
    });

  }
})();
