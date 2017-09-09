import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ApiHelper } from './../helpers/apiHelper';

@Injectable()

export class TablesService {

    private headers: Headers = new Headers(ApiHelper.getHeaders());
    private tablesUrl;
    private teamFixturesUrl;

    constructor(private http: Http) { }

    // TODO need change any with Model for competitions
    get(id): Observable<any> {
        this.tablesUrl = ApiHelper.tableUrls(id);

        return this.http.get(
            this.tablesUrl,
            { headers: this.headers })
            .map(r => r.json());
    }
}
