import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FormWizardComponent } from './form-wizard/form-wizard.component';


@NgModule({
  declarations: [FormWizardComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
