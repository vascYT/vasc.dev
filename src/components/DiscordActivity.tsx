import { useLanyardWS } from "use-lanyard";

/* 
    Thanks to https://github.com/iGalaxyYT/igalaxy.dev/blob/main/components/Lanyard.tsx for the help :)
*/

export default function DiscordActivity() {
  const activity = useLanyardWS("346977366569910274");

  if (
    !activity ||
    activity.discord_status === "offline" ||
    activity.activities.length <= 0
  )
    return <></>;

  return (
    <div className="mt-3 flex flex-row items-center space-x-2">
      <div className="h-2 w-2 animate-pulse rounded-full bg-green-300"></div>
      <span className="text-sm text-green-300">
        {activity.listening_to_spotify ? (
          <>
            Listening to <span className="mr-[1.5px] font-bold">`</span>
            {activity.spotify?.track_id != null ? (
              <a
                href={`https://open.spotify.com/track/${activity.spotify?.track_id}`}
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {activity.spotify?.song}
              </a>
            ) : (
              activity.spotify?.song
            )}
            <span className="ml-[1.5px] font-bold">`</span>
          </>
        ) : (
          `Playing ${activity.activities[0].name}`
        )}
      </span>
    </div>
  );
}
