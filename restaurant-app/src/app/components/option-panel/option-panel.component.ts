import {Component, OnInit} from '@angular/core';
import {OptionsService} from '../../services/options.service';

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
  color_one = 'yellow';
  color_two = 'red';
  // color_three = 'red';

  orderdisplay = 'personal';

  constructor(private options: OptionsService) {
  }

  ngOnInit() {
  }

  sliderChanged(sliderValue) {
    console.log('slider changed');
    this.border_one = sliderValue;
    this.border_two = sliderValue * 2;
    // this.border_three = sliderValue * 3;
    // broadcast changes
    this.options.changeBorderOne(this.border_one);
    this.options.changeBorderTwo(this.border_two);
    // this.options.changeBorderThree(this.border_three);
  }


  orderChanged(orderdisplay: string) {
    this.orderdisplay = orderdisplay;
    // broadcast change
    this.options.changeOrderDisplay(this.orderdisplay);
  }

  colorOneChanged(color_one: string) {
    this.color_one = color_one;
    // broadcast change
    this.options.changeColorOne(this.color_one);
  }

  colorTwoChanged(color_two: string) {
    this.color_two = color_two;
    // broadcast change
    this.options.changeColorTwo(this.color_two);
  }

  // colorThreeChanged(color_three: string) {
  //   this.color_three = color_three;
  //   // broadcast change
  //   this.options.changeColorThree(this.color_three);
  // }
}
