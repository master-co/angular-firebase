import { Pipe, PipeTransform } from '@angular/core';
import { FirestoreService } from './firestore.service';

import firebase from 'firebase/app';

@Pipe({
    name: 'firestoreDoc'
})
export class FirestoreDocPipe implements PipeTransform {

    constructor(
        private firestore: FirestoreService
    ) { }

    transform(docRef: string): firebase.firestore.DocumentReference<firebase.firestore.DocumentData> {
        if (!docRef) {
            return;
        }
        return this.firestore
            .doc(docRef);
    }

}
