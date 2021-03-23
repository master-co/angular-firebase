import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseOptions, FirebaseService, FIREBASE_OPTIONS } from './firebase.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    exports: []
})
export class FirebaseModule {
    static init(options?: FirebaseOptions) {
        return {
            ngModule: FirebaseModule,
            providers: [
                { provide: FIREBASE_OPTIONS, useValue: options },
                FirebaseService
            ]
        };
    }
}
