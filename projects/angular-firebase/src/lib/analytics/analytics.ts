import { Injectable, NgZone } from '@angular/core';
import { FirebaseService } from '../firebase.service';

import firebase from 'firebase/app';
import 'firebase/analytics';

@Injectable()
export class FirebaseAnalytics {
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
        const target = this.zone.runOutsideAngular(() => this.firebaseService.app.analytics());
        Object.setPrototypeOf(this, target);
        return this;
    }
}

export interface FirebaseAnalytics extends firebase.analytics.Analytics { };
