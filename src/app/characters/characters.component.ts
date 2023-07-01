import { Component, OnInit } from "@angular/core";
import { CharactersService } from "./services/characters.service";
import { Character } from "./models/character.model";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  selectedCharacter: Character | undefined;
  requestHistoryService: any;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.charactersService.getCharacters()
      .subscribe(
        (characters) => {
          this.characters = characters;
        },
        (error) => {
          console.error('Error loading characters:', error);
        }
      );
  }

  

  openCharacterPopup(character: Character) {
    this.selectedCharacter = character;
  }

  closeCharacterPopup() {
    this.selectedCharacter = undefined;
  }

}
