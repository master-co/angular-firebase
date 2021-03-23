import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';

import firebase from 'firebase/app';
import 'firebase/firestore';

@Injectable()
export class FirestoreService {
    constructor(
        firebaseService: FirebaseService
    ) {
        const initialize = () => Object.setPrototypeOf(this, firebaseService.app.firestore());

        if (firebaseService.app) {
            initialize();
        }

        firebaseService.appInitialized
            .subscribe(() => {
                initialize();
                console.log('initialized')
            });
    }
}

export interface FirestoreService extends firebase.firestore.Firestore { };
