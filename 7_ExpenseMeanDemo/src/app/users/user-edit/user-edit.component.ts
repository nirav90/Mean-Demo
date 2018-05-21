import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/users.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user = {};

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
  }

  getBook(id) {
    this.userService.showUser(id).then((res) => {
      this.user = res;
      console.log(this.user);
    }, (err) => {
      console.log(err);
    });
  }

  updateUser(id) {
    this.userService.updateUser(id, this.user).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/users']);
    }, (err) => {
      console.log(err);
    });
  }

  deleteUser(id) {
    this.userService.deleteUser(id).then((result) => {
      this.router.navigate(['/users']);
    }, (err) => {
      console.log(err);
    });
  }


}
