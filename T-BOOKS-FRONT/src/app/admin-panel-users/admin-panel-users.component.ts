import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-admin-panel-users',
  templateUrl: './admin-panel-users.component.html',
  styleUrls: ['./admin-panel-users.component.css']
})
export class AdminPanelUsersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'synopsis','isbn', 'comment','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  synopsis: number;
  isbn: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', synopsis: 1.0079, isbn: 'H'},
  {position: 2, name: 'Helium', synopsis: 4.0026, isbn: 'He'},
  {position: 3, name: 'Lithium', synopsis: 6.941, isbn: 'Li'},
  {position: 4, name: 'Beryllium', synopsis: 9.0122, isbn: 'Be'},
  {position: 5, name: 'Boron', synopsis: 10.811, isbn: 'B'},
  {position: 6, name: 'Carbon', synopsis: 12.0107, isbn: 'C'},
  {position: 7, name: 'Nitrogen', synopsis: 14.0067, isbn: 'N'},
  {position: 8, name: 'Oxygen', synopsis: 15.9994, isbn: 'O'},
  {position: 9, name: 'Fluorine', synopsis: 18.9984, isbn: 'F'},
  {position: 10, name: 'Neon', synopsis: 20.1797, isbn: 'Ne'},
  {position: 11, name: 'Sodium', synopsis: 22.9897, isbn: 'Na'},
  {position: 12, name: 'Magnesium', synopsis: 24.305, isbn: 'Mg'},
  {position: 13, name: 'Aluminum', synopsis: 26.9815, isbn: 'Al'},
  {position: 14, name: 'Silicon', synopsis: 28.0855, isbn: 'Si'},
  {position: 15, name: 'Phosphorus', synopsis: 30.9738, isbn: 'P'},
  {position: 16, name: 'Sulfur', synopsis: 32.065, isbn: 'S'},
  {position: 17, name: 'Chlorine', synopsis: 35.453, isbn: 'Cl'},
  {position: 18, name: 'Argon', synopsis: 39.948, isbn: 'Ar'},
  {position: 19, name: 'Potassium', synopsis: 39.0983, isbn: 'K'},
  {position: 20, name: 'Calcium', synopsis: 40.078, isbn: 'Ca'},
];
