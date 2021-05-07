import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { About } from '../dataall/about';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  about: About[];
  constructor(private backendService: BackendService) {
    this.about = [];
   }

  ngOnInit(): void {
    this.about = this.backendService.getAbout();
  }

}
