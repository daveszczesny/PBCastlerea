import { Injectable, Optional } from '@angular/core';
import {
  DocumentSnapshot,
  Firestore,
  collection,
  doc,
  getDoc,
  getDocs,
} from '@angular/fire/firestore';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor(private firestore: Firestore, private storage: Storage) {}

  /* Function to retrieve data from firestore */
  getData(): Observable<ServiceItem[]> {
    const collectionRef = collection(this.firestore, 'services');

    return new Observable<any[]>((observer) => {
      getDocs(collectionRef)
        .then((querySnapshot) => {
          const data: Partial<ServiceItem>[] = querySnapshot.docs.map(
            (doc) => ({
              id: doc.id,
              url: doc.data()['url'],
              description: doc.data()['description'],
            })
          );

          data.forEach(async (item) => {
            if (item.url) {
              item.bucketUrl = await this.getBucketImage(item.url);
            }
          });
          observer.next(data);
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  getBucketImage(image: string): Promise<string> {
    if (!image) {
      return Promise.reject('Image not found!');
    }

    const imageRef = ref(this.storage, 'services/' + image + '.jpg');
    return getDownloadURL(imageRef);
  }

  getService(serviceId: string): Observable<any> {
    const docRef = doc(this.firestore, 'services', serviceId);

    return new Observable<any>((observer) => {
      getDoc(docRef)
        .then((docSnapshot: DocumentSnapshot<any>) => {
          if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            observer.next(data);
          } else {
            observer.next(null);
          }
        })
        .catch((error) => {
          observer.error(error); // Emit error if any
        });
    });
  }
}

export interface ServiceItem {
  id: string;
  description: string;
  url: string;
  bucketUrl: string;
}

export interface ServiceObject {
  description: string;
  url: string;
}
