import { Player } from './../../../models/player';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ApiHelper } from './../../helpers/apiHelper';

@Injectable()
export class PlayersServices {

    private headers: Headers = new Headers(ApiHelper.getHeaders());
    private playersUrl: string;

    constructor(private http: Http) { }

    get(id): Observable<Player[]> {
        this.playersUrl = ApiHelper.playersUrls(id);
        console.log(this.playersUrl);
        return this.http.get(
            this.playersUrl,
            { headers: this.headers })
            .map(r => <Player[]>r.json().players);
    }
}
