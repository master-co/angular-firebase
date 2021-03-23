import { Pipe, PipeTransform } from '@angular/core';

import firebase from 'firebase/app';

@Pipe({
    name: 'firestoreWhere'
})
export class FirestoreWherePipe implements PipeTransform {

    constructor() { }

    transform(collectionRef, ...args: unknown[]): firebase.firestore.Query<firebase.firestore.DocumentData> {
        if (!collectionRef) {
            return;
        }
        if (args.length) {
            return collectionRef.where(...args);
        } else {
            return collectionRef
        }
    }

}
