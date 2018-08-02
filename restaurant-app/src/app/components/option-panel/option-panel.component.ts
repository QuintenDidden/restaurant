import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-panel',
  templateUrl: './option-panel.component.html',
  styleUrls: ['./option-panel.component.css']
})
export class OptionPanelComponent implements OnInit {
  sliderValue = 10;
  border_one = this.sliderValue;
  border_two = this.sliderValue * 2;
  border_three = this.sliderValue * 3;
  color_one = 'white';
  color_two = 'yellow';
  color_three = 'red';

  orderdisplay = 'personal';

  constructor() { }

  ngOnInit() {
  }

  sliderChanged(sliderValue) {
    console.log('slider changed');
    this.border_one = sliderValue;
    this.border_two = sliderValue * 2;
    this.border_three = sliderValue * 3;
  }


}
