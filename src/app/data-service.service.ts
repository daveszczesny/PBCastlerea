import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
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
  
}


export interface ServiceItem{
  id:string,
  description: string
};