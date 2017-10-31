import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentDetailsComponent} from '../student-details/student-details.component';
import {StudentEditComponent} from '../student-edit/student-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'list/', pathMatch: 'full'},
  {path: 'details/:index', component: StudentDetailsComponent},
  {path: 'edit/:index', component: StudentEditComponent},
  {path: 'list/', component: StudentDetailsComponent},
  {path: 'new', component: StudentEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
