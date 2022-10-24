import Lirbus from '../index';

export default class Template {
    public client: Lirbus;
    private endpoint: string;

    public HOST_URL = 'https://synergia.librus.pl/';

    constructor(client: Lirbus) {
        this.client = client;
    }

    public getEndpoint() {
        return this.endpoint;
    }

    public setEndpoint(endpoint: string) {
        this.endpoint = endpoint;

        return this;
    }

    private _request(cookie: string) {
        //document.cookie = cookie;

        fetch(this.getEndpoint(), {
            headers: new Headers({
                Accept: 'text/html',
                'Accept-Encoding': 'gzip, defalte, br',
            }),

            keepalive: true,
        })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });
    }

    // TODO: Create an actual request method that we can use from Apis
    // TODO: Pass cookies
    public request() {
        // do _request for html
        const response = this._request(this.client.cookies.buildJar());
        //console.log(response);
        // parse it parseHTML(html)
        // return it return parsedhtml;
    }
}
