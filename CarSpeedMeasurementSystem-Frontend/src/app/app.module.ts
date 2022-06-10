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
import { SensorLocationsComponent } from './sensor-locations/sensor-locations.component';
import { SensorLocationComponent } from './sensor-location/sensor-location.component';
import { MapsComponent } from './maps/maps.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SensorReadingComponent } from './sensor-reading/sensor-reading.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelComponent,
    SensorsComponent,
    UsersComponent,
    UserComponent,
    SensorComponent,
    SensorLocationsComponent,
    SensorLocationComponent,
    MapsComponent,
    SensorReadingComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
