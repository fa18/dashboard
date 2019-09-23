import { Component, OnInit } from '@angular/core'
import { FirebaseAuthService } from '../../providers/firebase-auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = { login: '', password: ''}

  constructor(private firebaseAuth: FirebaseAuthService) {}

  submitForm() {
    this.firebaseAuth.signUp(this.user.login, this.user.password)
  }

  ngOnInit() {
  }

}
