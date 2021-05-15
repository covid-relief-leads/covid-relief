import { Component, OnInit, Inject, EventEmitter, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

export interface DialogData {
  title: string;
}

@Component({
  selector: 'app-want-to-help',
  templateUrl: './want-to-help.component.html',
  styleUrls: ['./want-to-help.component.css']
})
export class WantToHelpComponent implements OnInit {

  title: string = "Enter the details for Oxygen Leads.";
  isClosed = true;

  plasma = {
    image: "assets/images/plasma.jpg",
    title: "PLASMA",
  }

  oxygen = {
    image: "assets/images/oxygen.jpg",
    title: "OXYGEN",
  }

  injections = {
    image: "assets/images/vaccine.jpg",
    title: "INJECTIONS",
  }

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(WantToHelpDialogComponent, {
      disableClose: true,
      data: {
        title: this.title,
      }
    });
    const sub = dialogRef.componentInstance.onGettingData.subscribe((data) => {
      if(data == 'success'){
        this.isClosed = true;
        this._snackBar.open("Thanks for saving a life!", "", {
          duration: 2000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
      }
      else{
        this.isClosed = true;
        this._snackBar.open("Something went wrong. Please try again!", "", {
          duration: 2000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      if(!result){
        this.isClosed = false;
      }
    });
  }

  plasmaClick(){
    this._snackBar.open("Plasma feature coming soon!", "", {
      duration: 2000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  }

  injectionsClick(){
    this._snackBar.open("Medicines and injections feature coming soon!", "", {
      duration: 2000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  }

}

@Component({
  selector: 'app-want-to-help-dialog',
  templateUrl: './want-to-help-dialog.component.html',
  styleUrls: ['./want-to-help-dialog.component.css']
})
export class WantToHelpDialogComponent {

  @Input() max;
  today = new Date();
  onGettingData = new EventEmitter();

  number = new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]);
  name = new FormControl('', [Validators.required]);
  contactType = new FormControl('', [Validators.required]);
  area = new FormControl('', [Validators.required]);
  serviceType = new FormControl('', [Validators.required]);
  lastVerified = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<WantToHelpDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _snackBar: MatSnackBar,
    private http: HttpClient,
    private datePipe : DatePipe){}

  onNoClick(): void {
    this.dialogRef.close();
  }

  getContactError() {
    if (this.number.hasError('required')) {
      return 'You must enter a value';
    }

    return this.number.hasError('pattern') ? 'Not a valid number (10 digits)' : '';
  }

  getNameError() {
    if(this.name.hasError('required')) {
      return 'You must enter a name';
    }
  }

  getContactTypeError() {
    if(this.contactType.hasError('required')) {
      return 'You must choose a contact type';
    }
  }

  getAreaError() {
    if(this.area.hasError('required')) {
      return 'You must enter a valid area';
    }
  }

  getServiceTypeError(){
    if(this.serviceType.hasError('required')) {
      return 'You must choose a service type';
    }
  }

  getLastVerifiedError(){
    if(this.lastVerified.hasError('required')) {
      return 'You must choose a date';
    }
  }

  submitForm() {
    if(
      this.name.status == 'INVALID' || 
      this.number.status == 'INVALID' ||
      this.contactType.status == 'INVALID' ||
      this.area.status == 'INVALID' ||
      this.serviceType.status == 'INVALID'
    ){
      this._snackBar.open("Please fill the entire form!", "", {
        duration: 2000,
        panelClass: ['mat-toolbar', 'mat-primary']
      });
    }
    else{
      this.onNoClick();
      const headers = { 'content-type': 'application/json', 'x-hasura-admin-secret': 'G1OPdTL2WotFtka1hEe19kOv7YoqOTiLZxWRFw6khH7bSY0v76g3WT4iRdK9AgPX'};
      const body=JSON.stringify({ query: `
        mutation {
          insert_oxygen_leads_one(object: {
            name: "${this.name.value}",
            number: "${this.number.value}",
            contact_type: "${this.contactType.value}",
            area: "${this.area.value}",
            service_type: "${this.serviceType.value}",
            last_verified: "${this.datePipe.transform(this.lastVerified.value, 'dd-MM-yyyy')}"
          }) {
            id
        }
      }` 
      });
      this.http.post('https://covid-relief.hasura.app/v1/graphql', body, {'headers':headers}).
      subscribe(data => {
        console.log(data);
        if(data['data']){
          this.onGettingData.emit("success");
        }
        else{
          this.onGettingData.emit("error");
        }
      },
      error => {
        console.log(error);
        this.onGettingData.emit("error");
      });
    }
  }

}
