export class ApiHelpers {
    static baseUrl = 'http://api.football-data.org/v1';

    static mainRoutes = {
        competitions: <string>'/competitions',
        fixtures: <string>'/fixtures',
        teams: <string>'/teams',
    }

    static availableCompetitionIds = {
        brazilSerieA: <number>444,
        englishPremierLeague: <number>445,
        englishChampionship: <number>446,
        englishLeagueOne: <number>447,
        englishLeagueTwo: <number>448,
        netherlandsEredivisie: <number>449,
        frenchLeagueOne: <number>450,
        frenchLeagueTwo: <number>451,
        germanBundesliga: <number>452,
        germanBundesligaTwo: <number>453,
        spanishPrimeraDivision: <number>455,
        italianSerieA: <number>456,
        italianSerieB: <number>459,
        portugalPrimeiraLiga: <number>457,
        championsLeague: <number>464
    }

    // The X-Response-Control can be either full, minified or compressed
    static getHeaders(contentType, authToken, responseControl){
        return {
            'Content-type': <string> contentType,
            'X-Auth-Token': <string> authToken,
            'X-Response-Control': <string> responseControl
        }
    }

    static competitionUrls(id?: number) {
        if (id) {
            return {
                competitionTeams: this.baseUrl + this.mainRoutes.competitions + `/${id}` + this.mainRoutes.teams,
                competitionLeagueTable: this.baseUrl + this.mainRoutes.competitions + `/${id}/leagueTable`,
                competitionFixtures: this.baseUrl + this.mainRoutes.competitions + `/${id}` + this.mainRoutes.fixtures
            }
        }

        // If no id provided return all competitions url http://api.football-data.org/v1/competitions
        return this.baseUrl + this.mainRoutes.competitions;
    }

    static otherUrls(id?: number) {
        if (id) {
            return {
                oneFixture: this.baseUrl + this.mainRoutes.fixtures + `/${id}`,
                allFixturesCertainTeam: this.baseUrl + this.mainRoutes.teams + `/${id}` + this.mainRoutes.fixtures,
                oneTeam: this.baseUrl + this.mainRoutes.teams + `/${id}`,
                allPlayersCertainTeam: this.baseUrl + this.mainRoutes.teams + `/${id}/players`
            }
        }

        // If no id provided return all fixtures url http://api.football-data.org/v1/fixtures
        return this.baseUrl + this.mainRoutes.fixtures;
    }

}