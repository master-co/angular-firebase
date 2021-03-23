import { Pipe, PipeTransform } from '@angular/core';

import firebase from 'firebase/app';

@Pipe({
    name: 'firestoreEndAt'
})
export class FirestoreEndAtPipe implements PipeTransform {

    constructor() { }

    transform(collectionRef, ...args: unknown[]): firebase.firestore.Query<firebase.firestore.DocumentData> {
        if (!collectionRef) {
            return;
        }
        if (args.length) {
            return collectionRef.endAt(...args);
        } else {
            return collectionRef
        }
    }

}
