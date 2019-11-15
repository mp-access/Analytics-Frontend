const authHeaders = (auth) => {
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + auth.keycloak.token);
    return headers;
};

export { authHeaders };