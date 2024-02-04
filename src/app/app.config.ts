import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"pbcastlerea","appId":"1:936904557994:web:54686d74cf00de7c3cd7d3","storageBucket":"pbcastlerea.appspot.com","apiKey":"AIzaSyApQ5e5QvfxJP35SBzf_aro5xA_WiYWFUs","authDomain":"pbcastlerea.firebaseapp.com","messagingSenderId":"936904557994"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
