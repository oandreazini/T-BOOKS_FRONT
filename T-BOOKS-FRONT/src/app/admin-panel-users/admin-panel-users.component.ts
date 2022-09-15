import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { IUsers } from '../models/iusers';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-admin-panel-users',
  templateUrl: './admin-panel-users.component.html',
  styleUrls: ['./admin-panel-users.component.css']
})
export class AdminPanelUsersComponent implements OnInit {

  ELEMENT_DATA!: IUsers[];
  displayedColumns: string[] = ['name', 'username', 'email','phone','city','action'];
  dataSource = new MatTableDataSource<IUsers>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    let resp = this.usersService.returnAllUsers();
    resp.subscribe(report => this.dataSource.data = report as IUsers[]);
  }

}
