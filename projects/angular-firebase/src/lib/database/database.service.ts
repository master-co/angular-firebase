import { Inject, Injectable, InjectionToken } from '@angular/core';
import { FirebaseService } from '../firebase.service';

import firebase from 'firebase/app';
import 'firebase/database';

@Injectable()
export class DatabaseService {
    constructor(
        private firebaseService: FirebaseService,
        @Inject(FIREBASE_DATABASE_OPTIONS) public options: FirebaseDatabaseOptions
    ) {
        if (firebaseService.app) {
            this.init(options);
        }

        firebaseService.appInitialized
            .subscribe(() => this.init(options));
    }

    init(options: FirebaseDatabaseOptions) {
        Object.setPrototypeOf(this, this.firebaseService.app.database(options?.url));
        return this;
    }
}

export interface DatabaseService extends firebase.database.Database { };

export const FIREBASE_DATABASE_OPTIONS = new InjectionToken<FirebaseDatabaseOptions>('FirebaseDatabaseOptions');

export interface FirebaseDatabaseOptions {
    url?: string
}