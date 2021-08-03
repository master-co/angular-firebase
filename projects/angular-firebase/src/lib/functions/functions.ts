import { Inject, Injectable, InjectionToken, NgZone } from '@angular/core';
import { FirebaseService } from '../firebase.service';

import firebase from 'firebase/app';
import 'firebase/functions';

@Injectable()
export class FirebaseFunctions {
    constructor(
        private firebaseService: FirebaseService,
        @Inject(FIREBASE_FUNCTIONS_OPTIONS) public options: FirebaseFunctionsOptions,
        private zone: NgZone
    ) {
        if (firebaseService.app) {
            this.init(options);
        }

        firebaseService.appInitialized
            .subscribe(() => this.init(options));
    }

    init(options: FirebaseFunctionsOptions) {
        const target = this.zone.runOutsideAngular(() => this.firebaseService.app.functions(options?.region));
        Object.setPrototypeOf(this, target);
        return this;
    }
}

export interface FirebaseFunctions extends firebase.functions.Functions { };

export const FIREBASE_FUNCTIONS_OPTIONS = new InjectionToken<FirebaseFunctionsOptions>('FirebaseFunctionsOptions');

export interface FirebaseFunctionsOptions {
    region?: string
}