import {Component, OnInit} from '@angular/core';
import {TableService} from '../../services/table.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-overview-panel',
  templateUrl: './overview-panel.component.html',
  styleUrls: ['./overview-panel.component.css']
})
export class OverviewPanelComponent implements OnInit {

  public tables = [];

  constructor(private tableService: TableService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.tableService.getTables().subscribe(data => {
        this.tables = data;
        console.log('success');
      },
      error => {
        console.log('error in reading');
        console.log(error);
        this.snackBar.open('Error retrieving data from server', 'X', {duration: 10000});
      });
    console.log(this.tables[3]);
  }
}
