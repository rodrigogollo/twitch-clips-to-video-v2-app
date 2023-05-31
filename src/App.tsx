import { useState, useEffect, ReactElement } from 'react'
import './App.css'
import VideoPlayer from './components/VideoPlayer'
import DrawableTable from './components/DrawableTable'
import CustomTable from './components/CustomTable'
import ClipCard from './components/ClipCard'

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
  const [clips, setClips] = useState<TwitchClip[]>([])
  const [isClipToggle, setIsClipToggle] = useState<Boolean>(false)
  const [currentClip, setCurrentClip] = useState<string>('')

  const fetchTwitchClips = async () => {
    const response = await fetch('http://localhost:3000/clips')
    const clips = await response.json()
    console.log(clips.data)
    return clips.data
  }

  useEffect(() => {
    const clips = JSON.parse(localStorage.getItem('clips') ?? '{}')
    if (clips?.length > 0) {
      setClips(clips)
    } else {
      fetchTwitchClips().then(clips => {
        setClips(clips)
        localStorage.setItem('clips', JSON.stringify(clips));
      })
    }
  }, [])

  const getClips = async () => {
    localStorage.setItem('clips', '');
    fetchTwitchClips().then(clips => {
      setClips(clips)
      localStorage.setItem('clips', JSON.stringify(clips));
    })
  }

  const handleToggleClip = async (event: React.MouseEvent<HTMLElement>) => {
    setIsClipToggle(true)
    setCurrentClip(event.currentTarget.id)
  }

  const handleReturn = async () => {
    setIsClipToggle(false)
    setCurrentClip('')
  }

  return (
    <div className="w-screen h-auto flex flex-row flex-wrap bg-[#0E0E10] justify-center p-10">
      <button className='text-white m-10 border p-3 h-fit w-fit' onClick={getClips}>Get Clips</button>
      {/* <CustomTable headers={TwitchClipHeaders} items={clips} /> */}
      {
        clips.length > 0 && isClipToggle === false ?

          clips.map(video => (
            <>
              {/* <iframe
                key={video.id}
                src={`${video.embed_url}&parent=127.0.0.1`}
                height="315"
                width="560"
                allowFullScreen>
              </iframe> */}
              <ClipCard id={video.id} thumbnail={video.thumbnail_url} game_art={video.game.box_art_url} title={video.title}
                broadcaster_name={video.broadcaster_name} creator_name={video.creator_name} game_name={video.game.name}
                view_count={video.view_count} duration={video.duration} handleToggleClip={handleToggleClip} />
              {/* <img key={video.id} src={video.thumbnail_url} /> */}
              {/* <img key={`${video.id}_game`} src={video.game.box_art_url.replace('{width}', '300').replace('{height}', '300')} alt={video.game.name} /> */}
            </>
          ))

          :
          clips.filter(clip => clip.id === currentClip).map(video => (
            <div className="flex flex-col p-3 items-center">
              <iframe
                key={video.id}
                src={`${video.embed_url}&parent=127.0.0.1`}
                height="600"
                width="1000"
                allowFullScreen>
              </iframe>
              <button className='text-white m-10 border p-3 w-fit' onClick={handleReturn}>Return</button>
            </div>
          ))
      }

    </div >
  )



}

export default App
