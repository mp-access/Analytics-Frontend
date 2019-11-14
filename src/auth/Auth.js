import Keycloak from 'keycloak-js';

class AuthenticationService {

    static initializeKeycloak(callback) {
        const keycloak = Keycloak('/keycloak.json');

        keycloak.onTokenExpired = () => {
            keycloak
                .updateToken(10)
                .success();
        };

        keycloak.init({ onLoad: 'login-required' })
            .success(authenticated => {
                const payload = {
                    isAuthenticated: authenticated,
                    keycloak: keycloak,
                };

                callback(payload);
            })
            .error(err => console.error(err));
    }
}

export default AuthenticationService;