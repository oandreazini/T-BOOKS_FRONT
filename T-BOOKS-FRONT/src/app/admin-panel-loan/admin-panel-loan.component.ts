import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { DialogLoansComponent } from '../dialog-loans/dialog-loans.component';
import { ILoans } from '../models/iloans';
import { LoansService } from '../services/loans.service';


@Component({
  selector: 'app-admin-panel-loan',
  templateUrl: './admin-panel-loan.component.html',
  styleUrls: ['./admin-panel-loan.component.css']
})
export class AdminPanelLoanComponent implements OnInit {

  ELEMENT_DATA!: ILoans[];
  displayedColumns: string[] = ['id', 'start', 'finish', 'valuation','comment','action'];
  dataSource = new MatTableDataSource<ILoans>(this.ELEMENT_DATA);
  id: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private loanService: LoansService, private router: Router, private toastService: HotToastService, public dialog: MatDialog) { }

openDialog(id: any){
  let dialogRef = this.dialog.open(DialogLoansComponent, {data: {idloan: id}});

  dialogRef.afterClosed().subscribe(result =>{
    this.id = result;
    this.deleteLoan();
  });
}

  ngOnInit(): void {
    this.getAllLoans();
  }

  getAllLoans(){
    let resp = this.loanService.returnAllLoans();
    resp.subscribe(report => this.dataSource.data = report as ILoans[]);
  }

  deleteLoan(){
    this.loanService.delete(this.id)
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
    this.toastService.show('Préstamo eliminado con éxito.', {
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
    window.location.assign('/adminPanelLoan');
  }

}
