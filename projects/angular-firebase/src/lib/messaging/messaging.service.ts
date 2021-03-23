import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';

import firebase from 'firebase/app';
import 'firebase/messaging';

@Injectable()
export class MessagingService {
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
        Object.setPrototypeOf(this, this.firebaseService.app.messaging());
        return this;
    }
}

export interface MessagingService extends firebase.messaging.Messaging { };