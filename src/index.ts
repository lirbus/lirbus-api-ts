import Credentials from './util/credentials';
import CookieManager from './util/cookies';
import Grades from './api/Grades';

export default class LirbusClient {
    public cookies: CookieManager;
    private credentials: Credentials;

    constructor(credentials: Credentials) {
        this.credentials = credentials;

        this.cookies = new CookieManager();
    }

    public get grades(): Grades {
        return new Grades(this);
    }
}
