import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DiagnosticsData } from '../app/tabs/diagnostics.model';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  sharedData: DiagnosticsData;

  // _url = '';
  // constructor(private _http: HttpClient) {}

  // enroll(user: DiagnosticsData) {
  //   return this._http.post<any>(this._url, user);
  // }
}
