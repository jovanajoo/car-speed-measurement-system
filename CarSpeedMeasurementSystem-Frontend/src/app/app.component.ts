import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarSpeedMeasurementSystem-Frontend';

  constructor(private router: Router, private route: ActivatedRoute) { }

  checkPermission() {
    if (localStorage.getItem('user')) {
      return true;
    }
    if (this.router.url == '/login') {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}

