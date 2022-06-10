import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/User';
import { UsersService } from '../users.service';
import * as bcrypt from 'bcryptjs';
import { trim } from 'jquery';
declare var $: any;
const salt = bcrypt.genSaltSync(12);
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user?: User;

  username = new UntypedFormControl('');
  fullName = new UntypedFormControl('');
  email = new UntypedFormControl('');
  password = new UntypedFormControl('');
  password_confirm = new UntypedFormControl('');
  admin = new UntypedFormControl(false);

  usernameErr?: boolean;
  fullNameErr?: boolean;
  passErr?: boolean;
  emailErr?: boolean;
  notEqualPassErr?: boolean;
  usernameExistsErr?: boolean;

  action = '';

  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.action = String(this.route.snapshot.paramMap.get('action'));
    if (this.action == 'update') {
      const id = Number(this.route.snapshot.paramMap.get('admin_id'));
      this.getUser(id);
    }
  }

  getUser(adminId?: number): void {
    this.usersService.getUserById(adminId).subscribe(res => {
      this.user = res;
      this.fullName.setValue(this.user?.fullName);
      this.email.setValue(this.user?.email);
    });
  }

  updateUser() {
    this.user!.fullName = this.fullName.value;
    this.user!.email = this.email.value;
    this.usersService.updateUser(this.user).subscribe(res => {
      this.toggleToast('.updated');
    });
  }

  insertUser() {
    if (String(this.username.value).trim().length == 0) {
      this.usernameErr = true;
      return;
    }
    this.usersService.usernameExists(String(this.username.value)).subscribe(async res => {
      this.usernameExistsErr = res;
      this.fullNameErr = String(this.fullName.value).trim().length == 0;
      this.emailErr = String(this.email.value).trim().length == 0;
      this.passErr = String(this.password.value).length == 0;
      this.notEqualPassErr = this.password.value != this.password_confirm.value;
      if (this.usernameExistsErr || this.usernameErr || this.fullNameErr || this.emailErr || this.passErr || this.notEqualPassErr) {
        return;
      }

      const newUser: User = new User();
      newUser!.username = this.username.value;
      newUser!.fullName = this.fullName.value;
      newUser!.email = this.email.value;
      const hashedPassword = bcrypt.hashSync(this.password.value, salt);
      console.log(hashedPassword);
      newUser!.password = hashedPassword;
      newUser!.admin = this.admin.value;
      this.usersService.insertUser(newUser).subscribe(res => {
        this.toggleToast('.created');
      });
    });

  }

  toggleToast(selector: string) {
    $(selector).toggleClass('show');
    setTimeout(() => {
      $(selector).toggleClass('show');
      this.router.navigate(['/users']);
    }, 2500);
  }

}
