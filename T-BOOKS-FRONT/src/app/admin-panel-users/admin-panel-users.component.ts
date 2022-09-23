import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { IUsers } from '../models/iusers';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-admin-panel-users',
  templateUrl: './admin-panel-users.component.html',
  styleUrls: ['./admin-panel-users.component.css']
})
export class AdminPanelUsersComponent implements OnInit {

  ELEMENT_DATA!: IUsers[];
  displayedColumns: string[] = ['id', 'name', 'username', 'email','phone','city','action'];
  dataSource = new MatTableDataSource<IUsers>(this.ELEMENT_DATA);
  id: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private usersService: UsersService, private router: Router, private toastService: HotToastService,
    public dialog: MatDialog) { }

    openDialog(id: any){
      let dialogRef = this.dialog.open(DialogExampleComponent, {data: {iduser: id}});

      dialogRef.afterClosed().subscribe(result =>{
        this.id = result;
        this.deleteUser();
      });
    }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    let resp = this.usersService.returnAllUsers();
    resp.subscribe(report => this.dataSource.data = report as IUsers[]);
  }

  deleteUser(){
    this.usersService.delete(this.id)
    .subscribe(
      response =>{
        this.showToast();
        setTimeout(() => {
          this.reload();
        }, 1000);
      },
      error => {
        console.log(error);
      }
    );
  }

  showToast() {
    this.toastService.show('Usuario eliminado con éxito.', {
      position: 'top-right',
      duration: 5000,
      style: {
        border: '1px solid #badbcc',
        background: '#d1e7dd',
        padding: '16px',
        color: '#0f5132',
      },
    });
  }

  reload(): void {
    window.location.assign('/adminPanelUsers');
  }

}
