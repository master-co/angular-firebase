import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseFunctionsOptions, FIREBASE_FUNCTIONS_OPTIONS, FirebaseFunctions } from './functions';
import { FirebaseModule } from '../firebase.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FirebaseModule
    ]
})
export class FirebaseFunctionsModule {
    static init(options?: FirebaseFunctionsOptions) {
        return {
            ngModule: FirebaseFunctionsModule,
            providers: [
                { provide: FIREBASE_FUNCTIONS_OPTIONS, useValue: options },
                FirebaseFunctions
            ]
        };
    }
}
