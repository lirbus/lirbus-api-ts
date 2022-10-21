interface ICookieInJar {
    key: string;
    value: any;
}

// TODO: Better API, removeCookie()
// FIXME: <CookieManager>.buildJar() needs to have rework - TEMPORARY SOLUTION !
export default class CookieManager {
    private cookies: Array<ICookieInJar>;

    constructor() {
        this.cookies = [];
    }

    public addCookie(key: string, value: any) {
        this.cookies.push({ key: key, value: value });
    }

    public flushJar() {
        this.cookies = [];
    }

    /**
     * Build a jar with cookies inside
     * @returns Cookies that are ready to use in request
     */
    public buildJar() {
        const transformArray = (array: Array<ICookieInJar>) => {
            let temp: string = '';

            array.forEach(
                (item: ICookieInJar) => (temp += item.key + item.value + ';')
            );

            return temp;
        };

        return transformArray(this.cookies);
    }
}
