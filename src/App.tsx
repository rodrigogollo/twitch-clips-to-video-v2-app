import { useState, useEffect, ReactElement } from 'react'
import './App.css'
import VideoPlayer from './components/VideoPlayer'

type TwitchClip = {
  broadcaster_id: string,
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
  tle: string,
  url: string,
  video_id: string,
  view_count: number,
  vod_offset: number,
}

function App() {
  const [videoList, setVideoList] = useState<TwitchClip[]>([])

  const fetchTwitchClips = async () => {
    const response = await fetch('http://localhost:3000/clips')
    const clips = await response.json()
    return clips.data
  }

  useEffect(() => {
    fetchTwitchClips().then(clips => setVideoList(clips))
  }, [])

  return (
    <>
      {
        videoList.map(video => {
          return (
            <VideoPlayer key={video.id} source={video.url} />
          )
        })
      }
    </>
  )



}

export default App
