import { Pipe, PipeTransform } from '@angular/core';

import firebase from 'firebase/app';

@Pipe({
    name: 'firestoreLimitToLast'
})
export class FirestoreLimitToLastPipe implements PipeTransform {

    constructor() { }

    transform(collectionRef, ...args: unknown[]): firebase.firestore.Query<firebase.firestore.DocumentData> {
        if (!collectionRef) {
            return;
        }
        if (args.length) {
            return collectionRef.limitToLast(...args);
        } else {
            return collectionRef
        }
    }

}
