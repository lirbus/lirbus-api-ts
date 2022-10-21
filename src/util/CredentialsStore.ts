export default class CredentialsStore {
    private login: string;
    private password: string;

    constructor(login?: string, password?: string) {
        if (login) {
            this.login = login;
        } else if (password) {
            this.password = password;
        }
    }

    public getLogin() {
        return this.login;
    }

    public getPassword() {
        return this.password;
    }

    public setLogin(login: string) {
        this.login = login;
    }

    public setPassword(password: string) {
        this.password = password;
    }
}
