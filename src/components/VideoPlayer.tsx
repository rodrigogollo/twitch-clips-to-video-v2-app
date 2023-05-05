import { ReactElement } from "react"

type VideoPlayerProps = {
  source: string
}

const VideoPlayer = ({ source }: VideoPlayerProps): ReactElement => {
  return (
    <video width="320" height="240" controls >
      <source src={source} type="video/mp4" />
    </video>
  )
}

export default VideoPlayer