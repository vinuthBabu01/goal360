import { Component, OnInit } from '@angular/core';
import {FootballDataService} from 'src/app/shared/service/football-data.service'
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { live } from 'src/app/model/live';
@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  livescore: live[];
  dataSourcelive = new livescoreDataSource(this.dataService);
  displayedColumnslive = [
    'home_team',
    'hometeam_score',
    'awayteam_score',
    'away_team'
  ];


  constructor(private dataService: FootballDataService) { }

  ngOnInit() {
    this.getlive_score();
  }

  getlive_score(): void {
    this.dataService.getlivescore().subscribe(b => this.livescore = b);
  }
}

export class livescoreDataSource extends DataSource<any> {
  constructor(private dataService: FootballDataService) {
    super();
  }

  connect(): Observable<live[]> {
    return this.dataService.getlivescore();
  }

  disconnect() {}
}
