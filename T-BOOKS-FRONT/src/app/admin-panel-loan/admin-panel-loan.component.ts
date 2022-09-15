import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ILoans } from '../models/iloans';
import { LoansService } from '../services/loans.service';


@Component({
  selector: 'app-admin-panel-loan',
  templateUrl: './admin-panel-loan.component.html',
  styleUrls: ['./admin-panel-loan.component.css']
})
export class AdminPanelLoanComponent implements OnInit {

  ELEMENT_DATA!: ILoans[];
  displayedColumns: string[] = ['start', 'finish', 'valuation','comment','action'];
  dataSource = new MatTableDataSource<ILoans>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private loanService: LoansService) { }

  ngOnInit(): void {
    this.getAllLoans();
  }

  getAllLoans(){
    let resp = this.loanService.returnAllLoans();
    resp.subscribe(report => this.dataSource.data = report as ILoans[]);
  }

}
