import {
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="px-6 py-4 border-t bg-zinc-800 border-zinc-700 flex items-center justify-between ">
      <div className="flex items-center gap-3">
        <Image src="/album2.jpg" alt="Capa do album" width={56} height={56} />{' '}
        <div className="flex flex-col ">
          <strong className="text-sm font-normal">Mind Is A Prison</strong>
          <span className="text-xs text-zinc-500">Alec Benjamin</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack
            size={20}
            className="text-zinc-200"
            fill="rgb(228 228 231)"
          />
          <button className="flex items-center justify-center pl-1 w-10 h-10   text-black bg-white rounded-full ">
            <Play fill="black" />
          </button>
          <SkipForward
            size={20}
            className="text-zinc-200"
            fill="rgb(228 228 231)"
          />
          <Repeat size={20} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-20 h-1 rounded-full "></div>
          </div>
          <span className="text-xs text-zinc-400">2:41</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="bg-zinc-200 w-10 h-1 rounded-full "></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  )
}
