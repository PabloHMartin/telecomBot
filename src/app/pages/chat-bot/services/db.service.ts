import { Incidencia } from './../../../models/incidencia.model';
import { Invoice } from './../../../models/invoice.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private invoicesSubject$: BehaviorSubject<Invoice[]> = new BehaviorSubject<Invoice[]>([]);
  invoices$ = this.invoicesSubject$.asObservable();
  private incidenciassSubject$: BehaviorSubject<Incidencia[]> = new BehaviorSubject<Incidencia[]>([]);
  incidencias$ = this.incidenciassSubject$.asObservable();


  constructor(private db: AngularFirestore) {
   }

  getAllInvoices(): void{
    this.db.collection<Invoice>('facturas').valueChanges().subscribe( invoice => {
      this.invoicesSubject$.next(invoice);
    });
  }

  getAllIncidencias(): void {
    this.db.collection<Incidencia>('incidencias').valueChanges().subscribe( incidencia => {
      this.incidenciassSubject$.next(incidencia);
    })
  }


}
