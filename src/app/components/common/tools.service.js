(function () {
  'use strict';

  angular
    .module('footer')
    .service('toolsService', toolsService);

  /** @ngInject */
  function toolsService() {
    var api = this;

    /* Methodes */
    api.findIndexCallback = findIndexCallback;
    api.findUserIndex = findUserIndex;
    api.uppercaseFirst = uppercaseFirst;
    api.lowercaseAll = lowercaseAll;
    api.removeSubArray = removeSubArray;
    api.findAvailabilityIndex = findUserIndex;

    /**
     * Find the index in the array through callback
     * @method findIndexCallback
     * @param array
     * @param callback
     * @return indice
     */
    function findIndexCallback(array, callback) {
      for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
          return i;
        }
      }
      return -1;
    }

    /**
     * Find the index of user in the array
     * @method findUserIndex
     * @param array
     * @param user
     * @return indice
     */
    function findUserIndex(array, user) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].id === user.id) {
          return i;
        }
      }
      return -1;
    }

    /**
     * Uppercase the first character of the string
     * @method uppercaseFirst
     * @param str
     * @return Str
     */
    function uppercaseFirst(str) {
      if (str !== null) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    }

    /**
     * Lowercase all characters of the string
     * @method lowercaseAll
     * @param STR
     * @return str
     */
    function lowercaseAll(str) {
      if (str !== null) {
        return str.toLowerCase();
      }
    }

    function removeSubArray(array, subArray) {
      for (var i = 0; i < subArray.length; i++) {
        var index = findAvailabilityIndex(array, subArray[i]);
        if (index > -1) {
          array.splice(index, 1);
        }
      }
    }

    /**
     * Find the index of availability in the array
     * @method findAvailabilityIndex
     * @param array
     * @param availability
     * @return indice
     */
    function findAvailabilityIndex(array, availability) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].id === availability.id) {
          return i;
        }
      }
      return -1;
    }

    return api;
  }
})();
