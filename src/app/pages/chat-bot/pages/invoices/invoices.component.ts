import { Invoice } from './../../../../models/invoice.model';
import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  invoiceDetails: Invoice;

  constructor(public db: DbService) { }


  ngOnInit(): void {
    this.db.getAllInvoices();
  }

  handleInvoiceEvent($event: Invoice): void{
    console.log($event);

    this.invoiceDetails = $event;
  }
}
