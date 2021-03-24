import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirebaseAuthModule, FirebaseFirestoreModule, FirebaseFunctionsModule, FirebaseModule, FirebaseStorageModule } from 'projects/angular-firebase/src/public-api';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FirebaseModule.init({ config: environment.firebaseConfig }),
        FirebaseFirestoreModule.init(),
        FirebaseStorageModule.init(),
        FirebaseAuthModule.init(),
        FirebaseFunctionsModule.init({ region: 'asia-east2' })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
