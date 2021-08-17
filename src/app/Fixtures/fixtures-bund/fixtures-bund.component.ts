import { Component, OnInit } from '@angular/core';
import { fixtures } from 'src/app/model/fixture';
import {FootballDataService} from 'src/app/shared/service/football-data.service'
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-fixtures-bund',
  templateUrl: './fixtures-bund.component.html',
  styleUrls: ['./fixtures-bund.component.css']
})
export class FixturesBundComponent implements OnInit {
  Bundesligafix: fixtures[];
  dataSourcefix = new BundesligaDataSourcefix(this.dataService);
  displayedColumnsfix = [
    'match_date',
    'home_team',
    'match_time',
    'away_team'
  ];


  constructor(private dataService: FootballDataService) { }

  ngOnInit() {
    this.getBundesligafix();
  }

  getBundesligafix(): void {
    this.dataService.getBundesliga_Fixtures().subscribe(b => this.Bundesligafix = b);
  }

}

export class BundesligaDataSourcefix extends DataSource<fixtures> {
  constructor(private dataService: FootballDataService) {
    super();
  }

  connect(): Observable<fixtures[]> {
    return this.dataService.getBundesliga_Fixtures();
  }

  disconnect() {}


}
