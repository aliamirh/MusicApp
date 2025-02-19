using EmbedIO;
using EmbedIO.Routing;
using EmbedIO.WebApi;
using MusicApp.Models;
using MusicApp.DTO;
using MusicApp.Helpers;
using System.Text.RegularExpressions;
namespace MusicApp.Controllers;


public class HomeController : WebApiController
{
    private readonly string _appDirectoryLocation = AppDomain.CurrentDomain.BaseDirectory;
    [Route(HttpVerbs.Get, "/home")]
    public string Index()
    {
        return "Hello!";
    }

    [Route(HttpVerbs.Get, "/get-folders")]
    public ApiResponseDTO GetFolders()
    {
        try
        {

            var folderNames = Directory.GetDirectories(_appDirectoryLocation);
            List<FolderInfo> folders = new List<FolderInfo> { };
            foreach (string folderName in folderNames)
            {
                if (!folderName.Contains("wwwroot"))
                {

                    FolderInfo folder = GetFolderInfo(folderName, false);
                    if (folder.NumberOfSongs != 0)
                    {
                        folders.Add(folder);
                    }

                }
            }

            return new ApiResponseDTO { Status = "success", Data = folders };
        }
        catch (Exception ex)
        {
            return new ApiResponseDTO { Status = "error", Data = ex.Message };

        }
    }

    [Route(HttpVerbs.Get, "/album-details")]
    public ApiResponseDTO AlbumDetails([QueryField] string folderPath)
    {
        try
        {

            FolderInfo folder = GetFolderInfo(folderPath, true);
            return new ApiResponseDTO() { Status = "success", Data = folder };
        }
        catch (Exception ex)
        {
            return new ApiResponseDTO() { Status = "error", Data = ex.Message };

        }
    }

   private FolderInfo GetFolderInfo(string folderPath, bool getSongData)
{
    string path = Path.IsPathRooted(folderPath)
        ? folderPath
        : Path.Combine(_appDirectoryLocation, folderPath);

    string name = Path.GetFileName(path);
    string coverPath = Path.Combine(path, "cover.png");
    string img = FileHelper.LoadImage(coverPath);

    var files = Directory.GetFiles(path);
    var songs = new List<Song>();

    foreach (var songFile in files)
    {
        if (!songFile.Equals(coverPath, StringComparison.OrdinalIgnoreCase))
        {
            string songName = Path.GetFileNameWithoutExtension(songFile);
            var song = new Song { SongName = songName };
            if (getSongData)
                song.SongData = FileHelper.LoadAudio(songFile);

            songs.Add(song);
        }
    }

    return new FolderInfo
    {
        FolderName = name,
        FolderPath = path,
        CoverImg = img,
        NumberOfSongs = songs.Count,
        Songs = songs
    };
}


}