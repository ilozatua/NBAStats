export interface PlayersData {
  data: Players[];
}

export interface Players {
  first_name: string;
  last_name: string;
  position: string;
  team: TeamDescribe;
}

export interface TeamDescribe {
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}

export interface TeamsData {
  data: Teams[];
}

export interface Teams {
  full_name: string;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
}

export interface GamesData {
  data: Games[];
}

export interface Games {
  date: string;
  home_team: Teams;
  visitor_team: Teams;
}

export interface StatsData {
  data: Stats[];
}

export interface Stats {
  player: StatsPlayer;
  team: Teams;
  pts: number;
  reb: number;
  stl: number;
  min: string;
}

export interface StatsPlayer {
  first_name: string;
  last_name: string;
  weight_pounds: number;
  height_inches: number;
}
