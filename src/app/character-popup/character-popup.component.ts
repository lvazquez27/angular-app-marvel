import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character, CharacterThumbnail } from '../characters/models/character.model';

@Component({
  selector: 'app-character-popup',
  templateUrl: './character-popup.component.html'
})
export class CharacterPopupComponent {
  @Input() character: Character | undefined; 

  @Output() close = new EventEmitter<void>(); 

  getCharacterImageUrl(thumbnail: CharacterThumbnail): string {
    return `${thumbnail.path}.${thumbnail.extension}`;
  }
  onClose() {
    this.close.emit();
  }
}