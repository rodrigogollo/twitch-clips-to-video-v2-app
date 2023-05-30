type TwitchClip = {
  broadcaster_key: string,
  broadcaster_name: string,
  created_at: string,
  creator_id: string,
  creator_name: string,
  duration: string,
  embed_url: string,
  game_id: string,
  id: string,
  language: string,
  thumbnail_url: string,
  title: string,
  url: string,
  video_id: string,
  view_count: number,
  vod_offset: number,
  game: TwitchGame
}

type TwitchGame = {
  id: string,
  box_art_url: string,
  igdb_id: string,
  name: string,
}

type TwitchClipHeadersType = {
  key: number,
  value: string
}