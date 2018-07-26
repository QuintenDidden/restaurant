import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TableService} from './services/table.service';
import {NavigationComponent} from './components/navigation/navigation.component';
import {OptionPanelComponent} from './components/option-panel/option-panel.component';
import {OverviewPanelComponent} from './components/overview-panel/overview-panel.component';
import { AppRoutingModule } from './/app-routing.module';
import {InMemoryTableService} from './services/in-memory-table.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    OptionPanelComponent,
    OverviewPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryTableService, { dataEncapsulation: false }
    ),
    AppRoutingModule,
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
