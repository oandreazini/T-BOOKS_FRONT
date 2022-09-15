import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IEditorials } from '../models/ieditorials';
import { EditorialsService } from '../services/editorials.service';

@Component({
  selector: 'app-admin-panel-editorial',
  templateUrl: './admin-panel-editorial.component.html',
  styleUrls: ['./admin-panel-editorial.component.css'],
})
export class AdminPanelEditorialComponent implements OnInit {
  ELEMENT_DATA!: IEditorials[];
  displayedColumns: string[] = ['name', 'action'];
  dataSource = new MatTableDataSource<IEditorials>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private editorialService: EditorialsService) {}

  ngOnInit(): void {
    this.getAllEditorials();
  }

  getAllEditorials() {
    let resp = this.editorialService.returnAllEditorials();
    resp.subscribe(report => this.dataSource.data = report as IEditorials[]);
  }
}
