import { Injectable, NgZone } from '@angular/core';
import { FirebaseService } from '../firebase.service';

import firebase from 'firebase/app';
import 'firebase/storage';

@Injectable()
export class FirebaseStorage {
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
        Object.setPrototypeOf(this, this.zone.runOutsideAngular(() => this.firebaseService.app.storage()));
        return this;
    }
}

export interface FirebaseStorage extends firebase.storage.Storage { };
