import {Component, Input, OnInit} from '@angular/core'
import { FirebaseAuthService } from '../../providers/firebase-auth.service'

@Component({
  selector: 'app-form-user',
  templateUrl: './formUser.component.html',
  styleUrls: ['./formUser.component.scss']
})
export class FormUserComponent implements OnInit {

  @Input() param: any;

  constructor(public firebaseAuth: FirebaseAuthService) {}

  // submitForm() {
  //   this.firebaseAuth.signUp(this.user.login, this.user.password)
  // }

  ngOnInit() {
  }

}
