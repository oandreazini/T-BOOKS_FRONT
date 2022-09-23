import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanActivate, Router } from '@angular/router';
import { DialogAlertComponent } from '../dialog-alert/dialog-alert.component';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService,
    public dialog: MatDialog
  ) {}

  canActivate(): boolean {
    if (!!this.tokenStorage.getRoles()) {
      return true;
    } else {
      this.openDialog();

      return false;
    }
  }

  openDialog(){
    let dialogRef = this.dialog.open(DialogAlertComponent);

    dialogRef.afterClosed().subscribe(result =>{
      this.router.navigate(['/login']);
    });
  }
}
