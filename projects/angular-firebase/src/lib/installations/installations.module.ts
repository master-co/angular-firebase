import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallationsService } from './installations.service';
import { FirebaseModule } from '../firebase.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FirebaseModule
    ]
})
export class InstallationsModule {
    static init() {
        return {
            ngModule: FirebaseModule,
            providers: [
                InstallationsService
            ]
        };
    }
}
