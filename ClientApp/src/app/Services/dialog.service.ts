import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private _snackBar: MatSnackBar,
    public _dialog: MatDialog,
  ) { }

  public showSnackBar(message: string, action: string = ""): void {
    this._snackBar.open(message, action, { duration: 2000 });
  }


}
