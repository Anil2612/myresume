import { Component, OnInit } from '@angular/core';
import { data } from 'src/assets/data/profile';
import { GeneralService } from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  profileData = data;
  isOpen=false;

  toggleChat = () => {
    this.isOpen = !this.isOpen;
  }

}
