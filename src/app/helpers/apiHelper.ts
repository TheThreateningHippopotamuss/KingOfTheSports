export class ApiHelper {

    static baseUrl = 'https://api.football-data.org/v1';

    static mainRoutes = {
        competitions: <string>'/competitions',
        fixtures: <string>'/fixtures',
        teams: <string>'/teams',
    };

    static getHeaders() {
        return {
            'Content-type': <string>'text/plain',
            'X-Auth-Token': <string>'c3660403968b42d19f56f3ab128004b0',
        };
    }

    static competitionUrls() {
        return this.baseUrl + this.mainRoutes.competitions + '?season=2017';
    }

    static fixturesUrl() {
        return this.baseUrl + this.mainRoutes.fixtures;
    }

    static tableUrls(id: number) {
        return this.baseUrl + this.mainRoutes.competitions + `/${id}/leagueTable`;
    }

    static playersUrls(id: number) {
        return this.baseUrl + this.mainRoutes.teams + `/${id}/players`;
    }
}
