import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';

import firebase from 'firebase/app';
import 'firebase/analytics';

@Injectable()
export class AnalyticsService {
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
        Object.setPrototypeOf(this, this.firebaseService.app.analytics());
        return this;
    }
}

export interface AnalyticsService extends firebase.analytics.Analytics { };
