import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseFunctionsOptions, FIREBASE_FUNCTIONS_OPTIONS, FunctionsService } from './functions.service';
import { FirebaseModule } from '../firebase.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FirebaseModule
    ]
})
export class FunctionsModule {
    static init(options?: FirebaseFunctionsOptions) {
        return {
            ngModule: FirebaseModule,
            providers: [
                { provide: FIREBASE_FUNCTIONS_OPTIONS, useValue: options },
                FunctionsService
            ]
        };
    }
}
