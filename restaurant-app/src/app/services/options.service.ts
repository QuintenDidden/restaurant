import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class OptionsService {

  private borderOne = new BehaviorSubject(10);
  private borderTwo = new BehaviorSubject(20);
  private orderDisplay = new BehaviorSubject('personal');
  private colorOne = new BehaviorSubject('#ffcc99');
  private colorTwo = new BehaviorSubject('#ff6666');
  private timer = new BehaviorSubject(0);
  private timerStarted = new BehaviorSubject(true);

  currentBorderOne = this.borderOne.asObservable();
  currentBorderTwo = this.borderTwo.asObservable();
  currentOrderDisplay = this.orderDisplay.asObservable();
  currentColorOne = this.colorOne.asObservable();
  currentColorTwo = this.colorTwo.asObservable();
  currentTimer = this.timer.asObservable();
  private timerStart = false;
  private time = 0;

  constructor() {
  }

  changeBorderOne(border: number) {
    this.borderOne.next(border);
  }

  changeBorderTwo(border: number) {
    this.borderTwo.next(border);
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

  changeTimer(time: number) {
    this.timer.next(time);
  }

  changeTimerStarted(state: boolean) {
    this.timerStarted.next(state);
  }

  async startTimer() {
    if (this.timerStart === false) {
      this.timerStart = true;
      this.changeTimerStarted(this.timerStart);
      this.timerStarted.subscribe(data => this.timerStart = data);
      while (this.timerStart) {
        this.time = this.time + 1;
        this.changeTimer(this.time);
        await this.delay(2000);
      }
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
