import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getAllUsers() {
    return new Promise((resolve, reject) => {
      this.http.get('/api/users')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err); 
        });
    });
  }

  showUser(id) {
    return new Promise((resolve, reject) => {
        this.http.get('/api/user/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  saveUser(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/api/user', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  updateUser(id, data) {
    return new Promise((resolve, reject) => {
        this.http.put('/api/user/'+id, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  deleteUser(id) {
    return new Promise((resolve, reject) => {
        this.http.delete('/api/userdelete/'+id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            console.log(err);
            //reject(err);
          });
    });
  }
}