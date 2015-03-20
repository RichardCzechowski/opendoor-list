angular.module('opendoorApp')
.service('ParseService', [ function(){
  Parse.initialize("DdTkrTUUcI7UnS8Uf3ViGRTf7beoOV8eLK2rJs2S", "JKFqxHbOTs1UesVkJQ60ZNXSrvlvUdWIzMyXIOXh");
  var TestObject = Parse.Object.extend("TestObject");
  var testObject = new TestObject();

  return testObject;

  /*
  var create = function(note){
    return testObject.save(note).then(function(object) {
    });
  }

  var read = function(){

  }

  var update = function(){

  }
  */
}])
