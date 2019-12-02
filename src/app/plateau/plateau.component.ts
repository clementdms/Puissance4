import { Component, OnInit, Input } from '@angular/core';
import { Colonne, Jeton } from '../puisance4.definition';
import { Puissance4Service } from '../puissance4.service';

@Component({
  selector: 'app-plateau',
  templateUrl: './plateau.component.html',
  styleUrls: ['./plateau.component.scss']
})
export class PlateauComponent implements OnInit {

  constructor(private ps:Puissance4Service) {

  }

  ngOnInit() {
  }
 
  getPlateau():number[][]{
    return this.ps.getPlateau();
  }
  joue(x:number,y:number){
    
    this.ps.play(x,y);
  }
  estVide(C:number):boolean{
    return !((C===1)||(C===2));
  }

  
}