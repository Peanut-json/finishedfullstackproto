import { WrappedNodeExpr } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { DashboardModule } from './dashboard.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddvirtualmachineComponent } from './components/addvirtualmachine/addvirtualmachine.component';
import { EditvirtualmachineComponent } from './components/editvirtualmachine/editvirtualmachine.component';

const routes: Routes = [

{
  path: '' ,
  component: WrapperComponent,
  children:[
    {
      path: 'dashbaord', // > localhoast: 4200/dashbaord
      component: DashboardComponent
    },
    {
      path: 'addenviroment', // > localhoast: 4200/addvirtualmachine
      component: AddvirtualmachineComponent
    },
    {
      path: 'editenviroment', // > localhoast: 4200/editvirtualmachine
      component: EditvirtualmachineComponent
    }
  ]
},
{
  path: '**',
  redirectTo: '/dashbaord',
  pathMatch: 'full'
}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }