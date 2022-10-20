import Credentials from './Credentials';

// TODO: This class needs to have CookieManager
// FIXME: Temporary solution
export class LirbusClient {
    private credentials: Credentials;

    constructor(credentials: Credentials) {
        this.credentials = credentials;
    }
}
