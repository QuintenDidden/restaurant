import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TableService} from '../../services/table.service';
import {MatSnackBar} from '@angular/material';
import {OrderService} from '../../services/order.service';
import {OptionsService} from '../../services/options.service';

@Component({
  selector: 'app-table-panel',
  templateUrl: './table-panel.component.html',
  styleUrls: ['./table-panel.component.css']
})
export class TablePanelComponent implements OnInit {

  tableId;
  sub: any;
  table;
  orders;
  tableOrders;
  tableStart;
  tableTimer;
  borderOne;
  tableWarning;
  borderTwo;
  tableDanger;

  constructor(private router: Router, private route: ActivatedRoute, private tableService: TableService,
              private snackBar: MatSnackBar, private orderService: OrderService, private optionsService: OptionsService) {
    this.sub = this.route.params.subscribe(params => {
      this.tableId = +params['tableId'];
    });
  }

  ngOnInit() {
    this.tableService.getTable(this.tableId).subscribe(data => {
      this.table = data;
    }, error => {
      console.log('error in reading table');
      console.log(error);
      this.snackBar.open('Error retrieving data from server', 'X', {duration: 10000});
    });

    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
      this.tableFilter();
    }, error => {
      console.log('error in reading orders');
      console.log(error);
      this.snackBar.open('Error retrieving data from server', 'X', {duration: 10000});
    });

    this.optionsService.currentTimer.subscribe(data => {
        this.tableTimer = data;
      }, error => {
        console.log(error);
        this.snackBar.open('Error retrieving data from server', 'X', {duration: 10000});
      }
    );
    this.optionsService.currentBorderOne.subscribe(data => {
        this.borderOne = data;
      }, error => {
        console.log(error);
        this.snackBar.open('Error retrieving data from server', 'X', {duration: 10000});
      }
    );
    this.optionsService.currentBorderTwo.subscribe(data => {
        this.borderTwo = data;
      }, error => {
        console.log(error);
        this.snackBar.open('Error retrieving data from server', 'X', {duration: 10000});
      }
    );

    this.tableStart = this.tableTimer;

    this.optionsService.currentColorOne.subscribe(data => {
        this.tableWarning = data;
      }, error => {
        console.log(error);
        this.snackBar.open('Error retrieving data from server', 'X', {duration: 10000});
      }
    );
    this.optionsService.currentColorTwo.subscribe(data => {
        this.tableDanger = data;
      }, error => {
        console.log(error);
        this.snackBar.open('Error retrieving data from server', 'X', {duration: 10000});
      }
    );
  }

  tableFilter() {
    this.tableOrders = this.orders.filter(order => order.table === this.tableId);
  }

  async tableColor() {
    while (true) {
      if (this.tableTimer > this.tableStart + this.borderOne) {
        this.table.color = this.tableWarning;
      }
      if (this.tableTimer > this.tableStart + this.borderTwo) {
        this.table.color = this.tableDanger;
      }
      await this.delay(1000);
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
