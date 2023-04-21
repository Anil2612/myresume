import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() titleValue = '';
  @Input() subTitleValue = '';
  subTitle = '';

  constructor(private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRouter.url.subscribe((data)=> {
      console.log(data);
      
      data[0]?.path == 'resume' && (this.subTitle = `<b>${this.subTitleValue}</b> years of experience`);
      data[0]?.path == 'contact' && (this.subTitle = 'Get in Touch');
    });
  }

}
