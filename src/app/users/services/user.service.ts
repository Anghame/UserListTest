import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';
  private users: any[] = [];
  private usersSubject = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.http.get<any[]>(this.apiUrl + '/users').subscribe(apiUsers => {
      this.users = apiUsers;
      this.usersSubject.next(this.users);
    });
  }

  getUsers(): Observable<any[]> {
    return this.usersSubject.asObservable();
  }

  addUser(user: any): void {
    user.id = this.generateId();
    this.users.push(user);
    this.usersSubject.next(this.users);

    // return this.http.post<any>(this.apiUrl + '/users', user);
  }

  private generateId(): number {
    return this.users.length ? Math.max(...this.users.map(u => u.id || 0)) + 1 : 1;
  }
}
