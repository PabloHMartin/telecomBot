import { Invoice } from './../../../../../../models/invoice.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-info',
  templateUrl: './invoice-info.component.html',
  styleUrls: ['./invoice-info.component.scss']
})
export class InvoiceInfoComponent implements OnInit {

  @Input() invoice: Invoice;

  constructor() { }

  ngOnInit(): void {
  }

}
