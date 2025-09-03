import { useLanyardWS } from "use-lanyard";
import clsx from "clsx";
import { ExternalLink } from "lucide-react";
import { SiDiscord, SiSpotify } from "@icons-pack/react-simple-icons";

const statusClasses = {
  online: "bg-green-400/10 text-green-400",
  idle: "bg-orange-400/10 text-orange-400 ",
  dnd: "bg-red-400/10 text-red-400",
  offline: "bg-white/5 text-gray-400",
};

export default function Lanyard({
  hideStatus = false,
  hideLink = false,
}: {
  hideStatus?: boolean;
  hideLink?: boolean;
}) {
  const activity = useLanyardWS("346977366569910274");

  return (
    <div className="flex h-full flex-col justify-stretch gap-5">
      {!hideStatus && (
        <a
          href={
            activity?.discord_user.id
              ? `https://discord.com/users/${activity.discord_user.id}`
              : undefined
          }
          target="_blank"
          className={clsx(
            "flex h-full items-center gap-3 overflow-hidden rounded-3xl border border-white/10 px-3",
            activity?.discord_status
              ? statusClasses[activity.discord_status]
              : "bg-white/5",
            activity?.discord_user.id && "transition-transform active:scale-95",
          )}
        >
          {activity ? (
            <>
              <SiDiscord className="h-8 w-8 shrink-0 fill-white" />
              <div>
                <p className="text-md font-bold text-white">
                  @{activity.discord_user.username}
                </p>
                <p className="text-sm">{activity.discord_status}</p>
              </div>
              <ExternalLink className="ml-auto mr-4 h-4 w-4 shrink-0 text-white" />
            </>
          ) : (
            <>
              <SiDiscord className="h-8 w-8 shrink-0" />
              <div className="w-28 animate-pulse">
                <div className="mt-1 h-4 w-full overflow-hidden rounded-md bg-white/10"></div>
                <div className="mt-1 h-4 w-2/3 overflow-hidden rounded-md bg-white/10"></div>
              </div>
            </>
          )}
        </a>
      )}

      <a
        href={
          activity?.spotify?.track_id
            ? `https://open.spotify.com/track/${activity.spotify.track_id}`
            : undefined
        }
        target="_blank"
        className={clsx(
          "relative flex h-full items-center gap-3 overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-3",
          activity?.spotify?.track_id && "transition-transform active:scale-95",
        )}
      >
        {activity ? (
          activity.listening_to_spotify && activity.spotify ? (
            <>
              <SiSpotify className="h-8 w-8 shrink-0" />
              <div className="w-[75%]">
                <p className="text-md truncate font-bold">
                  {activity.spotify.song}
                </p>
                <p className="text-grey-300 truncate text-sm">
                  by {activity.spotify.artist}
                </p>
              </div>
              {!hideLink && activity.spotify.track_id && (
                <ExternalLink className="ml-auto mr-4 h-4 w-4 shrink-0" />
              )}
              {activity.spotify.album_art_url && (
                <img
                  src={activity.spotify.album_art_url}
                  className="absolute left-0 top-0 -z-10 h-full w-full object-cover object-center blur-sm brightness-50"
                />
              )}
            </>
          ) : (
            <>
              <SiSpotify className="h-8 w-8 shrink-0" />
              <p className="text-md font-bold leading-tight">Nothing playing</p>
            </>
          )
        ) : (
          <>
            <SiSpotify className="h-8 w-8 shrink-0" />
            <div className="w-28 animate-pulse">
              <div className="mt-1 h-4 w-full overflow-hidden rounded-md bg-white/10"></div>
              <div className="mt-1 h-4 w-2/3 overflow-hidden rounded-md bg-white/10"></div>
            </div>
          </>
        )}
      </a>
    </div>
  );
}
