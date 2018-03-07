import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass'],
    animations: [moveIn()],
    host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {
    error: any;
    constructor(
        public afAuth: AngularFireAuth,
        private router: Router) {

        this.afAuth.authState.subscribe(auth => {
            if (auth) {
                this.router.navigateByUrl('/members');
            }
        });
    }

    loginFb() {
        const provider = new firebase.auth.FacebookAuthProvider();
        this.afAuth.auth.signInWithPopup(provider)
            .then(
            () => {
                this.router.navigate(['/members']);
            }).catch(
            (err) => {
                this.error = err;
            });
    }

    loginGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        this.afAuth.auth.signInWithPopup(provider)
        .then(() => {
                this.router.navigate(['/members']);
        }
        ).catch((err) => {
            this.error = err;
        });
    }

    ngOnInit() {
    }
}
