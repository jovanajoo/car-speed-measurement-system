import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormControl } from '@angular/forms';
import { LoginService } from '../login.service';
import { UsersService } from '../users.service';
import * as bcrypt from 'bcryptjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new UntypedFormControl('');
  password = new UntypedFormControl('');

  constructor(private loginService: LoginService, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.username.value == '' || this.password.value == '') {
      console.log('empty');
      return;
    }
    this.userService.usernameExists(this.username.value).subscribe(res => {
      if (!res) {
        console.log('not exist');
        return;
      }
      this.userService.getUserByUsername(this.username.value).subscribe(res => {
        let user = res;
        if (bcrypt.compareSync(this.password.value, user.password!)) {
          console.log('works');
          delete user.password;
          delete user.email;
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/panel']);
        }
        else {
          console.log('lul');
          return;
        }
      })
    });
  }

}
