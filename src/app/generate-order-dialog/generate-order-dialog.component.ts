import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-generate-order-dialog',
  templateUrl: './generate-order-dialog.component.html',
  styleUrls: ['./generate-order-dialog.component.css']
})
export class GenerateOrderDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<GenerateOrderDialogComponent>,
   ) {}

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(orderData: any): void {
    // Handle submission logic here
    console.log(orderData);
    this.dialogRef.close(orderData);
  }

}
