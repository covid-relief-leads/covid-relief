import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

export interface DialogData {
  title: string;
}

@Component({
  selector: 'app-need-help',
  templateUrl: './need-help.component.html',
  styleUrls: ['./need-help.component.css']
})
export class NeedHelpComponent implements OnInit {

  title: string = "Details of Oxygen Leads.";
  // isClosed = true;

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
    const dialogRef = this.dialog.open(NeedHelpDialogComponent, {
      disableClose: true,
      width: '100%',
      height: '90%',
      data: {
        title: this.title,
      }
    });
    const sub = dialogRef.componentInstance.onGettingData.subscribe((data) => {
      if(data == 'success'){
        // this.isClosed = true;
        this._snackBar.open("Here are all the oxygen leads!", "", {
          duration: 2000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
      }
      else{
        // this.isClosed = true;
        this._snackBar.open("Something went wrong. Please try again!", "", {
          duration: 2000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      if(!result){
        // this.isClosed = false;
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
  selector: 'app-need-help-dialog',
  templateUrl: './need-help-dialog.component.html',
  styleUrls: ['./need-help-dialog.component.css']
})
export class NeedHelpDialogComponent {

  onGettingData = new EventEmitter();

  displayedColumns: string[] = ['name', 'contact', 'contact_type', 'area', 'service_type', 'last_verified'];
  dataSource;

  constructor(
    public dialogRef: MatDialogRef<NeedHelpDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _snackBar: MatSnackBar,
    private http: HttpClient){
      const headers = { 'content-type': 'application/json', 'x-hasura-admin-secret': 'G1OPdTL2WotFtka1hEe19kOv7YoqOTiLZxWRFw6khH7bSY0v76g3WT4iRdK9AgPX'};
      const body=JSON.stringify({ query: `
        query{
          oxygen_leads{
            name,
            number,
            contact_type,
            area,
            service_type,
            last_verified
          }
        }` 
      });
      this.http.post('https://covid-relief.hasura.app/v1/graphql', body, {'headers':headers}).
      subscribe(data => {
        console.log(data);
        if(data['data']){
          this.onGettingData.emit("success");
          this.dataSource = data['data']['oxygen_leads'];

        }
        else{
          this.onGettingData.emit("error");
        }
      },
      error => {
        console.log(error);
        this.onGettingData.emit("error");
      });
      console.log(this.dataSource);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
