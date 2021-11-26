import { User } from './user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  baseUrl = "http://localhost:5000/api/users";

  userSaved: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    code: 0
  }

  constructor(private http: HttpClient) {
  }

  create(user: User): Observable<User> {
    this.userSaved = user;
    return this.http.post<User>(this.baseUrl, user);
  }

}
