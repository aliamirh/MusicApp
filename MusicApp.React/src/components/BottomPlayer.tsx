import { useSelector } from "react-redux";
import albumPlaceholder from "../assets/placeholder.jpg";
import { RootState } from "../redux/store";

export default function BottomPlayer() {
  const songInfo = useSelector((state: RootState) => state.songInfo);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#181818] border-t border-gray-600 p-2 flex items-center">
      <div className="flex items-center ">
        <img src={songInfo.coverImg || albumPlaceholder} alt={`${songInfo.songName} cover`} width={60} height={60} className="rounded-md mr-4" />
        <div>
          <h3 className="text-sm font-semibold">{songInfo.songName || "No song playing"}</h3>
          <p className="text-xs text-gray-400">{songInfo.folderName || "N/A"}</p>
        </div>
      </div>
      <div>
        <audio className="bg-[#181818]" controls key={songInfo.songFile}>
          <source src={songInfo.songFile || ""} />
        </audio>
      </div>
    </div>
  );
}
