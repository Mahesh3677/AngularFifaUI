export class user
{
    public email : string;
  
    public token : string ;
    public refreshToken : string;

    constructor(
         nemail : string,
      
         ntoken : string ,
         nrefreshToken : string,
    )
    {
        this.email = nemail;
        this.token =ntoken;
        this.refreshToken = nrefreshToken;
    }
}