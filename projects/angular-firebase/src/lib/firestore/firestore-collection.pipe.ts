import { Pipe, PipeTransform } from '@angular/core';
import { FirestoreService } from './firestore.service';

import firebase from 'firebase/app';

@Pipe({
    name: 'firestoreCollection'
})
export class FirestoreCollectionPipe implements PipeTransform {

    constructor(
        private firestore: FirestoreService
    ) { }

    transform(collectionName: string): firebase.firestore.CollectionReference<firebase.firestore.DocumentData> {
        if (!collectionName) {
            return;
        }
        return this.firestore
            .collection(collectionName);
    }

}
