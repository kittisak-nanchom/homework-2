import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Portfolio } from '../dataall/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolio: Portfolio[];
  constructor(private backendService: BackendService) {
    this.portfolio = [];
   }

  ngOnInit(): void {
    this.portfolio = this.backendService.getPortfolio();
  }

}
