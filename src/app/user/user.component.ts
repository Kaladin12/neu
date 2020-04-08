import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() nameUser;//con esto se asegura de poder introducir desde afuera.
  //lo manda lamar en el app.component.html
  //despues en user.component.html se agregan las instrucciones de html
  constructor() { }

  ngOnInit(): void {
  }

}
