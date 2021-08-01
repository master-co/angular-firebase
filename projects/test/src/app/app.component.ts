import { Component } from '@angular/core';
import { FirebaseFirestore, FirebaseStorage } from 'projects/angular-firebase/src/public-api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'test';
    constructor(
        public firestore: FirebaseFirestore,
        public storage: FirebaseStorage
    ) {
        this.storage
        .ref('food.jpg')
        .getDownloadURL()
        .then((url) => {
            console.log(url);
        })
    }
}
