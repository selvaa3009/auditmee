import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  public wizardCount: Array<number> = [];
  public activeTab = 1;

  public isPanVisible: boolean = false;
  public isAadharVisible: boolean = false;
  public isdlVisible: boolean = false;

  pan(event: any) {
    if (event.target.checked === true) {
      this.isPanVisible = true;
    } else {
      this.isPanVisible = false;
    }
  }

  aadhar(event: any) {
    if (event.target.checked === true) {
      this.isAadharVisible = true;
    } else {
      this.isAadharVisible = false;
    }
  }

  dl(event: any) {
    if (event.target.checked === true) {
      this.isdlVisible = true;
    } else {
      this.isdlVisible = false;
    }
  }
  constructor() {
    this.wizardCount = Array.from(Array(10), (x, i) => i + 1);
  }

  ngOnInit(): void {}
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
    throw new Error('Method not implemented.');
  }

  model = new Hero('Selvaa', 'Kumar');

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log();
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
    console.log(JSON.stringify(this.model));
  }

  public data;
  getjson() {
    this.data = JSON.stringify(this.model);
    console.log(this.data); ;
  }

  // toggleEditable(event) {
  //   if (event.target.checked) {
  //     this.contentEditable = true;
  //     console.log(event.target.checked);
  //   }
  // }
}
