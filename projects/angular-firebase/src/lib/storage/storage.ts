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
        const prototype = Object.getPrototypeOf(this.zone.runOutsideAngular(() => this.firebaseService.app.storage()));
        Object.keys(prototype).forEach((key) => {
            prototype[key] = this.zone.runOutsideAngular(() => prototype[key]);
        });
        Object.setPrototypeOf(this, prototype);
        return this;
    }
}

export interface FirebaseStorage extends firebase.storage.Storage { };
