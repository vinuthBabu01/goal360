import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { League } from 'src/app/model/League';
import { fixtures } from 'src/app/model/fixture';
import { live } from 'src/app/model/live';
import {DatePipe} from '@angular/common'
@Injectable({
  providedIn: 'root'
})
export class FootballDataService {

  apikey = 'e755911c9c8a3cf7fde641bce6a2e9f8f65371d98af0a7d1461f4bb0f11290d0';
  fromDate= new Date();
  fd;
  td;
  constructor(private httpClient: HttpClient,private datapipe: DatePipe) { 
    this.fd= this.datapipe.transform(this.fromDate,'yyyy-MM-dd');
    this.td= this.fd.split('-');
    this.td[1]=parseInt(this.td[1])+1;
  }
  // Premier League
  getPremierLeague_Standing() {
    return this.httpClient.get<League[]>(`https://apifootball.com/api/?action=get_standings&league_id=62&APIkey=` + this.apikey);
  }

  // La Liga
  getLaLiga_Standing() {
    return this.httpClient.get<League[]>(`https://apifootball.com/api/?action=get_standings&league_id=109&APIkey=` + this.apikey);
  }

  // Bundesliga
  getBundesliga_Standing() {
    return this.httpClient.get<League[]>(`https://apifootball.com/api/?action=get_standings&league_id=117&APIkey=` + this.apikey);
  }

  // Serie A
  getSerieA_Standing() {
    return this.httpClient.get<League[]>(`https://apifootball.com/api/?action=get_standings&league_id=79&APIkey=` + this.apikey);
  }

  // Ligue 1
  getLigue1_Standing() {
    return this.httpClient.get<League[]>(`https://apifootball.com/api/?action=get_standings&league_id=127&APIkey=` + this.apikey);
  }

  // events
  getPremierLeague_Fixtures() {
    return this.httpClient.get<fixtures[]>(`https://apiv2.apifootball.com/?action=get_events&from= `+ this.fd +`&to=`+this.td+`&league_id=148&APIkey=` + this.apikey);
    }
  getBundesliga_Fixtures() {
      return this.httpClient.get<fixtures[]>(`https://apiv2.apifootball.com/?action=get_events&from=`+this.fd+`&to=`+this.td+`&league_id=195&APIkey=` + this.apikey);
  }
  getlaliga_Fixtures() {
    return this.httpClient.get<fixtures[]>(`https://apiv2.apifootball.com/?action=get_events&from=`+this.fd+`&to=`+this.td+`&league_id=468&APIkey=` + this.apikey);
}
  getleague1_Fixtures() {
  return this.httpClient.get<fixtures[]>(`https://apiv2.apifootball.com/?action=get_events&from=`+this.fd+`&to=`+this.td+`&league_id=176&APIkey=` + this.apikey);
  }
  getserie1_Fixtures() {
  return this.httpClient.get<fixtures[]>(`https://apiv2.apifootball.com/?action=get_events&from=`+this.fd+`&to=`+this.td+`&league_id=262&APIkey=` + this.apikey);
  }
  getlivescore(){
  return this.httpClient.get<live[]>(`https://apiv2.apifootball.com/?action=get_events&from=`+this.fd+`&to=`+this.td+`&league_id=148&match_live=1&APIkey=` + this.apikey);
  }
  getresults(){
    return this.httpClient.get<fixtures[]>(`https://apiv2.apifootball.com/?action=get_events&from=2020-12-20&to=`+this.fd+`&league_id=148&APIkey=` + this.apikey);
  }
}
