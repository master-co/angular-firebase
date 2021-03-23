import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseRemoteConfig } from './remote-config';
import { FirebaseModule } from '../firebase.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FirebaseModule
    ]
})
export class FirebaseRemoteConfigModule {
    static init() {
        return {
            ngModule: FirebaseRemoteConfigModule,
            providers: [
                FirebaseRemoteConfig
            ]
        };
    }
}
