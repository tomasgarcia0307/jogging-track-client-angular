import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';

/**
 * @title Snack-bar with a custom component
 */
@Component({
  selector: 'confirmModal',
  templateUrl: 'confirmModal.html',
})
export class ConfirmModalComponent {
  durationInSeconds = 5;

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}


@Component({
  selector: 'confirmModal',
  templateUrl: 'confirmModal.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}