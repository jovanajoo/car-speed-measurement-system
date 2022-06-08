import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { SensorReadingComponent } from './sensor-reading/sensor-reading.component';
import { SensorComponent } from './sensor/sensor.component';
import { SensorsComponent } from './sensors/sensors.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'sensors', component: SensorsComponent },
  { path: 'sensor/:action/:serial_no', component: SensorComponent },
  { path: 'sensor/:action', component: SensorComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:action/:admin_id', component: UserComponent },
  { path: 'user/:action', component: UserComponent },
  { path: 'sensorreadings', component: SensorReadingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
