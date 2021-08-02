import { Injectable, NgZone } from '@angular/core';
import { FirebaseService } from '../firebase.service';

import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable()
export class FirebaseAuth {
    constructor(
        private firebaseService: FirebaseService,
        private zone: NgZone
    ) {
        if (firebaseService.app) {
            this.init();
        }

        firebaseService.appInitialized
            .subscribe(() => this.init());
    }

    init() {
        const target = this.zone.runOutsideAngular(() => this.firebaseService.app.auth());
        const prototype = Object.getPrototypeOf(target);
        Object.keys(prototype).forEach((key) => {
            prototype[key] = this.zone.run(() => prototype[key]);
        });
        Object.setPrototypeOf(this, target);
        return this;
    }
}

export interface FirebaseAuth extends firebase.auth.Auth { };
