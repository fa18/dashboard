import { Component, OnInit } from '@angular/core'
import { FirebaseAuthService } from '../../providers/firebase-auth.service'


@Component({
  selector: 'app-register',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = { login: '', password: '', button: () => {
      this.firebaseAuth.signIn(this.user.login, this.user.password)
    }}

  constructor(public firebaseAuth: FirebaseAuthService) {}

  ngOnInit() {
  }

}
