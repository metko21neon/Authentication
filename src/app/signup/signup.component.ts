import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import {User} from '../user.model';

import { moveIn, fallIn } from '../router.animations';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.sass'],
    animations: [moveIn(), fallIn()],
    host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {
    user: User = new User;
    state = '';
    error: any;
    constructor(
        public afAuth: AngularFireAuth,
        private router: Router) {}

    onSubmit(formData) {
        if (formData.valid) {
            console.log(formData.value);
            this.afAuth.auth.createUserWithEmailAndPassword( formData.value.email, formData.value.password )
            .then(
                (success) => {
                    console.log(success);
                    this.router.navigate(['/login']);
                }).catch(
                (err) => {
                    console.log(err);
                    this.error = err;
                });
        }
    }

    ngOnInit() {
    }

}
