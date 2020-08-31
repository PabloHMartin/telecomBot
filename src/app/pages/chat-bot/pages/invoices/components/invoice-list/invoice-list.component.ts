import { Invoice } from './../../../../../../models/invoice.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  @Input() invoices: Invoice[] = [];
  @Output() invoiceEvent = new EventEmitter<Invoice>();

  constructor() { }

  ngOnInit(): void {

  }

  invoiceDetails(invoice: Invoice): void{
    this.invoiceEvent.emit(invoice);
  }

}
