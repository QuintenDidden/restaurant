import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {TableService} from './services/table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  answer = '';
  answerDisplay = '';
  showSpinner = false;
  public tables = [];

  constructor(private tableService: TableService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    console.log('error in oninit');
    this.tableService.getTables().subscribe(data => {
        this.tables = data;
      },
      error => {
        this.snackBar.open('Error retrieving data from server', 'X', {duration: 10000});
      });
    console.log(this.tables[1]);
  }

  showAnswer() {
    this.showSpinner = true;
    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.showSpinner = false;
    }, 4000);
  }
}
