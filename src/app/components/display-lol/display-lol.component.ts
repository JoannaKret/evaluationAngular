import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICharacter } from 'src/app/model/ICharacter';

@Component({
  selector: 'app-display-lol',
  templateUrl: './display-lol.component.html',
  styleUrls: ['./display-lol.component.css']
})
export class DisplayLolComponent implements OnInit {

  @Input() allCharacters: ICharacter[] = [];
  @Output() deleteCharacter: EventEmitter<number> = new EventEmitter<number>();
  @Output() modifyCharacter: EventEmitter<ICharacter> = new EventEmitter<ICharacter>();
  
  constructor() { }

  ngOnInit(): void {
  }

deleteByChild = (toDelete: number) => {
  this.deleteCharacter.emit(toDelete);
}

modifyState =(charToModify: ICharacter): void => {
  charToModify.active == false ? charToModify.active = true : charToModify.active = false;
  this.modifyCharacter.emit(charToModify);
}

}
