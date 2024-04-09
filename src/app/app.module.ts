import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog'; // Import MatDialogModule


 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
 

import { AppComponent } from './app.component';
 import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { MastersService } from './masters.service';
import { GenerateOrderDialogComponent } from './generate-order-dialog/generate-order-dialog.component';
 
@NgModule({
  declarations: [
    AppComponent,
     UserDialogComponent,
     GenerateOrderDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule // Add MatDialogModule to imports
  ],
  providers: [ MastersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
