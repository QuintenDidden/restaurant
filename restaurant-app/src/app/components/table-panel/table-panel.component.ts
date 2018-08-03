import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-table-panel',
  templateUrl: './table-panel.component.html',
  styleUrls: ['./table-panel.component.css']
})
export class TablePanelComponent implements OnInit {

  public tableId;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.tableId = this.route.parent.snapshot.params['tableId'];
  }

  ngOnInit() {
  }

}
