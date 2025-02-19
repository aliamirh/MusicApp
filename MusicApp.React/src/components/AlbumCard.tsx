import { Link } from "react-router-dom";
import { MusicFolder } from "../types";

interface AlbumCardProps {
  folder: MusicFolder;
}

export default function AlbumCard({ folder }: AlbumCardProps) {
  return (
    <div className="bg-gray-600 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 text-white">
      <Link to={`/album-details?folderPath=${folder.FolderPath}`}>
        <img src={folder.CoverImg} alt={`${folder.FolderName} cover`} width={300} height={300} className="w-full h-auto" />
        <div className="p-4">
          <h3 className="text-lg font-semibold truncate">{folder.FolderName}</h3>
        </div>
      </Link>
    </div>
  );
}
