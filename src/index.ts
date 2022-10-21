import Credentials from './utils/CredentialsStore';
import CookieManager from './utils/CookieManager';

export class LirbusClient {
    public cookies: CookieManager;

    private credentials: Credentials;

    constructor(credentials: Credentials) {
        this.credentials = credentials;

        this.cookies = new CookieManager();
    }
}
