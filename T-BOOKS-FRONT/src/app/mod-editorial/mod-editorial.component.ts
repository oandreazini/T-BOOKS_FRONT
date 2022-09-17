import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private editorialService: EditorialsService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.message = '';
    this.getEditorial(this.activateRoute.snapshot.paramMap.get("id"));
  }

  getEditorial(id: any): void {
    this.editorialService.returnEditorialById(id)
    .subscribe(
      data => {
        this.editorial = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
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
