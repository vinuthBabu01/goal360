import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './module/material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/layout/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

import { PremierLeagueComponent } from './league/premier-league/premier-league.component';
import { LaLigaComponent } from './league/la-liga/la-liga.component';
import { BundesligaComponent } from './league/bundesliga/bundesliga.component';
import { SerieAComponent } from './league/serie-a/serie-a.component';
import { LigueOneComponent } from './league/ligue-one/ligue-one.component';

import { FootballDataService } from './shared/service/football-data.service';
import { FixturesPlComponent } from './Fixtures/fixtures-pl/fixtures-pl.component';
import { FixturesLaComponent } from './Fixtures/fixtures-la/fixtures-la.component';
import { FixturesS1Component } from './Fixtures/fixtures-s1/fixtures-s1.component';
import { FixturesLeague1Component } from './Fixtures/fixtures-league1/fixtures-league1.component';
import { FixturesBundComponent } from './Fixtures/fixtures-bund/fixtures-bund.component';
import { LiveComponent } from './components/live/live.component';
import { ResultsComponent } from './components/results/results.component';
import { DatePipe } from '@angular/common';

const components = [
  AppComponent,
  HeaderComponent,
  HomeComponent,
  AboutComponent,
  PremierLeagueComponent,
  LaLigaComponent,
  BundesligaComponent,
  SerieAComponent,
  LigueOneComponent
];

const modules = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  FlexLayoutModule,
  MaterialModule,
  HttpClientModule
];

@NgModule({
  declarations: [...components, PremierLeagueComponent, FixturesPlComponent, FixturesLaComponent, FixturesS1Component, FixturesLeague1Component, FixturesBundComponent, LiveComponent, ResultsComponent],
  imports: [...modules],
  providers: [FootballDataService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
