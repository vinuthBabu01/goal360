import { Component, OnInit } from '@angular/core';
import { fixtures } from 'src/app/model/fixture';
import {FootballDataService} from 'src/app/shared/service/football-data.service'
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
@Component({
  selector: 'app-fixtures-s1',
  templateUrl: './fixtures-s1.component.html',
  styleUrls: ['./fixtures-s1.component.css']
})
export class FixturesS1Component implements OnInit {

  serie1fix: fixtures[];
  dataSourcefix = new serie1DataSourcefix(this.dataService);
  displayedColumnsfix = [
    'match_date',
    'home_team',
    'match_time',
    'away_team'
  ];


  constructor(private dataService: FootballDataService) { }

  ngOnInit() {
    this.getserie1fix();
  }

  getserie1fix(): void {
    this.dataService.getserie1_Fixtures().subscribe(b => this.serie1fix = b);
  }

}

export class serie1DataSourcefix extends DataSource<fixtures> {
  constructor(private dataService: FootballDataService) {
    super();
  }

  connect(): Observable<fixtures[]> {
    return this.dataService.getserie1_Fixtures();
  }

  disconnect() {}

}
