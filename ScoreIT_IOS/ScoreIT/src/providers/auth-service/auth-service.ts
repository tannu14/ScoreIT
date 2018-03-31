import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

export class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

@Injectable()
export class AuthService {
  currentUser: User;
  data: any
  constructor(public http: HttpClient) {
  }

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        this.http.post('http://localhost:8000/scoreIT/api/login/',
        {
          email : credentials.email,
          password: credentials.password
        },
        {
          headers: { 'Content-Type': 'application/json' }
        }).subscribe(data => {
            console.log("Loggedin to true")
            //let username = data.Name
            //let email = data.Email
            //this.currentUser = new User(username, email);
            observer.next(true);
            observer.complete();
          },err=> {
          console.log('Message: ' + err.message);
          console.log('Status: ' + err.status);
          observer.next(false);
          observer.complete();

        });
      });
    }
  }

  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      this.http.post('http://localhost:8000/scoreIT/api/register_user/',
      {
        email : credentials.email,
        password: credentials.password,
        fname: credentials.fname,
        lname: credentials.lname
      },
      {
        headers: { 'Content-Type': 'application/json' }
      }).subscribe(data => {
          // alert(data)
        },err=> {
        console.log('Message: ' + err.message);
        console.log('Status: ' + err.status);
      });

      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
