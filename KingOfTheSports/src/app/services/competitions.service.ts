import { Competition } from './../../models/competitions';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { ApiHelper } from './../helpers/apiHelper';

@Injectable()
export class CompetitionsService {

    private headers: Headers = new Headers(ApiHelper.getHeaders());
    private competitionsUrl: string = ApiHelper.competitionUrls();

    constructor(private http: Http) { }

    getAll(): Observable<any> {

        return this.http.get(
            this.competitionsUrl,
            { headers: this.headers })
            .map(res  => <Competition[]>res.json())
            ;
    }
}
