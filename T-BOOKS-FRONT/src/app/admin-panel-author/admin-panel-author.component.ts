import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { Author } from '../models/author.model';
import { IAuthors } from '../models/iauthors';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'app-admin-panel-author',
  templateUrl: './admin-panel-author.component.html',
  styleUrls: ['./admin-panel-author.component.css']
})
export class AdminPanelAuthorComponent implements OnInit {

  author: Author = {
    nameSurname: ''
  };

  ELEMENT_DATA!: IAuthors[];
  displayedColumns: string[] = ['nameSurname','action'];
  dataSource = new MatTableDataSource<IAuthors>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private authorService: AuthorsService, private router: Router) { }

  ngOnInit(): void {
    this.getAllAuthors();
  }

  getAllAuthors(){
    let resp = this.authorService.returnAllAuthors();
    resp.subscribe(report => this.dataSource.data = report as IAuthors[]);
  }

  deleteAuthor(){
    this.authorService.delete(this.author.id)
    .subscribe(
      response => {
        this.router.navigate(['/AdminPanelAuthor']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
