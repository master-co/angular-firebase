import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';

import firebase from 'firebase/app';
import 'firebase/remote-config';

@Injectable()
export class FirebaseRemoteConfig {
    constructor(
        private firebaseService: FirebaseService
    ) {
        if (firebaseService.app) {
            this.init();
        }

        firebaseService.appInitialized
            .subscribe(() => this.init());
    }

    init() {
        Object.setPrototypeOf(this, this.firebaseService.app.remoteConfig());
        return this;
    }
}

export interface FirebaseRemoteConfig extends firebase.remoteConfig.RemoteConfig { };