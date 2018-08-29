import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {TableService} from '../../services/table.service';
import {Router} from '@angular/router';
import {OptionsService} from '../../services/options.service';

@Component({
  selector: 'app-overview-panel',
  templateUrl: './overview-panel.component.html',
  styleUrls: ['./overview-panel.component.css']
})
export class OverviewPanelComponent implements OnInit {

  tableSet = [];
  private width;
  private height;

  constructor(private tableService: TableService,
              private snackBar: MatSnackBar,
              private router: Router,
              private options: OptionsService) {
  }

  ngOnInit(): void {
    this.tableService.getTables().subscribe(data => {
        this.tableSet = data;
        console.log(this.tableSet.toString());
      },
      error => {
        this.onError(error);
      });
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    console.log(this.width + ' x ' + this.height);
    this.options.startTimer();
  }

  // Error handling
  private onError(error) {
    console.log(error);
    this.snackBar.open('Error retrieving data from server', 'X', {duration: 10000});
  }
}
