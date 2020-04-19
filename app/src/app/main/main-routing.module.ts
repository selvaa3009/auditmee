import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormWizardComponent } from './form-wizard/form-wizard.component';


const routes: Routes = [
  {
    path: 'main',
    component: FormWizardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
