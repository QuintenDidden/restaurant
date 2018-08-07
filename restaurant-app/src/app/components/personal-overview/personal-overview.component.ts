import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personal-overview',
  templateUrl: './personal-overview.component.html',
  styleUrls: ['./personal-overview.component.css']
})
export class PersonalOverviewComponent implements OnInit {
  @Input() orders;
  @Input() tableId;

  constructor() { }

  ngOnInit() {
  }

}
