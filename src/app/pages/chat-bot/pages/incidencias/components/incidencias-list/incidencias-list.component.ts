import { Incidencia } from './../../../../../../models/incidencia.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incidencias-list',
  templateUrl: './incidencias-list.component.html',
  styleUrls: ['./incidencias-list.component.scss']
})
export class IncidenciasListComponent implements OnInit {
  @Input() incidencias: Incidencia[];

  constructor() { }

  ngOnInit(): void {
  }

}
