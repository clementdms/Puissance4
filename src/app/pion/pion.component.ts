import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pion',
  templateUrl: './pion.component.html',
  styleUrls: ['./pion.component.scss']
})
export class PionComponent implements OnInit {
@Input() joueur:number;
  constructor() { }

  ngOnInit() {
  }
  estJ1():boolean{
    return this.joueur===1;
  }
  estJ2():boolean{
    return this.joueur===2;
  }
}
