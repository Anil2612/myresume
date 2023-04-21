import { Component, OnInit } from '@angular/core';
import { data } from 'src/assets/data/profile';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  companyProjectDetails = data.companyProjectDetails;
  internalProjectDetails = data.internalProjectDetails;
  constructor() { }

  ngOnInit(): void {
  }

}
