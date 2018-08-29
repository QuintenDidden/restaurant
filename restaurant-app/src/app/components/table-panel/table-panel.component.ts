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
  orderDisplay;

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
      this.onError(error);
    });

    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
      this.tableFilter();
    }, error => {
      this.onError(error);
    });

    this.optionsService.currentTimer.subscribe(data => {
        this.tableTimer = data;
      }, error => {
      this.onError(error);
      }
    );
    this.optionsService.currentBorderOne.subscribe(data => {
        this.borderOne = data;
      }, error => {
      this.onError(error);
      }
    );
    this.optionsService.currentBorderTwo.subscribe(data => {
        this.borderTwo = data;
      }, error => {
      this.onError(error);
      }
    );

    this.tableStart = this.tableTimer;

    this.optionsService.currentColorOne.subscribe(data => {
        this.tableWarning = data;
      }, error => {
      this.onError(error);
      }
    );
    this.optionsService.currentColorTwo.subscribe(data => {
        this.tableDanger = data;
      }, error => {
      this.onError(error);
      }
    );

    this.optionsService.currentOrderDisplay.subscribe(data => {
      this.orderDisplay = data;
    }, error => {
      this.onError(error);
    });
  }

  tableFilter() {
    this.tableOrders = this.orders.filter(order => order.table === this.tableId);
  }

  onError(error) {
    console.log(error);
    this.snackBar.open('Error retrieving data from server', 'X', {duration: 10000});
  }
}
