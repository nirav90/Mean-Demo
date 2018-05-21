import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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
