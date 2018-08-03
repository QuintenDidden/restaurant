import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {DishtypesService} from '../../services/dishtypes.service';
import {TableService} from '../../services/table.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-overview-panel',
  templateUrl: './overview-panel.component.html',
  styleUrls: ['./overview-panel.component.css']
})
export class OverviewPanelComponent implements OnInit {

  private tableSet = [];

  constructor(private dishtypeService: DishtypesService,
              private tableService: TableService,
              private snackBar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit(): void {
    this.tableService.getTables().subscribe(data => {
      this.tableSet = data;
      console.log(this.tableSet.toString());
    },
      error => {
      console.log('error in reading');
      console.log(error);
      this.snackBar.open('Error retrieving data from server', 'X', {duration: 10000});
      });
  }

  viewTable(id) {
    //view table details
    //routerlink?
    console.log('card ' + id + ' clicked');
    this.router.navigate(['/table/' + id]);

  }
}
