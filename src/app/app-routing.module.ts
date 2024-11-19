import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListDpsComponent } from './pages/list-dps/list-dps.component';
import { ListExpertiseComponent } from './pages/list-expertise/list-expertise.component';
import { AjoutDpsComponent } from './pages/ajout-dps/ajout-dps.component';
import { AjoutExpertiseComponent } from './pages/ajout-expertise/ajout-expertise.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UsersComponent } from './pages/users/users.component';
import { AuthComponent } from './pages/auth/auth.component';

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'list-dps', component: ListDpsComponent },
  { path: 'list-expertise', component: ListExpertiseComponent },
  { path: 'ajout-dps', component: AjoutDpsComponent },
  { path: 'ajout-expertise', component: AjoutExpertiseComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'users', component: UsersComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
