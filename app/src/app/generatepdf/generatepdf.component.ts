import { Component, OnInit } from '@angular/core';
import { DiagnosticsData } from './../tabs/diagnostics.model';
import { FormDataService } from './../form-data.service';

@Component({
  selector: 'app-generatepdf',
  templateUrl: './generatepdf.component.html',
  styleUrls: ['./generatepdf.component.scss'],
})
export class GeneratepdfComponent implements OnInit {
  constructor(private dataService: FormDataService) {}
  model: any;
  ngOnInit(): void {
    this.model = this.dataService.sharedData;
  }

  submit() {
    throw new Error('Method not implemented.');
  }

}
