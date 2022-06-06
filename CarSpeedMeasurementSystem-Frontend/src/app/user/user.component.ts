import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/User';
import { UsersService } from '../users.service';
declare var $: any;

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

  updateUser() {
    this.user!.fullName = this.fullName.value;
    this.user!.email = this.email.value;
    this.usersService.updateUser(this.user).subscribe(res => {
      this.getUser(this.user?.adminId);
      this.toggleToast();
    });
  }

  toggleToast() {
    $('.toast').toggleClass('show');
    setTimeout(() => {
      $('.toast').toggleClass('show');
    }, 2500);
  }

}
