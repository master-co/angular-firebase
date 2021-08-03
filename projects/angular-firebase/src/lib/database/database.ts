import { Inject, Injectable, InjectionToken, NgZone } from '@angular/core';
import { FirebaseService } from '../firebase.service';

import firebase from 'firebase/app';
import 'firebase/database';

@Injectable()
export class FirebaseDatabase {
    constructor(
        private firebaseService: FirebaseService,
        @Inject(FIREBASE_DATABASE_OPTIONS) public options: FirebaseDatabaseOptions,
        private zone: NgZone
    ) {
        if (firebaseService.app) {
            this.init(options);
        }

        firebaseService.appInitialized
            .subscribe(() => this.init(options));
    }

    init(options: FirebaseDatabaseOptions) {
        const target = this.zone.runOutsideAngular(() => this.firebaseService.app.database(options?.url));
        Object.setPrototypeOf(this, target);
        return this;
    }
}

export interface FirebaseDatabase extends firebase.database.Database { };

export const FIREBASE_DATABASE_OPTIONS = new InjectionToken<FirebaseDatabaseOptions>('FirebaseDatabaseOptions');

export interface FirebaseDatabaseOptions {
    url?: string
}