import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Puissance4Service {

  private plateau: number[][];
  private subject = new BehaviorSubject(this);
  readonly obs = this.subject.asObservable();
  private hauteur: number = 6;
  private largeur: number = 7;
  player: number = 1;
  active: boolean;


  constructor() {
    this.initGame();
  }

  initGame(): void {
    this.player = 1;
    this.plateau = [];
    this.active=true;
    for (let i: number = 0; i < this.hauteur; i++) {
      let plat: number[] = [];
      for (let j: number = 0; j < this.largeur; j++) {
        plat.push(0);
      }
      this.plateau.push(plat);
    }
    
  }

  getPlateau(): number[][] {
    return this.plateau;
  }
  
  getPlayer(): number{
    return this.player;
  }

  getActive():boolean{
    return this.active;
  }


  changeJoueur() {
    this.player = this.player === 1 ? 2 : 1;
  }

  play(x: number, y: number) {
    if(this.active){
      if ( y >= 0 && y < this.largeur) {
        //Si la case est libre on peut jouer
        
        let xJoue=this.joueDansColonne(y);
        //this.plateau[x][y] = this.player;
        if (xJoue>=0 && this.victoireJoueur(xJoue, y)) {
          this.active=false;
        }
        this.changeJoueur();
      }
    }
 }
 nestPasVide(x:number, y:number):boolean{
   return this.plateau[x][y]===1 || this.plateau[x][y]===2
 }
 joueDansColonne(y:number):number{
   let x=this.hauteur-1;
   while(x>=0 && (this.nestPasVide(x,y))){
     x--;     
   }
   if(x>=0){
     this.plateau[x][y]=this.player;
   }
   return x;
 }
/*
x=0 y=0                   x=0 y=largeur-1


x=hauteur-1 y=0           x=hauteur-1 y=largeur-1
*/
  victoireLigne(x: number, y: number): boolean {
    let compteur: number = 0; let i = y; let boo: boolean = false;
    while ((i < this.largeur) && (this.plateau[x][i] === this.player)) {
      compteur++;
      i++;
    }
    if (compteur < 4) {
      i = y - 1;
      while ((i >= 0) && (this.plateau[x][i] === this.player)) {
        compteur++;
        i--;
      }
    }
    if (compteur >= 4) {
      boo = true;
    }
    return boo;
  }

  victoireColonne(x: number, y: number): boolean {
    let compteur: number = 0; let i = x; let boo = false;
    while ((i<this.hauteur) && (this.plateau[i][y] == this.player)) {
      compteur++;
      i++;
    }
    if (compteur >= 4) {
      boo = true;
    }
    return boo;
  }

  victoireDiago(x,y): boolean {
    let compt = 0; let i = x; let j = y; let boo=false;
    while ( (i >= 0) && (j < this.largeur) && this.plateau[i][j] === this.player) {
      //Diagonale vers le haut a droite
      compt++;
      i--;
      j++;    
    }
    if (compt < 4) {
      i = x + 1 ; 
      j = y - 1 ;
      while ( i < this.hauteur && j >= 0 && this.plateau[i][j] === this.player) {
        // Diagonale vers le bas a gauche
        i++;
        j--;
        compt++;
      }
      if (compt < 4) {
        i = x-1;
        j = y-1;
        while (j >= 0 && i >= 0 && this.plateau[i][j] === this.player) {
          // Diagonale vers le haut à gauche
          i--;
          j--;
          compt++;
        }
      }
      if (compt < 4) {
        i = x + 1;
        j = y + 1;
        while (j < this.largeur && i < this.hauteur && this.plateau[i][j] === this.player) {
          // Diagonale vers le bas à droite
          i++;
          j++;
          compt++;
        }
      }
    }
    if(compt>=4){
      boo=true;
    }


    return boo;
  }

  victoireJoueur(x: number, y: number): boolean {
    return (this.victoireLigne(x, y)) || this.victoireColonne(x, y) || this.victoireDiago(x,y);
  }
}
