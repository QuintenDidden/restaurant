import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-panel',
  templateUrl: './option-panel.component.html',
  styleUrls: ['./option-panel.component.css']
})
export class OptionPanelComponent implements OnInit {
  slidervalue = 10;
  border_one = this.slidervalue;
  border_two = this.slidervalue * 2;
  border_three = this.slidervalue * 3;
  color_one = 'white';
  color_two = 'yellow';
  color_three = 'red';

  orderdisplay = 'personal';

  constructor() { }

  ngOnInit() {
  }

  sliderChanged() {
    this.border_one = this.slidervalue;
    this.border_two = this.slidervalue * 2;
    this.border_three = this.slidervalue * 3;
  }
}
