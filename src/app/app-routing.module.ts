import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataFromApiComponent } from './data-from-api/data-from-api.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResultComponent } from './result/result.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch: 'full' },
  {path: "home", component: HomeComponent},
  {path: "students", component: StudentComponent},
  {path: "liveapi", component: DataFromApiComponent},
  {path: "student-detail", component: StudentDetailComponent},
  // {path: "student-detail/:id", component: StudentDetailComponent},
  {path: "results", component: ResultComponent},
  {path: "**", component: PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
