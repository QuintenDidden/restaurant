import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {OptionsService} from '../../services/options.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  time;

  constructor(private router: Router, private options: OptionsService, private snackBar: MatSnackBar) {
  }

  // Get Timer from options
  ngOnInit() {
    this.options.currentTimer.subscribe(data => this.time = data);
  }

  // Navigate to Options
  navigateOptions() {
    this.router.navigate(['/options']);
  }

  // Navigate to Overview
  navigateOverview() {
    this.router.navigate(['/overview']);
  }

  // Stop the overall timer
  stopTimer() {
    this.options.changeTimerStarted(false);
  }

  // Error handling
  private onError(error) {
    console.log(error);
    this.snackBar.open('Error retrieving data from server', 'X', {duration: 10000});
  }
}
