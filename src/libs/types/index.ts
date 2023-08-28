export interface GameListItemType {
  title: string;
  releaseDate: string;
  publisherTitle: string;
  category: string;
  thumbnail: string;
}

export interface GameResponseType {
  id: number;
  title: string;
  release_date: string;
  publisher: string;
  developer: string;
  genre: string;
}

export interface GameListItemResponseType {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

export interface GameListResponseType extends Array<GameListItemResponseType> {}
