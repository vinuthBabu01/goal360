import { Component, OnInit } from '@angular/core';
import {FootballDataService} from 'src/app/shared/service/football-data.service'
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { fixtures } from 'src/app/model/fixture';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  result: fixtures[];
  dataSourceres = new ResultDataSource(this.dataService);
  displayedColumnslive = [
    'home_team',
    'hometeam_score',
    'awayteam_score',
    'away_team'
  ];


  constructor(private dataService: FootballDataService) { }

  ngOnInit() {
    this.getresult();
  }

  getresult(): void {
    this.dataService.getresults().subscribe(b => console.log(this.result = b));
  }
}

export class ResultDataSource extends DataSource<any> {
  constructor(private dataService: FootballDataService) {
    super();
  }

  connect(): Observable<fixtures[]> {
    return this.dataService.getresults();
  }

  disconnect() {}
}


