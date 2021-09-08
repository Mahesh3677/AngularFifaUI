export class RefreshTokenRequest {
    public token: string;

    public refreshToken: string;

    constructor(
        ntoken: string,
        nrefreshToken: string,
    ) {

        this.token = ntoken;
        this.refreshToken = nrefreshToken;
    }
}