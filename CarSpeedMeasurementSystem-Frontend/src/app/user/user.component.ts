import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user?: User;

  fullName = new FormControl('');
  email = new FormControl('');

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('admin_id'));
    this.getUser(id);
  }

  getUser(adminId?: number): void {
    this.usersService.getUsersById(adminId).subscribe(res => {
      this.user = res;
      this.fullName.setValue(this.user?.fullName);
      this.email.setValue(this.user?.email);
    });
  }

  updateUser(user?: User) {
    this.user!.fullName = this.fullName.value;
    this.user!.email = this.email.value;
    console.log(this.user);
    this.usersService.updateUser(user).subscribe(res => {
      this.getUser(user?.adminId);
      console.log(res);
      console.log(user?.adminId);
    });
  }

}
