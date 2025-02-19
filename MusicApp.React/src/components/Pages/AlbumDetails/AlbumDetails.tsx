import { Link } from "react-router-dom";
import useFetchAlbumInfo from "../../../hooks/useFetchAlbumInfo";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSongInfo } from "../../../redux/reducers/currentlyPlayingSongSlice";
import { Song } from "../../../types";
export default function AlbumDetails() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const folderPath = searchParams.get("folderPath");
  const { data, loading, error } = useFetchAlbumInfo(folderPath || "");

  if (loading) {
    return <h1 className="text-4xl text-center">Loading</h1>;
  }

  if (error) {
    return <h2 className="text-red-500">There was an error!</h2>;
  }

  const handleSongClick = (song: Song) => {
    console.log(song);
    dispatch(setSongInfo({ songName: song.SongName, folderName: data?.Data.FolderName, coverImg: data?.Data.CoverImg, songFile: song.SongData }));
  };

  if (data) {
    return (
      <div className="">
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="text-blue-400 hover:underline mb-4 inline-block">
            &larr; Back to Albums
          </Link>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img
                src={data.Data.CoverImg}
                alt={`${data.Data.FolderName} cover`}
                width={400}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-2">{data.Data.FolderName}</h1>
              <h3 className="text-xl font-semibold mb-2">Tracks:</h3>
              <ol className="list-decimal list-inside">
                {data.Data.Songs.map((song, index) => (
                  <li key={index} className="mb-2 cursor-pointer hover:scale-105" onClick={() => handleSongClick(song)}>
                    {song.SongName}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
