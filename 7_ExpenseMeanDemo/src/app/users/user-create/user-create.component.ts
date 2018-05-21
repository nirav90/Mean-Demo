import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  user = {};

  constructor(private userService : UserService , private router : Router) { }

  ngOnInit() {
  }

  saveUser() {
    this.userService.saveUser(this.user).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/users']);
    }, (err) => {
      console.log(err);
    });
  }
}
