import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ToasterComponent } from './components/toaster/toaster.component';
import { ToastComponent } from './components/toast/toast.component';

const routes: Routes = [
  { path: '', component: HomepageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ToastComponent,
    ToasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
