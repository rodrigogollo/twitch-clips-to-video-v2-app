import { Link } from "@tanstack/router"

type ClipCardParams = {
  thumbnail: string
  game_art: string,
  title: string,
  broadcaster_name: string,
  creator_name: string,
  game_name: string,
  view_count: number
}

function ClipCard({ thumbnail, game_art, title, broadcaster_name, creator_name, game_name, view_count }: ClipCardParams): any {
  return (
    <div className="flex shrink-0 flex-col w-80 relative m-3 bg-[#0E0E10]" >
      <div className="w-full h-52 bg-purple-600 absolute inline z-1 rounded"></div>
      <div className="flex flex-nowrap flex-row space-x-1 relative hover:cursor-pointer hover:left-1.5 hover:bottom-1.5">
        <img className="w-full h-52 z-0" src={thumbnail} alt="" />
        <p className="absolute text-gray-200 font-semibold text- top-2 left-2 bg-gray-600/30 p-1 rounded">0:46</p>
        <p className="absolute text-gray-200 font-semibold text- bottom-2 right-2 bg-gray-600/30 p-1 rounded">{view_count} views</p>
      </div>
      <div className="h-36 w-full flex flex-nowrap flex-row space-x-1 py-3 ">
        <img className=" w-1/4 h-18 mr-2 hover:cursor-pointer" src={game_art} title={game_name} />
        <div className=" w-3/4 flex flex-col" >
          <h3 className="inline text-gray-200 font-semibold text-md text-ellipsis overflow-hidden ... hover:text-purple-500 cursor-pointer ">{title}</h3>
          <h4 className="text-gray-200 font-bold text-sm hover:text-purple-500 cursor-pointer">{broadcaster_name}</h4>
          <h5 className="text-gray-500 font-semibold text-sm mt-auto" >Clipped by {creator_name}</h5>
        </div>
      </div >
    </div >
  )

}

export default ClipCard