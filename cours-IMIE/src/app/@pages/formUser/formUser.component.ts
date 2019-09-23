import { Component, OnInit } from '@angular/core'
import { FirebaseAuthService } from '../../providers/firebase-auth.service'

@Component({
  selector: 'app-form-user',
  templateUrl: './formUser.component.html',
  styleUrls: ['./formUser.component.scss']
})
export class FormUserComponent implements OnInit {

  user = { login: '', password: ''}

  constructor(private firebaseAuth: FirebaseAuthService) {}

  submitForm() {
    this.firebaseAuth.signUp(this.user.login, this.user.password)
  }

  ngOnInit() {
  }

}
