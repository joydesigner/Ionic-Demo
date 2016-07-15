/**
 * Created by Xin J Zheng on 14/07/2016.
 */
(function(){
'use strict';
  angular.module('eliteApp').factory('eliteApi', ['$http', '$q', eliteApi]);

  function eliteApi($http, $q) {
    var currentLeagueId;

    function getLeagues(callback) {
      var deferred = $q.defer();

      $http.get("http://elite-schedule.net/api/leaguedata")
        .then(
          function(data){
            deferred.resolve(data.data);
          },
          function (err) {
            deferred.reject();
          });

      return deferred.promise;
    }

    function getLeagueData() {
      var deferred = $q.defer();

      $http.get("http://elite-schedule.net/api/leaguedata/" + currentLeagueId)
        .then(
          function(data, status){
            console.log("received schedule data via http.", data, status);
            deferred.resolve(data.data);
          },
          function(err) {
            console.log("Error while making http call." + err);
            deferred.reject();
          }
        );

      return deferred.promise;
    }

    function setLeagueId(id) {
      currentLeagueId = id;
    }

    return {
      getLeagues:getLeagues,
      getLeagueData: getLeagueData,
      setLeagueId: setLeagueId
    }
  };
})();



