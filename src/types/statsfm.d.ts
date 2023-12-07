export interface RecentStreamsRes {
  items: Stream[];
}

export interface Stream {
  endTime: string;
  track: Track;
  albumId: number;
  durationMs: number;
}

export interface Track {
  albums: Album[];
  artists: Artist[];
  durationMs: number;
  explicit: boolean;
  externalIds: ExternalIds;
  id: number;
  name: string;
  spotifyPopularity: number;
  spotifyPreview?: string;
}

export interface Album {
  id: number;
  image: string;
  name: string;
}

export interface Artist {
  id: number;
  name: string;
}

export interface ExternalIds {
  spotify: string[];
}
