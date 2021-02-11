import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersUrl: string;

  constructor(private http: HttpClient) { 
    this.usersUrl = 'http://localhost:8080/users';
  }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
  
  save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

}
