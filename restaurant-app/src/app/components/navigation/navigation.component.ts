import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {OptionsService} from '../../services/options.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  time;

  constructor(private router: Router, private options: OptionsService) {
  }

  ngOnInit() {
    this.options.currentTimer.subscribe(data => this.time = data);
  }

  navigateOptions() {
    this.router.navigate(['/options']);
  }

  navigateOverview() {
    this.router.navigate(['/overview']);
  }

  stopTimer() {
    this.options.changeTimerStarted(false);
  }

}
