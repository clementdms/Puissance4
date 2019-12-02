import { Component } from '@angular/core';
import { Puissance4Service } from './puissance4.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'puissance4';

  constructor(private ps:Puissance4Service){

  }

  getPlayer(): number{
    return this.ps.getPlayer();
  }

  getActive():boolean{
    return this.ps.getActive();
  }
}
