import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router'
import { AppComponent } from './app.component';
import { HelloWorld } from './primercomponente/primer.component';
import { NeuComponent } from './neu/neu.component';
import { UserComponent } from './user/user.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http'
import { NaboutComponent } from './nabout/nabout.component';
//Este es el modulo princioalcon
const routes:Route[]=[
  {path:'', component:NeuComponent},
  {path:'about', component:NaboutComponent}
];

//rxjs

@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    NeuComponent,
    UserComponent,
    NaboutComponent
    //AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
