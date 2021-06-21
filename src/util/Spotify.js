
let accessToken = {};

const clientID = '71a5ec5a6631470b95b8f229adcd78d3';
const redirectUrl = 'http://localhost:3000/';

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        const accessTokenMatch = window.location.href.math("/access_token=([^&]*)/");
        const expireTokenMatch = window.location.href.math("/expires_in=([^&]*)/");

        if(accessTokenMatch && expireTokenMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expireTokenMatch[1]);

            // Clear the parameteters, allowing us to grap new access token when it expires
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`
            window.location(accessUrl)
        }

    }
}

export default Spotify