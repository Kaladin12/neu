import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../Post';

@Component({
  selector: 'app-nabout',
  templateUrl: './nabout.component.html',
  styleUrls: ['./nabout.component.css']
})
export class NaboutComponent implements OnInit {

  constructor(private dataServide:DataService) {
    this.dataServide.getData().subscribe(data=>{
      this.posts=data;
    })
   }
  posts:Post[];
  ngOnInit(): void {
  }

}
