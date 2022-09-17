import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../models/author.model';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'app-mod-author',
  templateUrl: './mod-author.component.html',
  styleUrls: ['./mod-author.component.css']
})
export class ModAuthorComponent implements OnInit {

  author: Author = {
    nameSurname: ''
  };
  message = '';

  constructor(private activeRoute: ActivatedRoute, private authorService: AuthorsService, private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getAuthor(this.activeRoute.snapshot.paramMap.get("id"));
  }

  getAuthor(id: any): void {
    this.authorService.getById(id)
    .subscribe(
      data => {
        this.author = data;
        console.log("data: " + data);
      },
      error => {
        console.log("error" + error);
      }
    );
  }

  updateAuthor():void {
    this.message = '';

    this.authorService.update(this.author.id, this.author)
    .subscribe(
      response => {
        console.log("respuesta:" + response);
        this.message = response.message ? response.message : "The status was updated successfully";
      },
      error => {
        console.log("error:" + error);
      }
    );
  }

}
