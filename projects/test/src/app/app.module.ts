import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirebaseModule } from 'projects/angular-firebase/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FirebaseModule.init()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
