import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users?: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  deleteUser(adminId?: number): void {
    this.usersService.deleteUserById(adminId).subscribe(res => {
      this.getUsers();
    });
  }

  getUsers(): void {
    this.usersService.getAllUsers().subscribe(res => {
      this.users = res;
    });
  }

}
