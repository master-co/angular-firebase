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
        Object.setPrototypeOf(this, this.zone.runOutsideAngular(() => this.firebaseService.app.performance()));
        return this;
    }
}

export interface FirebasePerformance extends firebase.performance.Performance { };
