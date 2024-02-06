import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environment/environment';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"pbcastlerea","appId":"1:936904557994:web:54686d74cf00de7c3cd7d3","storageBucket":"pbcastlerea.appspot.com","apiKey":environment.fb_apiKey,"authDomain":"pbcastlerea.firebaseapp.com","messagingSenderId":"936904557994"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
