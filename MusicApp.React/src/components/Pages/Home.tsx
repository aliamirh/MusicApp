import AlbumList from "../AlbumList";
import useFetchFolders from "../../hooks/useFetchFolders";
export default function Home() {
  const { data, error, loading } = useFetchFolders();
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center">Music Player</h1>
      {error && <h2 className="text-red-500">There was an error!</h2>}
      {loading && <h2>Loading</h2>}
      {data && (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AlbumList folders={data.Data} />
        </main>
      )}
    </div>
  );
}
