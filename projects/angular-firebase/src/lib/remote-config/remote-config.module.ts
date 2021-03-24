import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoteConfigService } from './remote-config.service';
import { FirebaseModule } from '../firebase.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FirebaseModule
    ]
})
export class RemoteConfigModule {
    static init() {
        return {
            ngModule: FirebaseModule,
            providers: [
                RemoteConfigService
            ]
        };
    }
}
