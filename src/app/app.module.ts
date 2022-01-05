import {APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import UI from "@spreewunder/secuvid-sdk/dist";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export function initializeApplication(): () => Promise<void> {
  return async function initSecuvidUI() {
    await UI.define(
      UI.Video as any,
      UI.Card as any,
      UI.Button as any,
      UI.Badge as any
    );
    console.warn("elements initialized");
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: initializeApplication, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
