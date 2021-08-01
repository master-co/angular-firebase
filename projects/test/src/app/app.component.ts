import { Component } from '@angular/core';
import { FirebaseFirestore } from 'projects/angular-firebase/src/public-api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'test';
    constructor(
        public firestore: FirebaseFirestore
    ) {
        console.log(this.firestore);
    }
}
