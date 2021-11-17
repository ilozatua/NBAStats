import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { GamesData, PlayersData, StatsData, TeamsData } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ApiCallsService {
  constructor(private http: HttpClient) {}

  getPlayers$(): Observable<PlayersData> {
    return this.http.get<PlayersData>(
      'https://free-nba.p.rapidapi.com/players?page=0&per_page=75',
      {
        headers: {
          'x-rapidapi-host': 'free-nba.p.rapidapi.com',
          'x-rapidapi-key':
            '27e313b7f3mshc79310b3b3e8bc1p10e25ajsn3f3401bb116c',
        },
      }
    );
  }

  getTeams$(): Observable<TeamsData> {
    return this.http.get<TeamsData>(
      'https://free-nba.p.rapidapi.com/teams?page=0',
      {
        headers: {
          'x-rapidapi-host': 'free-nba.p.rapidapi.com',
          'x-rapidapi-key':
            '27e313b7f3mshc79310b3b3e8bc1p10e25ajsn3f3401bb116c',
        },
      }
    );
  }
  getGames$(): Observable<GamesData> {
    return this.http.get<GamesData>(
      'https://free-nba.p.rapidapi.com/games?page=0&per_page=75',
      {
        headers: {
          'x-rapidapi-host': 'free-nba.p.rapidapi.com',
          'x-rapidapi-key':
            '27e313b7f3mshc79310b3b3e8bc1p10e25ajsn3f3401bb116c',
        },
      }
    );
  }
  getStats$(): Observable<StatsData> {
    return this.http.get<StatsData>(
      'https://free-nba.p.rapidapi.com/stats?page=0&per_page=75',
      {
        headers: {
          'x-rapidapi-host': 'free-nba.p.rapidapi.com',
          'x-rapidapi-key':
            '27e313b7f3mshc79310b3b3e8bc1p10e25ajsn3f3401bb116c',
        },
      }
    );
  }
}
