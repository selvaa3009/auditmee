import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {

  content =  '<p>Completed content</p>';

  constructor() {}

  ngOnInit(): void {}
}
