import Lirbus from '../index';

export default class Template {
    public client: Lirbus;

    private HOST_URL = 'https://synergia.librus.pl/';
    protected endpoint: string;

    constructor(client: Lirbus) {
        this.client = client;
    }

    private get getEndpoint(): string {
        return `${this.HOST_URL}${this.endpoint}`;
    }

    private _request(cookie: string) {
        //document.cookie = cookie;

        fetch(this.getEndpoint, {
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
    public request(): Document {
        // do _request for html
        const response = this._request(this.client.cookies.buildJar());
        //console.log(response);
        // parse it parseHTML(html)
        // return it return parsedhtml;
        return new Document();
    }
}
