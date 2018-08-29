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
import {OrderService} from './services/order.service';
import {DishesService} from './services/dishes.service';
import {TablePanelComponent} from './components/table-panel/table-panel.component';
import {OptionsService} from './services/options.service';
import {PersonalOverviewComponent} from './components/personal-overview/personal-overview.component';
import {OrderOverviewComponent} from './components/order-overview/order-overview.component';
import {TableComponent} from './components/table/table.component';

@NgModule({
  declarations: [
    // All components
    AppComponent,
    NavigationComponent,
    OptionPanelComponent,
    OverviewPanelComponent,
    TablePanelComponent,
    PersonalOverviewComponent,
    OrderOverviewComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Custom Material Design module --> material.module.ts
    MaterialModule,
    FormsModule,
    // In memory web API
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryRestaurantService, {dataEncapsulation: false}
    ),
    // Routing module
    AppRoutingModule,
  ],
  // All services
  providers: [TableService, OrderService, DishesService, OptionsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
