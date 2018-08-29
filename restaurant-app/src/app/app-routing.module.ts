import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewPanelComponent} from './components/overview-panel/overview-panel.component';
import {OptionPanelComponent} from './components/option-panel/option-panel.component';
import {TablePanelComponent} from './components/table-panel/table-panel.component';

// Routing paths
const routes: Routes = [
  {path: '', redirectTo: '/overview', pathMatch: 'full'},
  {path: 'overview', component: OverviewPanelComponent},
  {path: 'options', component: OptionPanelComponent},
  {path: 'table/:tableId', component: TablePanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
