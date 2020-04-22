import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainsectionComponent } from './mainsection/mainsection.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { TabsComponent } from './tabs/tabs.component';
import { AnimationsComponent } from './animations/animations.component';
import { BlankpageComponent } from './blankpage/blankpage.component';
import { BordersComponent } from './borders/borders.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ChartsComponent } from './charts/charts.component';
import { ColorsComponent } from './colors/colors.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { OthersComponent } from './others/others.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TablesComponent } from './tables/tables.component';
import { GeneratepdfComponent } from './generatepdf/generatepdf.component';


const routes: Routes = [
  // { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '', component: MainsectionComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'animation', component: AnimationsComponent },
  { path: 'blackpage', component: BlankpageComponent },
  { path: 'borders', component: BordersComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'pagenotfound', component: PagenotfoundComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'others', component: OthersComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'blankpage', component: TabsComponent },
  { path: 'generatepdf', component: GeneratepdfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
