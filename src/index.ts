import Credentials from './util/CredentialsStore';
import CookieManager from './util/CookieManager';

export class LirbusClient {
    public cookies: CookieManager;

    private credentials: Credentials;

    constructor(credentials: Credentials) {
        this.credentials = credentials;

        this.cookies = new CookieManager();
    }
}
