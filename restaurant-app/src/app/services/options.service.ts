import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class OptionsService {

  private borderOne = new BehaviorSubject(10);
  private borderTwo = new BehaviorSubject(20);
  private borderThree = new BehaviorSubject(30);
  private orderDisplay = new BehaviorSubject('personal');
  private colorOne = new BehaviorSubject('white');
  private colorTwo = new BehaviorSubject('yellow');
  private colorThree = new BehaviorSubject('red');
  private timer = new BehaviorSubject(0);
  private timerStarted = new BehaviorSubject(true);

  currentBorderOne = this.borderOne.asObservable();
  currentBorderTwo = this.borderTwo.asObservable();
  currentBorderThree = this.borderThree.asObservable();
  currentOrderDisplay = this.orderDisplay.asObservable();
  currentColorOne = this.colorOne.asObservable();
  currentColorTwo = this.colorTwo.asObservable();
  currentColorThree = this.colorThree.asObservable();
  currentTimer = this.timer.asObservable();
  currentTimerState = this.timerStarted.asObservable();
  private timerStart: boolean;
  private time = 0;

  constructor() {
  }

  changeBorderOne(border: number) {
    this.borderOne.next(border);
  }

  changeBorderTwo(border: number) {
    this.borderTwo.next(border);
  }

  changeBorderThree(border: number) {
    this.borderThree.next(border);
  }

  changeOrderDisplay(order: string) {
    this.orderDisplay.next(order);
  }

  changeColorOne(color: string) {
    this.colorOne.next(color);
  }
  changeColorTwo(color: string) {
    this.colorTwo.next(color);
  }
  changeColorThree(color: string) {
    this.colorThree.next(color);
  }

  changeTimer(time: number) {
    this.timer.next(time);
  }

  changeTimerStarted(state: boolean){
    this.timerStarted.next(state);
  }

  async startTimer() {
    this.timerStart = true;
    this.changeTimerStarted(this.timerStart);
    this.timerStarted.subscribe(data => this.timerStart = data);
    while (this.timerStart) {
      this.time = this.time + 1;
      this.changeTimer(this.time);
      console.log(this.time);
      await this.delay(1000);
    }
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
