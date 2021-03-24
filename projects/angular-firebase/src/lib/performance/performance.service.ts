import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';

import firebase from 'firebase/app';
import 'firebase/performance';

@Injectable()
export class PerformanceService {
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
        Object.setPrototypeOf(this, this.firebaseService.app.performance());
        return this;
    }
}

export interface PerformanceService extends firebase.performance.Performance { };
