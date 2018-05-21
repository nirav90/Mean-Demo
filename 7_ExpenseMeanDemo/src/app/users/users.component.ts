import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
     this.userService.getAllUsers().then((res) => {
      this.users = res;
      console.log(this.users);
    }, (err) => {
      console.log(err);
    });
  }

  deleteUser(id) {
    this.userService.deleteUser(id).then((result) => {
      this.router.navigate(['/users']);
    }, (err) => {
      //console.log(err);
    });
  }  


}
