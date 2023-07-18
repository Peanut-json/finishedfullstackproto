import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { EditvirtualmachineComponent } from './components/editvirtualmachine/editvirtualmachine.component';
import { AddvirtualmachineComponent } from './components/addvirtualmachine/addvirtualmachine.component';



@NgModule({
  declarations: [
    WrapperComponent,
    EditvirtualmachineComponent,
    AddvirtualmachineComponent
  ],
  imports: [
    CommonModule ,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
