export interface Character {
    id: number;
    name: string;
    description: string;
    thumbnail: CharacterThumbnail;
    comics: CharacterCollection;
    series: CharacterCollection;
    events: CharacterCollection;
    urls: CharacterUrl[];
  }
  
  export interface CharacterThumbnail {
    path: string;
    extension: string;
  }
  
  export interface CharacterCollection {
    available: number;
    collectionURI: string;
    items: CharacterSummary[];
  }
  
  export interface CharacterSummary {
    resourceURI: string;
    name: string;
  }
  
  export interface CharacterUrl {
    type: string;
    url: string;
  }