import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { data } from 'src/assets/data/profile';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  profileData = data;
  aboutMeDetails: any;
  companyDetails: any;
  constructor(private router: Router, private generalService: GeneralService) { }

  ngOnInit(): void {
    this.aboutMeDetails = this.profileData?.aboutMeDetail;
    // const body: any = document.querySelector(".profile-container");
    // const el: any = document.querySelector(".img-container");
    // body.addEventListener("mousemove", (e: any) => {
    //   console.log(e.offsetX, e.offsetY);
      
    //   el.style.backgroundPositionX = ( -e.offsetX + 1000) + "px";
    //   el.style.backgroundPositionY = ( -e.offsetY + 1000) + "px";
    // });
  }

  open(param: any) {
    if(param === 'contact') {
      this.router.navigate(['contact']);
    } else if(param === 'resume') {
      this.generalService.open('assets/data/resume_anil.pdf');
    }
  }

}
