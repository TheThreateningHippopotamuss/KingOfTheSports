import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ApiHelper } from './../helpers/apiHelper';

@Injectable()
export class PlayersServices {

    private headers: Headers = new Headers(ApiHelper.getHeaders());
    private playersUrl: string;

    constructor(private http: Http) { }

    // TODO need change any with Model for competitions
    get(id): Observable<any> {
        this.playersUrl = ApiHelper.playersUrls(id);

        return this.http.get(
            this.playersUrl,
            { headers: this.headers })
            .map(r => r.json());
    }
}
