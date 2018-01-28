import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {UserLogin} from './login.model';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
  username : string;
  password : string;
  user : UserLogin = new UserLogin();
  invalid = false;
  constructor(private auth: AuthService){}

  ngOnInit(): void {
    const sampleUser: any = {
      login: 'michael@gmail.com' as string,
      password: '10' as string
    };

    this.auth.login(sampleUser).then((user) => {
      console.log(user.json());
    })
      .catch((err) => {
        console.log(err);
      });

    // this.auth.register(sampleUser)
    //   .then((user) => {
    //     console.log(user.json());
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    localStorage.setItem('adminUserName', 'admin');
    localStorage.setItem('adminPassword', 'admin');
    localStorage.setItem('compAdminUserName', 'comAdmin');
    localStorage.setItem('compAdminPassword', 'comAdmin');
    console.log('stored');
  }

    loginCheck(){
      this.username = localStorage.getItem('adminUserName');
      this.password = localStorage.getItem('adminPassword');

      if(this.username === this.user.username && this.password === this.user.password){
        window.location.href = 'http://localhost:4200/admin/companies';
        return;
      }

      this.username = localStorage.getItem('compAdminUserName');
      this.password = localStorage.getItem('compAdminPassword');

      if(this.username === this.user.username && this.password === this.user.password){
        window.location.href = 'http://localhost:4200/com-admin/airplane-list';
        return;
      }

      this.invalid = true;
    }



}
