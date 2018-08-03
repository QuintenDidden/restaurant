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
import {InMemoryTableService} from './services/in-memory-table.service';
import {InMemoryDishTypesService} from './services/in-memory-dish-types.service';
import {DishtypesService} from './services/dishtypes.service';
import {OrderService} from './services/order.service';
import {DishesService} from './services/dishes.service';
import {InMemoryDishesService} from './services/in-memory-dishes.service';
import {InMemoryOrdersService} from './services/in-memory-orders.service';
import {TablePanelComponent} from './components/table-panel/table-panel.component';

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
      InMemoryDishTypesService, {dataEncapsulation: false}
    ),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryTableService, {dataEncapsulation: false}
    ),
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDishesService, {dataEncapsulation: false}
    // ),
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryOrdersService, {dataEncapsulation: false}
    // ),
    AppRoutingModule,
  ],
  providers: [TableService, DishtypesService, OrderService, DishesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
