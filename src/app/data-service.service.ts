import { Injectable } from '@angular/core';
import { DocumentSnapshot, Firestore, collection, doc, getDoc, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private firestore: Firestore) { }


  /* Function to retrieve data from firestore */
  getData(): Observable<any[]> {
    const collectionRef = collection(this.firestore, 'services');

    return new Observable<any[]>(observer => {
      getDocs(collectionRef).then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        observer.next(data);
      }).catch(error => {
        observer.error(error);
      })
    })
  }
  

  getService(serviceId: string): Observable<any> {
    const docRef = doc(this.firestore, 'services', serviceId);

    return new Observable<any>(observer => {
      getDoc(docRef).then((docSnapshot: DocumentSnapshot<any>) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          observer.next(data);
        } else {
          observer.next(null);
        }
      }).catch(error => {
        observer.error(error); // Emit error if any
      });
    });
  }

}


export interface ServiceItem{
  id:string,
  description: string,
  url: string,
};

export interface ServiceObject {
  description: string,
  url: string,
}