import { Injectable } from '@angular/core';
import { ApiHelper } from './../helpers/apiHelper';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CompetitionsService {
    private headers: Headers = new Headers(ApiHelper.getHeaders('text/plain', 'c3660403968b42d19f56f3ab128004b0'));

    private competitionsUrl;

    private teamFixturesUrl;

    constructor(private http: Http) { }

    // TODO need change any with Model for competitions
    getAll(): Observable<any> {
        this.competitionsUrl = ApiHelper.competitionUrls();

        return this.http.get(
            this.competitionsUrl,
            { headers: this.headers })
                .map(r => r.json());
    }
}
