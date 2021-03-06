import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService {

  private login: string;
  private token: string;
  private ROLE_ADMIN: boolean;
  private ROLE_USER: boolean;
  private ROLE_MANAGER: boolean;

  constructor() {
  }

  authorize(user, authorities) {
    localStorage.clear();
    this.login = user.username;
    this.token = user.password;
    localStorage.setItem('token', btoa(this.login + ':' + this.token));
    localStorage.setItem('roles', JSON.stringify(authorities));
  }

  getHeader() {
    return {
      'Accept': 'application/json',
      'Authorization': 'Basic ' + localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest'
    };
  }

  getHeaderPost() {
    return {
      'Accept': 'application/json',
      'Authorization': 'Basic ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    };
  }

  getHeaderUser() {
    return {
      'Accept': 'application/json',
      'Authorization': 'Basic ' + localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest'
    };
  }

  getAdminRole() {
    if (localStorage.getItem('roles').includes('ROLE_ADMIN')) {
      this.ROLE_ADMIN = true;
    }
    return this.ROLE_ADMIN;
  }

  getManagerRole() {
    if (localStorage.getItem('roles').includes('ROLE_MANAGER')) {
      this.ROLE_MANAGER = true;
    }
    return this.ROLE_MANAGER;
  }

  getUserRole() {
    if (localStorage.getItem('roles').includes('ROLE_USER')) {
      this.ROLE_USER = true;
    }
    return this.ROLE_USER;
  }

  logOut() {
    this.token = this.login = null;
    this.ROLE_USER = this.ROLE_MANAGER = this.ROLE_ADMIN = false;
    localStorage.clear();
  }
}

