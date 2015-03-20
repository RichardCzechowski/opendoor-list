'use strict';

/**
 * @ngdoc function
 * @name opendoorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the opendoorApp
 */
angular.module('opendoorApp')
.controller('MainCtrl', [ '$scope', 'ParseService', function ($scope, ParseService) {
  $scope.notes = [ {note: "This is a note"},{note: "Also a note"} ];

  $scope.addNote = function(){
    var note = { note: $scope.noteText };
    ParseService.save(note).then(function() {
      $scope.$apply(function() {
        $scope.notes.push(note);
      });
    });

    $scope.noteText = '';
  }

  $scope.deleteNote = function(index){
    $scope.notes.splice(index, 1);
  }

}]);
