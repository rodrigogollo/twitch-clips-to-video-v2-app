type ClipCardParams = {
  id: string,
  thumbnail: string
  game_art: string,
  title: string,
  broadcaster_name: string,
  creator_name: string,
  game_name: string,
  view_count: number,
  duration: string,
  handleToggleClip: (event: React.MouseEvent<HTMLElement>) => void
}

function ClipCard({ id, thumbnail, game_art, title, broadcaster_name, creator_name, game_name, view_count, duration, handleToggleClip }: ClipCardParams): any {
  return (
    <div className="flex shrink-0 flex-col w-80 relative m-3 bg-[#0E0E10]" >
      <div className="w-full h-52 bg-purple-600 absolute inline z-1 rounded"></div>
      <div id={id} className="flex flex-nowrap flex-row space-x-1 relative hover:cursor-pointer hover:left-1.5 hover:bottom-1.5"
        onClick={(event: React.MouseEvent<HTMLElement>) => handleToggleClip(event)}>
        <img className="w-full h-52 z-0" src={thumbnail} alt="" />
        <p className="absolute text-gray-200 font-semibold text- top-2 left-2 bg-gray-600/30 p-1 rounded">{duration}</p>
        <p className="absolute text-gray-200 font-semibold text- bottom-2 right-2 bg-gray-600/30 p-1 rounded">{view_count} views</p>
      </div>
      <div className="h-24 w-full flex flex-nowrap flex-row space-x-1 py-3 ">
        <img className=" w-1/4 h-24 mr-2 hover:cursor-pointer" src={game_art} title={game_name} />
        <div className=" w-3/4 h-24 flex flex-col" >
          <h4 className="text-gray-200 font-semibold text-md line-clamp-2 hover:text-purple-500 cursor-pointer" title={title}>{title}</h4>
          <h4 className="flex-wrap text-gray-200 font-bold text-md mt-auto hover:text-purple-500 cursor-pointer">{broadcaster_name}</h4>
          <h5 className="text-gray-500 font-semibold text-sm" >Clipped by {creator_name}</h5>
        </div>
      </div >
    </div >
  )

}

export default ClipCard