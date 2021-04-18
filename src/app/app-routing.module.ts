import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataFromApiComponent } from './data-from-api/data-from-api.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResultComponent } from './result/result.component';
import { UserAuthGuard } from './shared/user-auth.guard';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentComponent } from './student/student.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch: 'full' },
  {path: "home", component: HomeComponent},
  {path: "students", component: StudentComponent, canActivate: [UserAuthGuard]},
  {path: "liveapi", component: DataFromApiComponent},
  {path: "student-detail", component: StudentDetailComponent},
  // {path: "student-detail/:id", component: StudentDetailComponent},
  {path: "results", component: ResultComponent},
  {path: "login", component: UserLoginComponent},
  {path: "signup", component: UserRegisterComponent},
  {path: "**", component: PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
