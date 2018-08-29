import {Component, OnInit} from '@angular/core';
import {OptionsService} from '../../services/options.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-option-panel',
  templateUrl: './option-panel.component.html',
  styleUrls: ['./option-panel.component.css']
})
export class OptionPanelComponent implements OnInit {
  // Initial values are initialized to represent data in case of severe server delay
  sliderValue = 10;
  border_one = this.sliderValue;
  border_two = this.sliderValue * 2;
  color_one = 'yellow';
  color_two = 'red';
  orderdisplay = 'personal';

  constructor(private options: OptionsService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.options.currentOrderDisplay.subscribe(data => {
      this.orderdisplay = data;
    }, error => {
      this.onError(error);
    });
    this.options.currentColorOne.subscribe(data => {
      this.color_one = data;
    }, error => {
      this.onError(error);
    });
    this.options.currentColorTwo.subscribe(data => {
      this.color_two = data;
    }, error => {
      this.onError(error);
    });
    this.options.currentBorderOne.subscribe(data => {
      this.border_one = data;
    }, error => {
      this.onError(error);
    });
    this.options.currentBorderTwo.subscribe(data => {
      this.border_two = data;
    }, error => {
      this.onError(error);
    });
  }

  // Registers slider event
  sliderChanged(sliderValue) {
    this.border_one = sliderValue;
    this.border_two = sliderValue * 2;
    // broadcast changes
    this.options.changeBorderOne(this.border_one);
    this.options.changeBorderTwo(this.border_two);
  }

  // Registers dropbox change
  orderChanged(orderdisplay: string) {
    this.orderdisplay = orderdisplay;
    // broadcast change
    this.options.changeOrderDisplay(this.orderdisplay);
  }

  // Registers color change
  colorOneChanged(color_one: string) {
    this.color_one = color_one;
    // broadcast change
    this.options.changeColorOne(this.color_one);
  }

  // Registers color change
  colorTwoChanged(color_two: string) {
    this.color_two = color_two;
    // broadcast change
    this.options.changeColorTwo(this.color_two);
  }

  // Error handling
  private onError(error) {
    console.log(error);
    this.snackBar.open('Error retrieving data from server', 'X', {duration: 10000});
  }
}
