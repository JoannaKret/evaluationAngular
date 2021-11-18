import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICharacter } from 'src/app/model/ICharacter';

@Component({
  selector: 'app-display-lol',
  templateUrl: './display-lol.component.html',
  styleUrls: ['./display-lol.component.css']
})
export class DisplayLolComponent implements OnInit {

  @Input() allCharacters: ICharacter[] = [];
  @Output() deleteCharacter:EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

deleteByChild = (toDelete: number) => {
  this.deleteCharacter.emit(toDelete);
}

}
