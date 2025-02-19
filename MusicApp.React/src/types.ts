export interface MusicFolder {
  FolderName: string;
  FolderPath: string;
  CoverImg: string;
  NumberOfSongs: number;
  Songs: Song[];
}

export interface GetFoldersApiResponse {
  Status: string;
  Data: MusicFolder[];
}

export interface Song {
  SongName: string;
  SongData?: string;
}

export interface GetFolderApiResponse {
  Status: string;
  Data: MusicFolder;
}
