export interface IUserData {
    login: string;
    password: string;
}

export default class Credentials {
    private UserData: IUserData;

    constructor(userData: IUserData) {
        this.UserData = userData;
    }

    public get getLogin(): string {
        return this.UserData.login;
    }

    public get getPassword(): string {
        return this.UserData.password;
    }
}
