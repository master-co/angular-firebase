import { Injectable, NgZone } from '@angular/core';
import { FirebaseService } from '../firebase.service';

import firebase from 'firebase/app';
import 'firebase/performance';

@Injectable()
export class FirebasePerformance {
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
        const target = this.zone.runOutsideAngular(() => this.firebaseService.app.performance());
        Object.setPrototypeOf(this, target);
        const prototype = Object.getPrototypeOf(target);
        Object.keys(prototype).forEach((key) => {
            this[key] = this.zone.run(() => prototype[key]);
        });
        return this;
    }
}

export interface FirebasePerformance extends firebase.performance.Performance { };
