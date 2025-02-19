import AlbumCard from "./AlbumCard";
import { MusicFolder } from "../types";

interface Props {
  folders: MusicFolder[];
}

export default function AlbumList({ folders }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Featured Albums</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {folders.map((folder, index) => (
          <AlbumCard key={folder.FolderName + index} folder={folder} />
        ))}
      </div>
    </div>
  );
}
