import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {DishtypesService} from '../../services/dishtypes.service';

@Component({
  selector: 'app-overview-panel',
  templateUrl: './overview-panel.component.html',
  styleUrls: ['./overview-panel.component.css']
})
export class OverviewPanelComponent implements OnInit {

  public typeSet = [];

  constructor(private dishtypeService: DishtypesService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.dishtypeService.getDishTypes().subscribe(data => {
        this.typeSet = data;
        console.log('success');
      },
      error => {
        console.log('error in reading');
        console.log(error);
        this.snackBar.open('Error retrieving data from server', 'X', {duration: 10000});
      });
  }
}
