import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-add-char',
  templateUrl: './add-char.component.html',
  styleUrls: ['./add-char.component.css']
})
export class AddCharComponent implements OnInit {

  @Output() newCharacter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addCharacter = (charName: string): void => {
    this.newCharacter.emit(charName)
  }

}
