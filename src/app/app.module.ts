import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//register
import { AddComponent } from './students/add/add.component';
import { ViewComponent } from './students/view/view.component';
import { EditComponent } from './students/edit/edit.component';
import {TokenInterceptor} from './Model/intercepters';
import { SingleComponent } from './students/single/single.component';
//phone
import { PhoneViewComponent } from './phone/view/view.component';
import { AddPhoneComponent } from "./phone/add/add.component";
import { SinglePhoneComponent } from "./phone/single/single.component";
import { EditPhoneComponent } from "./phone/edit/edit.component";


import { TestComponent } from './test/test.component';
import { AboutComponent } from './about/about.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddComponent,
    ViewComponent,
    EditComponent,
    SingleComponent,
    PhoneViewComponent,
    AddPhoneComponent,
    SinglePhoneComponent,
    EditPhoneComponent,
    TestComponent,
    AboutComponent,
    PrivacypolicyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
