import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/model/ICharacter';

@Component({
  selector: 'app-display-lol',
  templateUrl: './display-lol.component.html',
  styleUrls: ['./display-lol.component.css']
})
export class DisplayLolComponent implements OnInit {

  @Input() allCharacters: ICharacter[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
