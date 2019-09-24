import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../providers/firebase-auth.service'
import {FormUserComponent} from '../formUser/formUser.component'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = { login: '', password: '', button: () => {
      this.firebaseAuth.signUp(this.user.login, this.user.password)
    }}

  constructor(public firebaseAuth: FirebaseAuthService) {}

  ngOnInit() {
  }

}
