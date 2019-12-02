import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commentateur',
  templateUrl: './commentateur.component.html',
  styleUrls: ['./commentateur.component.scss']
})
export class CommentateurComponent implements OnInit {
  @Input() player:number;
  @Input() active:boolean;
  constructor() { }

  ngOnInit() {
  }
  
  j1Joue(){
    return this.player===1;
  }

  partieEnCours(){
    return this.active;
  }
}
