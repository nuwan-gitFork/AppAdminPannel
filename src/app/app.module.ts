import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FootComponent } from './shared/foot/foot.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TablesComponent } from './components/tables/tables.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NotfoundComponent,
    FootComponent,
    SidebarComponent,
    TablesComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    
    RouterModule.forRoot([

       { path:'', 
         component:HomeComponent
       },
    //   { path:'', 
    //   component:SidebarComponent
    // },
      { path:'home', 
         component:HomeComponent
       },
      { path:'about', 
        component:AboutComponent
      },
      { path:'contact', 
        component:ContactComponent
      },
      { path:'sidebar', 
        component:SidebarComponent,
      
        children:[
          {path:'dashboard', component:DashboardComponent},
          {path:'tables', component:TablesComponent}
        ]
      },
      { path:'**', 
        component:NotfoundComponent
      }


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
