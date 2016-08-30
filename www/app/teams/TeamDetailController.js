/**
 * Created by Xin J Zheng on 14/07/2016.
 */
(function () {
  'use strict';
  angular.module('eliteApp')
    .controller( 'TeamDetailController', ['$stateParams', 'eliteApi', 'lodash',TeamDetailController] );


  function TeamDetailController($stateParams, eliteApi, lodash) {
    var vm = this;
    // console.log('$stateParams', $stateParams);
    vm.teamId = Number($stateParams.id);
    var data = null;
    eliteApi.getLeagueData().then(function(response){
      data = response;
      //get which team has the division team
      var teams = lodash.chain(data.teams)
        .flatten("divisionTeams")
        .find('divisionTeams',{"id": vm.teamId})
        .value();

      var divisionTeams = teams.divisionTeams;
      var team = lodash.find(divisionTeams,{"id": vm.teamId});
      vm.teamName = team.name;
      vm.games = lodash.chain(data.games)
        .filter(isTeamInGame)
        .map(function (item) {
          var isTeam1 = (item.team1Id === vm.teamId ? true: false );
          var opponentName = isTeam1 ? item.team2 : item.team1;
          var scoreDisplay = getScoreDisplay(isTeam1, item.team1Score, item.team2Score);
          return {
            gameId: item.id,
            opponent: opponentName,
            time: item.time,
            location: item.location,
            locationUrl: item.locationUrl,
            scoreDisplay: scoreDisplay,
            homeAway: (isTeam1 ? "vs." : "at")
          };
        })
        .value();
      function isTeamInGame(item) {
        return item.team1Id === vm.teamId || item.team2Id === vm.teamId;
      }

      function getScoreDisplay(isTeam1, team1Score, team2Score) {
        if(team1Score && team2Score) {
          var teamScore = (isTeam1 ? team1Score : team2Score);
          var opponentScore = (isTeam1 ? team2Score: team1Score);
          var winIndicator = teamScore > opponentScore ? "W: ": "L: ";
          return winIndicator + teamScore + "-" + opponentScore;
        } else {
          return "";
        }
      }
    });
  }
})();
