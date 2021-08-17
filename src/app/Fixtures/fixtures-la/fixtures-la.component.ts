import { Component, OnInit } from '@angular/core';
import { fixtures } from 'src/app/model/fixture';
import {FootballDataService} from 'src/app/shared/service/football-data.service'
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-fixtures-la',
  templateUrl: './fixtures-la.component.html',
  styleUrls: ['./fixtures-la.component.css']
})
export class FixturesLaComponent implements OnInit {

  laligafix: fixtures[];
  dataSourcefix = new laligaDataSourcefix(this.dataService);
  displayedColumnsfix = [
    'match_date',
    'home_team',
    'match_time',
    'away_team'
  ];


  constructor(private dataService: FootballDataService) { }

  ngOnInit() {
    this.getlaligafix();
  }

  getlaligafix(): void {
    this.dataService.getlaliga_Fixtures().subscribe(b => this.laligafix = b);
  }
}

export class laligaDataSourcefix extends DataSource<fixtures> {
  constructor(private dataService: FootballDataService) {
    super();
  }

  connect(): Observable<fixtures[]> {
    return this.dataService.getlaliga_Fixtures();
  }

  disconnect() {}

}
