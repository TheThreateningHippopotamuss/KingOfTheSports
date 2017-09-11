import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ApiHelper } from './../../helpers/apiHelper';

@Injectable()
export class FixturesServices {

    private headers: Headers = new Headers(ApiHelper.getHeaders());
    private fixturesUrl: string;

    constructor(private http: Http) { }

    get(): Observable<any> {
        this.fixturesUrl = ApiHelper.fixturesUrl();

        return this.http.get(
            this.fixturesUrl,
            { headers: this.headers })
            .map(r => r.json());
    }
}
