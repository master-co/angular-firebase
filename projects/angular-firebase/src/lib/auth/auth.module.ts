import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { FirebaseModule } from '../firebase.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FirebaseModule
    ]
})
export class AuthModule {
    static init() {
        return {
            ngModule: FirebaseModule,
            providers: [
                AuthService
            ]
        };
    }
}
