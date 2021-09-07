import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AdminService{
    constructor(private http : HttpClient  ){}

    sampleRequest()
    {
        this.http.get('https://localhost:5001/api/v1/posts').subscribe()
    }
}