import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PremierLeagueComponent } from './league/premier-league/premier-league.component';
import { LaLigaComponent } from './league/la-liga/la-liga.component';
import { BundesligaComponent } from './league/bundesliga/bundesliga.component';
import { SerieAComponent } from './league/serie-a/serie-a.component';
import { LigueOneComponent } from './league/ligue-one/ligue-one.component';
import { FixturesPlComponent } from './Fixtures/fixtures-pl/fixtures-pl.component';
import { FixturesBundComponent } from './Fixtures/fixtures-bund/fixtures-bund.component';
import { FixturesS1Component } from './Fixtures/fixtures-s1/fixtures-s1.component';
import { FixturesLeague1Component } from './Fixtures/fixtures-league1/fixtures-league1.component';
import { FixturesLaComponent } from './Fixtures/fixtures-la/fixtures-la.component';
import { LiveComponent } from './components/live/live.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'premier-league', component: PremierLeagueComponent },
  { path: 'la-liga', component: LaLigaComponent },
  { path: 'bundesliga', component: BundesligaComponent },
  { path: 'serie-a', component: SerieAComponent },
  { path: 'ligue-1', component: LigueOneComponent },
  {path: 'premier_league', component: FixturesPlComponent},
  {path:'fix_bundesliga',component:FixturesBundComponent},
  {path:'serie_a',component:FixturesS1Component},
  {path:'ligue_1',component:FixturesLeague1Component},
  {path:'la_liga',component:FixturesLaComponent},
  {path:'live',component:LiveComponent},
  {path:'result',component:ResultsComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
