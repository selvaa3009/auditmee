import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.scss']
})
export class FormWizardComponent implements OnInit {
  public wizardCount: Array<number> = [];
  public activeTab = 1;
  constructor() {
    this.wizardCount = Array.from(Array(10), (x, i) => i + 1);
  }

  ngOnInit(): void {
  }
  changeTab(i, eventFrom) {
    switch (eventFrom) {
      case 'head':
        this.activeTab = i;
        break;
      case 'back':
        this.activeTab = i - 1;
        break;
      case 'next':
        this.activeTab = i + 1;
        break;
      case 'submit':
        this.submitForm();
        break;
      default:
        this.activeTab = i;
        break;
    }
    // this.activeTab = i;
  }
  submitForm() {
    throw new Error("Method not implemented.");
  }

}
