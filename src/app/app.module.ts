import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
// import { FlexLayoutModule } from '@angular/flex-layout';


// COMPONENTS
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './header/header.component';
import { HeaderComponentAlt } from './header-alt/header.component';
import { FooterComponent } from './footer/footer.component';
import { FooterComponentAlt } from './footer-alt/footer.component';
import { LoadScreenComponent } from './load-screen/load-screen.component';
import { MainScreenComponent } from './main-screen/main-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    HeaderComponent,
    HeaderComponentAlt,
    FooterComponent,
    FooterComponentAlt,
    LoadScreenComponent,
    MainScreenComponent
    ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
	  HttpClientModule,
	  StoreModule.forRoot({}, {}),
	  BrowserAnimationsModule,
    MaterialModule,
    // FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
