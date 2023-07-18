import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { EditvirtualmachineComponent } from './components/editvirtualmachine/editvirtualmachine.component';
import { AddvirtualmachineComponent } from './components/addvirtualmachine/addvirtualmachine.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav'; //! side navigation 
import {MatIconModule} from '@angular/material/icon'; //! material icons 
import {MatListModule} from '@angular/material/list'; //! list module 
import {MatToolbarModule} from '@angular/material/toolbar'; //! toolbar module 




@NgModule({
  declarations: [
    WrapperComponent,
    EditvirtualmachineComponent,
    AddvirtualmachineComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule ,
    DashboardRoutingModule,

    // NG material Modules
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule 
    
    
  ]
})
export class DashboardModule { }
