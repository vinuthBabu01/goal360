import { Component, OnInit } from '@angular/core';
import { fixtures } from 'src/app/model/fixture';
import {FootballDataService} from 'src/app/shared/service/football-data.service'
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
@Component({
  selector: 'app-fixtures-pl',
  templateUrl: './fixtures-pl.component.html',
  styleUrls: ['./fixtures-pl.component.css']
})
export class FixturesPlComponent implements OnInit {
  PremierLeaguefix: fixtures[];
  dataSourcefix = new PremierLeagueDataSourcefix(this.dataService);
  displayedColumnsfix = [
    'match_date',
    'home_team',
    'match_time',
    'away_team'
  ];


  constructor(private dataService: FootballDataService) { }

  ngOnInit() {
    this.getPremierLeaguefix();
  }

  getPremierLeaguefix(): void {
    this.dataService.getPremierLeague_Fixtures().subscribe(pl => this.PremierLeaguefix = pl);
  }

}

export class PremierLeagueDataSourcefix extends DataSource<fixtures> {
  constructor(private dataService: FootballDataService) {
    super();
  }

  connect(): Observable<fixtures[]> {
    return this.dataService.getPremierLeague_Fixtures();
  }

  disconnect() {}

}
