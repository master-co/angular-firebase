import { Injectable, NgZone } from '@angular/core';
import { FirebaseService } from '../firebase.service';

import firebase from 'firebase/app';
import 'firebase/messaging';

@Injectable()
export class FirebaseMessaging {
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
        const target = this.zone.runOutsideAngular(() => this.firebaseService.app.messaging());
        Object.setPrototypeOf(this, target);
        return this;
    }
}

export interface FirebaseMessaging extends firebase.messaging.Messaging { };
