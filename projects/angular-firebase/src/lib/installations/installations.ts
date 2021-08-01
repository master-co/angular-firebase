import { Injectable, NgZone } from '@angular/core';
import { FirebaseService } from '../firebase.service';

import firebase from 'firebase/app';
import 'firebase/installations';

@Injectable()
export class FirebaseInstallations {
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
        const target = this.zone.runOutsideAngular(() => this.firebaseService.app.installations());
        Object.setPrototypeOf(this, target);
        const prototype = Object.getPrototypeOf(target);
        Object.keys(prototype).forEach((key) => {
            this[key] = this.zone.runOutsideAngular(() => prototype[key]);
        });
        return this;
    }
}

export interface FirebaseInstallations extends firebase.installations.Installations { };
