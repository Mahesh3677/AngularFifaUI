export class Country{
    CountryId : string;
    Name : string ;
    FlagImage : string ;
    Rank : number ;

    constructor( CountryId : string,
        Name : string ,
        FlagImage : string ,
        Rank : number )
    {        
            CountryId =CountryId;
            Name =Name;
            FlagImage =FlagImage;
            Rank =Rank;
        
    }
}