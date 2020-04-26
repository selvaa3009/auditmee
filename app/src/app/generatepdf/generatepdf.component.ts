import { Component, OnInit } from '@angular/core';
import { DiagnosticsData } from './../tabs/diagnostics.model';
import { FormDataService } from './../form-data.service';
import * as jsPDF from 'jspdf'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generatepdf',
  templateUrl: './generatepdf.component.html',
  styleUrls: ['./generatepdf.component.scss'],
})
export class GeneratepdfComponent implements OnInit {
  constructor(
    private dataService: FormDataService,
    private httpClient: HttpClient,
    private router: Router
  ) {}
  model: any;
  content: any = 'demo';
  doc: any = new jsPDF();
  ngOnInit(): void {
    this.model = this.dataService.sharedData;
  }

  submit() {
    this.httpClient
      .post('/formaction', { ...this.model, content: this.content })
      .subscribe(() => {});
    this.router.navigateByUrl('');
  }

  formContent: string = this.model;

  downloadPDF() {
    console.log('downloading');
    console.log(this.content);
    this.doc.fromHTML(this.formContent, 15, 15);
    this.doc.save('auditmee.pdf');
  }
}
