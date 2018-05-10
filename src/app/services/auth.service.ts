import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public get userName(): string {
    return localStorage.getItem('email');
  }

  public setUser(email: string): void {
    localStorage.setItem('email', email);
  }

  public removeUser(): void {
    localStorage.removeItem('email');
  }

}
