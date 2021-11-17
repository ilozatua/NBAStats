import { Component, OnInit } from '@angular/core';
import { from, Observable, Subscription, pipe, tap, map } from 'rxjs';
import { Games, Players, Stats, Teams } from './models/models';
import { ApiCallsService } from './services/api-calls.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  _selectedPlayer: Players[];
  _selectedTeams: Teams[];
  _selectedGames: Games[];
  _selectedStats: Stats[];

  // get selectedPlayers(): Players {
  //   return this._selectedPlayer;
  // }

  constructor(private apiCallsService: ApiCallsService) {}

  // parseObject = (obj) => obj['data'];

  getPlayers() {
    return this.apiCallsService
      .getPlayers$()
      .pipe(map((result) => result.data))
      .subscribe((players) => (this._selectedPlayer = players));
  }

  getTeams() {
    return this.apiCallsService
      .getTeams$()
      .pipe(map((result) => result.data))
      .subscribe((teams) => (this._selectedTeams = teams));
  }
  getGames() {
    return this.apiCallsService
      .getGames$()
      .pipe(map((result) => result.data))
      .subscribe((games) => (this._selectedGames = games));
  }
  getStats() {
    return this.apiCallsService
      .getStats$()
      .pipe(map((result) => result.data))
      .subscribe((stats) => (this._selectedStats = stats));
  }

  // console.log(players.data)

  // (this._selectedPlayer = players.data)

  // ParseApi(cb): Observable<Players> {
  //   return cb().data;
  // }

  ngOnInit() {}
}
