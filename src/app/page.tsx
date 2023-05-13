import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'
import { MockPlayList2, mockPlayListToTop } from '@/utils/mockPlayList'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="p-1 rounded-full bg-black/40">
              <ChevronLeft />
            </button>
            <button className="p-1 rounded-full bg-black/40">
              <ChevronRight />
            </button>
          </div>

          <h1 className="mt-10 text-3xl font-semibold">Welcome</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {mockPlayListToTop.map(album => (
              <a
                className="flex items-center group gap-4 overflow-hidden transition-colors rounded-md bg-white/5 hover:bg-white/10 cursor-pointer"
                key={album.id}
              >
                {' '}
                <Image
                  src={album.albumImgURL}
                  alt="Capa do album"
                  width={104}
                  height={104}
                />{' '}
                <strong>{album.name}</strong>
                <button className="flex items-center justify-center pl-1 w-12 h-12 ml-auto mr-8 text-black bg-green-400 rounded-full invisible group-hover:visible">
                  <Play fill="black" />
                </button>
              </a>
            ))}
          </div>

          <h2 className="mt-10 text-2xl font-semibold">Made for you</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            {MockPlayList2.map(album => (
              <a
                href=""
                className="bg-white/5 p-3 rounded-md hover:bg-white/10 transition-colors cursor-pointer flex flex-col gap-2"
                key={album.id}
              >
                <Image
                  src={album.albumImgURL}
                  alt="Capa do album"
                  className="w-full"
                  width={120}
                  height={120}
                />{' '}
                <strong className="font-semibold text-sm">{album.name}</strong>
                <span className="text-sm text-zinc-500">
                  {album.artisticName}
                </span>
              </a>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
