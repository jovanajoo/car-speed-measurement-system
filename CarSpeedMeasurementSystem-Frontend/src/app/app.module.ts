import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { SensorsComponent } from './sensors/sensors.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { SensorComponent } from './sensor/sensor.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelComponent,
    SensorsComponent,
    UsersComponent,
    UserComponent,
    SensorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
