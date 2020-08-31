import { Invoice } from './../../../../../../models/invoice.model';
import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements OnInit, OnChanges {

  @Input() invoices: Invoice[] = [];
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [

  ];
  public data: number[] = [];

  constructor() { }

  public barChartOptions: ChartOptions = {
    responsive: true,
  };


  ngOnChanges(): void {
    this.invoices.forEach( v => {
      this.barChartLabels.push(v.date);
      this.data.push(v.totalAmount);
    });



  }

  ngOnInit(): void {
    this.barChartData.push(  { data: this.data, backgroundColor: '#60c6fe', hoverBackgroundColor: '#68a2f8', label: 'Total' });
  }

}
