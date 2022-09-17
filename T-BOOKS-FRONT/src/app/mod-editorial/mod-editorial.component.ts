import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editorial } from '../models/editorial.model';
import { EditorialsService } from '../services/editorials.service';

@Component({
  selector: 'app-mod-editorial',
  templateUrl: './mod-editorial.component.html',
  styleUrls: ['./mod-editorial.component.css']
})
export class ModEditorialComponent implements OnInit {

  editorial: Editorial = {
    name: ''
  };
  message = '';

  constructor(private editorialService: EditorialsService, private router: Router) { }

  ngOnInit(): void {
    this.message = '';
  }

  updateEditorial(): void{
    this.message = '';

    this.editorialService.update(this.editorial.id, this.editorial)
    .subscribe(
      response => {
        console.log(response);
        this.message = response.message ? response.message : "The status was updated successfully";
      },
      error => {
        console.log(error);
      }
    );
  }
}
