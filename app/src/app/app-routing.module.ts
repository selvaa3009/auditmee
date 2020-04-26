import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainsectionComponent } from './mainsection/mainsection.component';
import { TabsComponent } from './tabs/tabs.component';
import { GeneratepdfComponent } from './generatepdf/generatepdf.component';
import { CompletedComponent } from './completed/completed.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: '', redirectTo: 'MainsectionComponent', pathMatch: 'full' },
  { path: '', component: MainsectionComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'blankpage', component: TabsComponent },
  { path: 'generatepdf', component: GeneratepdfComponent },
  { path: 'completed', component: CompletedComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
