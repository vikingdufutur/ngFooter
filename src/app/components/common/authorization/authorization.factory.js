(function () {
  'use strict';

  angular
    .module('footer')
    .factory('authorizationFactory', authorizationFactory);

  function authorizationFactory($rootScope, $state, identityFactory) {
    var api = this;

    /* Methodes */
    api.authorize = authorize;

    /**
     * Check the current user authorizations
     * @method authorize
     * @return promise {}
     */
    function authorize(state) {
      return identityFactory.identity()
        .then(function (identity) {
          var isAuthenticated = identityFactory.isAuthenticated();

          if ($rootScope.toState.data.roles && $rootScope.toState.data.roles.length > 0 && !identityFactory.isInAnyRole($rootScope.toState.data.roles)) {
            if (isAuthenticated) {
              $state.go('accessdenied'); // user is signed in but not authorized for desired state
            } else {
              // user is not authenticated. stow the state they wanted before you
              // send them to the signin state, so you can return them when you're done
              $rootScope.returnToState = $rootScope.toState;
              $rootScope.returnToStateParams = $rootScope.toStateParams;

              // now, send them to the signin state so they can log in
              $state.go(state);
            }
          }
          return identity;
        });
    }

    return api;
  }
})();
