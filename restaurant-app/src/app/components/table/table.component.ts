import {Component, Input, OnInit} from '@angular/core';
import {OptionsService} from '../../services/options.service';
import {TableService} from '../../services/table.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {tryCatch} from 'rxjs/util/tryCatch';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() tableId;
  @Input() table;

  starterOnce = false;
  starterTwice = false;

  mainOnce = false;
  mainTwice = false;

  dessertOnce = false;
  dessertTwice = false;

  tableIsInService = true;
  borderWarning;
  warningColor;
  borderDanger;
  dangerColor;

  constructor(private tableService: TableService,
              private snackBar: MatSnackBar,
              private router: Router,
              private options: OptionsService) {
  }

  ngOnInit() {
    this.options.currentBorderOne.subscribe(data => {
      this.borderWarning = data;
    }, error => {
      this.onError(error);
    });
    this.options.currentBorderTwo.subscribe(data => {
      this.borderDanger = data;
    }, error => {
      this.onError(error);
    });
    this.options.currentColorOne.subscribe(data => {
      this.warningColor = data;
    }, error => {
      this.onError(error);
    });
    this.options.currentColorTwo.subscribe(data => {
      this.dangerColor = data;
    }, error => {
      this.onError(error);
    });

    this.startTimer();
  }

// Navigates to the table order overview
  viewTable(id) {
    console.log('card ' + id + ' clicked');
    this.router.navigate(['/table/', id]);
  }

// Error handling
  private onError(error) {
    console.log(error);
    this.snackBar.open('Error retrieving data from server', 'X', {duration: 10000});
  }

// Starter button clickevent
  starterPressed() {
    if (!this.starterOnce) {
      // Change style to pressed once
      this.starterOnce = true;
      // werkt niet
      document.getElementById('starterBtn' + this.tableId).style.borderBottom = 'yellow solid 5px';
    } else if (this.starterOnce && !this.starterTwice) {
      // Change style to pressed twice
      this.starterTwice = true;
      // document.getElementById('starterBtn').style.backgroundColor = 'red';
      document.getElementById('starterBtn' + this.tableId).style.borderBottom = 'green solid 5px';
    } else {
      // Change style to original style
      this.starterOnce = false;
      this.starterTwice = false;
      // document.getElementById('starterBtn').style.backgroundColor = 'white';
      document.getElementById('starterBtn' + this.tableId).style.borderBottom = 'white solid 5px';
    }
    this.table.minutes = 0;
  }

// Main button clickevent
  mainPressed() {
    if (!this.mainOnce) {
      // Change style to pressed once
      this.mainOnce = true;
      document.getElementById('mainBtn' + this.tableId).style.borderBottom = 'yellow solid 5px';
    } else if (this.mainOnce && !this.mainTwice) {
      // Change style to pressed twice
      this.mainTwice = true;
      document.getElementById('starterBtn' + this.tableId).style.borderBottom = 'white solid 5px';
      document.getElementById('mainBtn' + this.tableId).style.borderBottom = 'green solid 5px';
    } else {
      // Change style to original style
      this.mainOnce = false;
      this.mainTwice = false;
      document.getElementById('mainBtn' + this.tableId).style.borderBottom = 'white solid 5px';
    }
    this.table.minutes = 0;
  }

// Dessert button clickevent
  dessertPressed() {
    if (!this.dessertOnce) {
      // Change style to pressed once
      this.dessertOnce = true;
      document.getElementById('dessertBtn' + this.tableId).style.borderBottom = 'yellow solid 5px';
    } else if (this.dessertOnce && !this.dessertTwice) {
      // Change style to pressed twice
      this.dessertTwice = true;
      document.getElementById('starterBtn' + this.tableId).style.borderBottom = 'white solid 5px';
      document.getElementById('mainBtn' + this.tableId).style.borderBottom = 'white solid 5px';
      document.getElementById('dessertBtn' + this.tableId).style.borderBottom = 'green solid 5px';
    } else {
      // Change style to original style
      this.dessertOnce = false;
      this.dessertTwice = false;
      document.getElementById('dessertBtn' + this.tableId).style.borderBottom = 'white solid 5px';
    }
    this.table.minutes = 0;
  }

  // Start the local tableTimer
  async startTimer() {
    await this.delay((Math.floor(Math.random() * 10) + 1) * 2000);
    while (this.tableIsInService) {
      await this.delay(2000);
      this.table.minutes += 1;
      // Change color of table according to borders
      // Check if table is in 'warning' zone
      if (this.table.minutes > this.borderWarning && this.table.minutes < this.borderDanger) {
        document.getElementById('table' + this.tableId).style.backgroundColor = this.warningColor;
      }
      // Check if table is in 'danger' zone
      if (this.table.minutes > this.borderDanger) {
        document.getElementById('table' + this.tableId).style.backgroundColor = this.dangerColor;
      }
      // Table has customers but is not yet in a 'danger' or 'warning' zone
      if (this.table.minutes < this.borderWarning) {
        document.getElementById('table' + this.tableId).style.backgroundColor = '#ccffcc';
      }
    }
  }

  // Timer
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
