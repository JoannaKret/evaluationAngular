import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
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

deleteCharacter = (id: number):Observable<ICharacter[]> => {
  return this.http.delete<ICharacter[]>(`${environment.URL}/${id}`)
}

addCharacter = (newChar: ICharacter):Observable<ICharacter> => {
  return this.http.post<ICharacter>(environment.URL, newChar);
}

}
