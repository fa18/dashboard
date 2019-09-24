import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { Observable } from 'rxjs'
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(private authFire: AngularFireAuth) { }

  /**
   * Register with firebase
   * @param email: String
   * @param password: String
   */
  signUp(email: string, password: string){
    this.authFire.auth.createUserWithEmailAndPassword(email, password)
    .then(response => {
      alert("Inscription réussie")
    })
    .catch(error => {
      alert(error)
    })
  }

  /**
   * Login with email and password
   * @param email: String
   * @param password: String
   */
  signIn(email: string, password: string){
    this.authFire.auth.signInWithEmailAndPassword(email, password)
      .then(response => {
        alert("Connexion réussie")
      })
      .catch(error => {
        alert(error)
      })
  }

}
