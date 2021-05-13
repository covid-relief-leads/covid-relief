import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { WantToHelpComponent } from './components/want-to-help/want-to-help.component';

const routes: Routes = [
    {path: '', component: MainContentComponent},
    {path: 'want-to-help' , component: WantToHelpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }