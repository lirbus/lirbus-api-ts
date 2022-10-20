import { LirbusClient } from "./index";

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
}
