import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDpsComponent } from './pages/list-dps/list-dps.component';
import { AjoutDpsComponent } from './pages/ajout-dps/ajout-dps.component';
import { ListExpertiseComponent } from './pages/list-expertise/list-expertise.component';
import { AjoutExpertiseComponent } from './pages/ajout-expertise/ajout-expertise.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UsersComponent } from './pages/users/users.component';
import { AuthComponent } from './pages/auth/auth.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListDpsComponent,
    AjoutDpsComponent,
    ListExpertiseComponent,
    AjoutExpertiseComponent,
    ProfileComponent,
    UsersComponent,
    AuthComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
