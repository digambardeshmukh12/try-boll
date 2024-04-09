import { Component } from '@angular/core';
import { MastersService } from './masters.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { User } from './user.model';
import { MatDialog } from '@angular/material/dialog';
import { GenerateOrderDialogComponent } from './generate-order-dialog/generate-order-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  users!: User[];

  constructor(private dataService: MastersService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.dataService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  loadOrders(): void {
    this.dataService.getAllOrders().subscribe(orders => {
      console.log(orders)
     });
  }

  deleteUser(userId: number): void {
    this.dataService.deleteUser(userId).subscribe(() => {
      this.loadUsers();
    });
  }

  openDialog(user?: User): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '400px',
      data: user || {}
    });

    dialogRef.afterClosed().subscribe((result: User) => {
      if (result) {
        if (result.id) {
          this.dataService.updateUser(result).subscribe(() => {
            this.loadUsers();
          });
        } else {
          this.dataService.addUser(result).subscribe(() => {
            this.loadUsers();
          });
        }
      }
    });
  }



  openorderDialog() {
    const dialogRef = this.dialog.open(GenerateOrderDialogComponent, {
      width: '400px',
      
    });


    dialogRef.afterClosed().subscribe((result: User) => {
      if (result) {
         
          this.dataService.AddOrder(result).subscribe(() => {
           });
        
      }
    });
    
    
  }


}
