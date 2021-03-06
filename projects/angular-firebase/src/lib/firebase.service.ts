import { Inject, Injectable, InjectionToken, NgZone } from '@angular/core';

import firebase from 'firebase/app';
import { Subject } from 'rxjs';

@Injectable()
export class FirebaseService {

    app: firebase.app.App;
    appInitialized = new Subject();

    constructor(
        @Inject(FIREBASE_OPTIONS) public options: FirebaseOptions,
        private zone: NgZone
    ) {
        if (options) {
            this.init(options);
        }
    }

    init(options: FirebaseOptions) {
        const existingApp =
            firebase.apps.find(app => app &&
                options.name
                ? app.name === options.name
                : app.name === '[DEFAULT]'
            );
        this.app = existingApp || this.zone.runOutsideAngular(() => firebase.initializeApp(options.config, options.name));
        this.appInitialized.next(this.app);
        return this.app;
    }
}

export const FIREBASE_OPTIONS = new InjectionToken<FirebaseOptions>('FirebaseOptions');

export interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId?: string;
}

export interface FirebaseOptions {
    config: FirebaseConfig;
    name?: string;
}