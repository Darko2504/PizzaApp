import { MatSnackBarConfig } from '@angular/material/snack-bar';

export const apiUrl = `http://localhost:5082/api`;

//
export const snackBarConfig: MatSnackBarConfig = Object.freeze({
  verticalPosition: 'top', //allowed values top or bottom
  horizontalPosition: 'end',
  duration: 3000, // in miliseconds
});


