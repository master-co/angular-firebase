import { Injectable, NgZone } from '@angular/core';
import { FirebaseService } from '../firebase.service';

import firebase from 'firebase/app';
import 'firebase/firestore';

@Injectable()
export class FirebaseFirestore {
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
        Object.setPrototypeOf(this, this.zone.runOutsideAngular(() => this.firebaseService.app.firestore()));
        return this;
    }
}

export interface FirebaseFirestore extends firebase.firestore.Firestore { };
