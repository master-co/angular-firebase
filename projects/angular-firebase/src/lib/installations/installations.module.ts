import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseInstallations } from './installations';
import { FirebaseModule } from '../firebase.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FirebaseModule
    ]
})
export class FirebaseInstallationsModule {
    static init() {
        return {
            ngModule: FirebaseInstallationsModule,
            providers: [
                FirebaseInstallations
            ]
        };
    }
}
