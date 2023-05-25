import { useState, useEffect, ReactElement } from 'react'
import './App.css'
import VideoPlayer from './components/VideoPlayer'
import DrawableTable from './components/DrawableTable'
import CustomTable from './components/CustomTable'

const TwitchClipHeaders: TwitchClipHeadersType[] = [
  { key: 1, value: 'broadcaster_id' },
  { key: 2, value: 'broadcaster_name' },
  { key: 3, value: 'created_at' },
  { key: 4, value: 'creator_id' },
  { key: 5, value: 'creator_name' },
  { key: 6, value: 'duration' },
  { key: 7, value: 'embed_url' },
  { key: 8, value: 'game_id' },
  { key: 9, value: 'id' },
  { key: 10, value: 'language' },
  { key: 11, value: 'thumbnail_url' },
  { key: 12, value: 'tle' },
  { key: 13, value: 'url' },
  { key: 14, value: 'video_id' },
  { key: 15, value: 'view_count' },
  { key: 16, value: 'vod_offset' }
]

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
    <div className="App" style={{
      display: 'flex', flexDirection: 'row', flexWrap: 'wrap'
    }}>
      {/* <CustomTable headers={TwitchClipHeaders} items={videoList} /> */}
      {
        videoList.length > 0 &&
        videoList.map(video => (
          <>
            <iframe
              key={video.id}
              src={`${video.embed_url}&parent=127.0.0.1`}
              height="315"
              width="560"
              allowFullScreen>
            </iframe>
            <img key={`${video.id}_game`} src={video.game.box_art_url.replace('{width}', '300').replace('{height}', '300')} alt={video.game.name} />
          </>
        ))
      }
    </div >
  )



}

export default App
