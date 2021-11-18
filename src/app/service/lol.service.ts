import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ICharacter } from '../model/ICharacter';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LolService {

  charactersStream = new BehaviorSubject<ICharacter[]>([]);

  constructor(private http: HttpClient) { }

getCharacter =() => {
  this.http.get<ICharacter[]>(environment.URL).subscribe(
    data => {
      this.charactersStream.next(data);
    }
  )
}

}
