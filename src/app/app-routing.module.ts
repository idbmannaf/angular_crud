import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './students/add/add.component';
import { SingleComponent } from './students/single/single.component';
import { ViewComponent } from './students/view/view.component';
import { EditComponent } from './students/edit/edit.component';

import { PhoneViewComponent } from './phone/view/view.component';
import { AddPhoneComponent } from "./phone/add/add.component";
import { SinglePhoneComponent } from "./phone/single/single.component";
import { EditPhoneComponent } from "./phone/edit/edit.component";

import { LoginComponent } from './login/login.component';
import { TestComponent} from './test/test.component';
import {  AboutComponent } from "./about/about.component";
import { PrivacypolicyComponent } from "./privacypolicy/privacypolicy.component";


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'add', component: AddComponent},
  {path: 'login', component: LoginComponent},
  {path: 'view', component: ViewComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'single/:id', component: SingleComponent},
  {path: 'phone', component: PhoneViewComponent},
  {path: 'addphone', component: AddPhoneComponent},
  {path: 'showphone/:id', component: SinglePhoneComponent},
  {path: 'editphone/:id', component: EditPhoneComponent},
  {path: 'test', component: TestComponent},
  {path: 'about', component: AboutComponent},
  {path: 'privacy', component: PrivacypolicyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
