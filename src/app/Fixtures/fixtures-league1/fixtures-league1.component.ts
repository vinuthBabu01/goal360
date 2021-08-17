import { Component, OnInit } from '@angular/core';
import { fixtures } from 'src/app/model/fixture';
import {FootballDataService} from 'src/app/shared/service/football-data.service'
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
@Component({
  selector: 'app-fixtures-league1',
  templateUrl: './fixtures-league1.component.html',
  styleUrls: ['./fixtures-league1.component.css']
})
export class FixturesLeague1Component implements OnInit {
  league1fix: fixtures[];
  dataSourcefix = new league1DataSourcefix(this.dataService);
  displayedColumnsfix = [
    'match_date',
    'home_team',
    'match_time',
    'away_team'
  ];


  constructor(private dataService: FootballDataService) { }

  ngOnInit() {
    this.getleague1fix();
  }

  getleague1fix(): void {
    this.dataService.getleague1_Fixtures().subscribe(b => this.league1fix = b);
  }
}

export class league1DataSourcefix extends DataSource<fixtures> {
  constructor(private dataService: FootballDataService) {
    super();
  }

  connect(): Observable<fixtures[]> {
    return this.dataService.getleague1_Fixtures();
  }

  disconnect() {}
}
