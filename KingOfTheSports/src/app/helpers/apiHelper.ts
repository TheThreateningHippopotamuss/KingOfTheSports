export class ApiHelper {
    static baseUrl = 'http://api.football-data.org/v1';

    static mainRoutes = {
        competitions: <string>'/competitions',
        teams: <string>'/teams',
    };

    static getHeaders(contentType, authToken) {
        return {
            'Content-type': <string>contentType,
            'X-Auth-Token': <string>authToken,
        };
    }

    static competitionUrls(id?: number) {
        if (id) {
            return {
                competitionTeams: this.baseUrl + this.mainRoutes.competitions + `/${id}` + this.mainRoutes.teams,
                competitionLeagueTable: this.baseUrl + this.mainRoutes.competitions + `/${id}/leagueTable`,
            };
        }

        return this.baseUrl + this.mainRoutes.competitions;
    }

    static playersUrls(id: number) {
        return {
            allPlayersCertainTeam: this.baseUrl + this.mainRoutes.teams + `/${id}/players`
        };
    }
}
