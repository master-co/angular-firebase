import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseAuth } from './auth';
import { FirebaseModule } from '../firebase.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FirebaseModule
    ]
})
export class FirebaseAuthModule {
    static init() {
        return {
            ngModule: FirebaseAuthModule,
            providers: [
                FirebaseAuth
            ]
        };
    }
}
