import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { data } from 'src/assets/data/profile';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  profileData = data;
  eduResumeData: any = data?.education;
  expResumeData: any =  data?.experience;
  primarySkills = data?.primarySkills;
  secondarySkills = data?.secondarySkills;
  totalExp: any = 0;
  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {
    let totalExpInMonths = 0;
    this.profileData.experience.map((exp: any)=> {
      console.log(new Date(exp.start), new Date(exp.end));
      const diff = this.generalService.diffInMonths(new Date(exp.start), new Date(exp.end));
      exp.expValue = `${ Math.floor(diff) }`;
      totalExpInMonths += Math.floor(diff)
    })
    this.expResumeData = this.profileData.experience;
    this.totalExp = (Math.round((totalExpInMonths/12) * 100) / 100).toFixed(2);
  }

  open(url: any) {
    this.generalService.open(url);
  }

}
