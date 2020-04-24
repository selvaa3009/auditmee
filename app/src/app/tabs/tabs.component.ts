import { Component, OnInit } from '@angular/core';
import { DiagnosticsData } from './diagnostics.model';
import { FormDataService } from '../form-data.service';
import { Router } from '@angular/router';

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
  f2pan(event: any) {
    if (event.target.checked === true) {
      this.isPanVisible = true;
    } else {
      this.isPanVisible = false;
    }
  }

  f2aadhar(event: any) {
    if (event.target.checked === true) {
      this.isAadharVisible = true;
    } else {
      this.isAadharVisible = false;
    }
  }

  f2dl(event: any) {
    if (event.target.checked === true) {
      this.isdlVisible = true;
    } else {
      this.isdlVisible = false;
    }
  }
  f4pan(event: any) {
    if (event.target.checked === true) {
      this.isPanVisible = true;
    } else {
      this.isPanVisible = false;
    }
  }

  f4aadhar(event: any) {
    if (event.target.checked === true) {
      this.isAadharVisible = true;
    } else {
      this.isAadharVisible = false;
    }
  }

  f4dl(event: any) {
    if (event.target.checked === true) {
      this.isdlVisible = true;
    } else {
      this.isdlVisible = false;
    }
  }
  f6pan(event: any) {
    if (event.target.checked === true) {
      this.isPanVisible = true;
    } else {
      this.isPanVisible = false;
    }
  }

  f6aadhar(event: any) {
    if (event.target.checked === true) {
      this.isAadharVisible = true;
    } else {
      this.isAadharVisible = false;
    }
  }

  f6dl(event: any) {
    if (event.target.checked === true) {
      this.isdlVisible = true;
    } else {
      this.isdlVisible = false;
    }
  }

  f8pan(event: any) {
    if (event.target.checked === true) {
      this.isPanVisible = true;
    } else {
      this.isPanVisible = false;
    }
  }

  f8aadhar(event: any) {
    if (event.target.checked === true) {
      this.isAadharVisible = true;
    } else {
      this.isAadharVisible = false;
    }
  }

  f8dl(event: any) {
    if (event.target.checked === true) {
      this.isdlVisible = true;
    } else {
      this.isdlVisible = false;
    }
  }

  f10pan(event: any) {
    if (event.target.checked === true) {
      this.isPanVisible = true;
    } else {
      this.isPanVisible = false;
    }
  }

  f10aadhar(event: any) {
    if (event.target.checked === true) {
      this.isAadharVisible = true;
    } else {
      this.isAadharVisible = false;
    }
  }

  f10dl(event: any) {
    if (event.target.checked === true) {
      this.isdlVisible = true;
    } else {
      this.isdlVisible = false;
    }
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

  submitted = false;
  model = new DiagnosticsData(
    'trading',
    'MCX',
    'Mumbai',
    'Bangalore',
      3,
    'madiwala',
    'koramangala',
    'bangalore',
    'bengaluru',
    '23',
    23,

    23,
    'haricom',
    'text',
    'pan',
    'aadhar',
    'dl',
    'f2placebusiness',
     true,
    'f2address1',
    'f2address2',
    'f2city',
    'f2zip',
    'f2address1',
    'f2address2',
    'f2city',
    'f2zip',
    'f2address1',
    'f2address2',
    'f2city',

    true,
    'kumar',
    false,
    'dev3',
     true,
    'madiwala',
    false,
    'bangalore',
    true,
    '23',
    true,
    false,

    true,
    'kumar',
    false,
    'pan',
    true,
    'hari',
    true,
    'kumar',
    false,
    'dhoni',
    true,
    'kohli',
    false,
    'raina',

    56,

    777,
    'dev',
    false,
    true,
    true,
    true,

    true,
    false,
    false,

    'madiwala',
    'madurai'
  );

  constructor(
    private _userdataService: FormDataService,
    private router: Router
  ) {
    this.wizardCount = Array.from(Array(9), (x, i) => i + 1);
  }

  onPopulate() {
    this._userdataService.sharedData = this.model;
    this.router.navigateByUrl('/generatepdf');
  }

  onSubmit() {
    console.log('not created');
  }
}
