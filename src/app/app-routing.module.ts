import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MainContentComponent } from './components/main-content/main-content.component';
import { WantToHelpComponent } from './components/want-to-help/want-to-help.component';
import { NeedHelpComponent } from './components/need-help/need-help.component';

const routes: Routes = [
    {path: '', component: MainContentComponent},
    {path: 'want-to-help' , component: WantToHelpComponent},
    {path: 'need-help', component: NeedHelpComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    RouterModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule
  ]
})

export class AppRoutingModule { }