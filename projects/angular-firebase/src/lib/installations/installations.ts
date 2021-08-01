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
        Object.setPrototypeOf(this, this.zone.runOutsideAngular(() => this.firebaseService.app.installations()));
        return this;
    }
}

export interface FirebaseInstallations extends firebase.installations.Installations { };
