import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:string[] = ['Max','Werner','Hanz'];
  activated: boolean=false;
  name: string='Mich name';
  age:number;
  adress:{
    street:string,
    city:string
  };
  hobbies:string[];
  posts=[];

  constructor(private dataService:DataService){
    this.dataService.getData().subscribe(data =>{
      this.posts=data;
    });
    this.age=19;
    this.adress={
      street:"Mich strasse",
      city:"Tijuana"
    };
    this.hobbies=['Mi hobbie'];
  }

  addUser(user){
    console.log(typeof(user.value));
    if (user.value!=""){
      console.log(user.value)
      this.users.push(user.value);
      user.value='';
    }
    return false;
  }

  deleteUser(user){
    for (let item = 0; item < this.users.length; item++) {
      if (user==this.users[item]){
        this.users.splice(item,1);
      }
    }
  }
}
