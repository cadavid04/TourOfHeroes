import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import {MatButtonModule,
MatCheckboxModule,
MatIconModule,
MatButtonToggleModule,
MatDatepickerModule,
MatBadgeModule,
MatFormFieldModule,
MatSelectModule,
MatSlideToggleModule,
MatSidenavModule,
MatExpansionModule,
MatTableModule
} from '@angular/material';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatIconModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatExpansionModule,
    MatTableModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
   
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    AngularMaterialComponent
  ],
  bootstrap: [ AppComponent ]
  
})
export class AppModule { }

