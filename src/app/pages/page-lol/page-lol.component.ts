import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/model/ICharacter';
import { LolService } from 'src/app/service/lol.service';

@Component({
  selector: 'app-page-lol',
  templateUrl: './page-lol.component.html',
  styleUrls: ['./page-lol.component.css']
})
export class PageLolComponent implements OnInit {

  characters: Array<ICharacter> = [];

  constructor(private lolService: LolService) { }

  ngOnInit(): void {
    this.lolService.getCharacter();
    this.getAllCharacters();
  }

  getAllCharacters = (): void => {
    this.lolService.charactersStream.subscribe(data => {
      this.characters = data
    },
    err => console.error(err)
    )
  }
deleteByParent = (id: number): void => {
  this.lolService.deleteCharacter(id).subscribe(data => {
    this.lolService.getCharacter()
  },
  err => console.error(err)
  )
}

addCharacterByParent = (newChar: string): void => {
  let char = {name : newChar, active: true}

  this.lolService.addCharacter(char).subscribe(data =>
    {
      this.lolService.getCharacter();
    },
    err => console.error(err)
    )
}

modifyCharacter = (charToModify: ICharacter) => {
  this.lolService.modifyState(charToModify).subscribe(data => {
    this.lolService.getCharacter()
  },
    err => console.error(err)
    )
}

}
