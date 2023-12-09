import { useLanyardWS } from "use-lanyard";
import { LuLoader2 } from "react-icons/lu/index";
import { useEffect, useState } from "react";
import type { RecentStreamsRes, Stream } from "../types/statsfm";

export default function SpotifyActivity() {
  const activity = useLanyardWS("346977366569910274");

  return (
    <div className="relative flex h-full items-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-5">
      {activity ? (
        activity.listening_to_spotify && activity.spotify ? (
          <>
            <div>
              <p className="mb-2 text-xs uppercase leading-tight text-green-400">
                Listening to
              </p>
              <div>
                {activity.spotify.track_id != null ? (
                  <a
                    href={`https://open.spotify.com/track/${activity.spotify?.track_id}`}
                    className="text-lg font-bold hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {activity.spotify.song}
                  </a>
                ) : (
                  <p className="text-lg font-bold">{activity.spotify.song}</p>
                )}
                <p className="text-grey-300 text-sm">
                  {activity.spotify.artist}
                </p>
              </div>
            </div>
            {activity.spotify.album_art_url && (
              <img
                src={activity.spotify.album_art_url}
                className="absolute left-0 top-0 -z-10 h-full w-full object-cover object-center blur brightness-50"
              />
            )}
          </>
        ) : (
          <div className="h-full w-full pt-5">
            <p className="mb-2 text-xs uppercase leading-tight text-red-500">
              Nothing playing
            </p>
            <RecentStreams />
          </div>
        )
      ) : (
        <LuLoader2 className="w-full animate-spin" />
      )}
    </div>
  );
}

function RecentStreams() {
  const [streams, setStreams] = useState<Stream[]>([]);

  useEffect(() => {
    fetch(
      "https://api.stats.fm/api/v1/users/uxmg5bqbxgkd84tq7o5yeaofq/streams/recent",
    ).then((res) => {
      res.json().then((value: RecentStreamsRes) => {
        setStreams(value.items);
      });
    });
  }, []);

  function StreamItem({ stream }: { stream: Stream | undefined }) {
    if (stream) {
      return (
        <div className="w-24 text-center">
          <img
            src={stream.track.albums[0].image}
            alt="Track album image"
            className="mx-auto h-16 w-16 rounded-md object-cover"
          />
          <a
            href={`https://open.spotify.com/track/${stream.track.externalIds.spotify[0]}`}
            className="mt-1 block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {stream.track.name}
          </a>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs text-gray-300">
            {stream.track.artists.map((artist) => artist.name).join(", ")}
          </p>
        </div>
      );
    } else {
      return (
        <div className="w-24 animate-pulse text-center">
          <div className="mx-auto h-16 w-16 rounded-md bg-white/10"></div>
          <div className="mt-1 block h-4 w-full  overflow-hidden text-ellipsis whitespace-nowrap rounded-md bg-white/10 text-sm font-bold hover:underline"></div>
          <div className="mt-1 h-4 w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-md bg-white/10 text-xs text-gray-300"></div>
        </div>
      );
    }
  }

  return (
    <>
      <p className="mb-2 text-lg font-bold">Recently played</p>
      <div className="flex w-full items-center justify-between">
        <StreamItem stream={streams[0]} />
        <StreamItem stream={streams[1]} />
        <StreamItem stream={streams[2]} />
      </div>
    </>
  );
}
