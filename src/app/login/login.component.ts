import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private auth: AuthService){}

  ngOnInit(): void {
    const sampleUser: any = {
      login: 'michael@gmail.com' as string,
      password: '10' as string
    };
    // this.auth.register(sampleUser)
    //   .then((user) => {
    //     console.log(user.json());
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    this.auth.login(sampleUser).then((user) => {
      console.log(user.json());
    })
      .catch((err) => {
        console.log(err);
      });
  }
}
