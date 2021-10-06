import { FindComponent } from './components/find/find.component';
import { AllComponent } from './components/all/all.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'all', component: AllComponent },
  { path: 'find', component: FindComponent },
  { path: '**', component: MainComponent } // this is a wildcard incase the path is not
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
