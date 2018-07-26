import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
  MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule, MatProgressSpinnerModule,
  MatSnackBarModule, MatCardModule, MatTabsModule, MatSliderModule, MatSelectModule
} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule, MatSelectModule,
    MatProgressSpinnerModule, MatCardModule, MatSnackBarModule, MatTabsModule, MatSliderModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule, MatSelectModule,
    MatProgressSpinnerModule, MatCardModule, MatSnackBarModule, MatTabsModule, MatSliderModule],
})
export class MaterialModule {
}
