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
import {AppRoutingModule} from './app-routing.module';
import {InMemoryRestaurantService} from './services/in-memory-restaurant.service';
import {DishtypesService} from './services/dishtypes.service';
import {OrderService} from './services/order.service';
import {DishesService} from './services/dishes.service';
import {TablePanelComponent} from './components/table-panel/table-panel.component';
import {OptionsService} from './services/options.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    OptionPanelComponent,
    OverviewPanelComponent,
    TablePanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryRestaurantService, {dataEncapsulation: false}
    ),
    AppRoutingModule,
  ],
  providers: [TableService, DishtypesService, OrderService, DishesService, OptionsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
