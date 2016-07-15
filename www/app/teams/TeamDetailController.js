/**
 * Created by Xin J Zheng on 14/07/2016.
 */
(function () {
  'use strict';
  angular.module('eliteApp')
    .controller( 'TeamDetailController', ['$stateParams', TeamDetailController] );


  function TeamDetailController($stateParams) {
    var vm = this;
    console.log('$stateParams', $stateParams);
  }

})();
