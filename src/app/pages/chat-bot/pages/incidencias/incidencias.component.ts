import { DbService } from './../../services/db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.scss']
})
export class IncidenciasComponent implements OnInit {

  constructor(public db: DbService) { }

  ngOnInit(): void {
    this.db.getAllIncidencias();
  }

}
