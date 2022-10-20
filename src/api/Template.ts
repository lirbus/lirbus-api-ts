import { LirbusClient } from "../index";

export class Template {
    public client: LirbusClient;
    private endpoint: string;

    public BASE_ENDPOINT = "https://synergia.librus.pl/";

    constructor(client: LirbusClient) {
        this.client = client;
    }

    public set setEndpoint(endpoint: string) {
        this.endpoint = endpoint;
    }

    public get getEndpoint(): string {
        return this.endpoint;
    }

    /**
     * Performs request to Librus
     * @returns HTML
     */
    private _request() {}

    // TODO: Create an actual request method that we can use from Apis
    /**
     * Public method that performs ``_request()`` and parses it
     * @returns Readable and organized output
     */
    public request(html: string) {
        // do _request
        // parse it
        // return it
    }
}
