import { Inject, Injectable, InjectionToken } from '@angular/core';

import firebase from 'firebase/app';
import { Subject } from 'rxjs';

@Injectable()
export class FirebaseService {

    app: firebase.app.App;

    appInitialized = new Subject();

    constructor(
        @Inject(FIREBASE_OPTIONS) public options: FirebaseOptions
    ) {
        if (options) {
            this.initialize(options);
        }
    }

    initialize(options: FirebaseOptions) {
        const existingApp = firebase.apps.find(app => app && app.name === options.name);
        this.app = existingApp || firebase.initializeApp(options.config, options.name);
        // this.storage = this.app.storage();
        // this.functions = this.app.functions(options.region);
        // this.auth = this.app.auth();
        // this.analytics = this.app.analytics();
        // this.performance = this.app.performance();
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
    measurementId: string;
}

export interface FirebaseOptions {
    config: FirebaseConfig;
    name?: string;
}