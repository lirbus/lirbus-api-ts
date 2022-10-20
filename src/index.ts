export type Credits = {
    login: string;
    password: string;
}

// TODO: This class needs to have CookieManager
// FIXME: Temporary solution
export class LirbusClient {
    private credits: Credits

    constructor(credits: Credits) {
        this.credits = credits;
    }
}
