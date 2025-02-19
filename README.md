# Music App

A cross-platform music app built with a React front-end, Dotnet (C#) back-end, and packaged together using Photino. The app currently allows users to browse and view local music files and albums.

### Features

- **Cross-Platform Support**: Fully functional on Linux, Windows, and macOS.
- **Local File Browsing**: Fetches album and track data from local files in the app's directory.

### Tech Stack

- **Frontend**: React.js
- **Backend**: C# (.NET)
- **Packaging**: Photino for creating cross-platform desktop apps.

### Installation

At this stage of development, the app must be compiled manually. Before proceeding, make sure you have installed the [Dotnet 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) as well as the [Node JS LTS](https://nodejs.org/en/download)

1.  Clone the repository: `git clone https://github.com/aliamirh/MusicApp.git`
2.  Navigate to the `MusicApp.Photino` directory, and run the command: `dotnet restore`
3.  Launch the app using `dotnet watch run`
4.  To run the React app directly in the browser, navigate to the `MusicApp.React` folder, install dependencies using `npm install`, and run the app using the command `npm run dev`

### Known Issues

- **Incomplete File Fetching**: The backend currently only reads basic metadata from the local music files. More complex functionality, like song metadata and cover images, is planned for future updates.
- **Desktop App Configuration Fetching**: Certain desktop app environments have errors when fetching local files.

### Future Plans

- **Online Radio Support**: Browse and listen to online radio stations or open music libraries.
- **Companion Mobile App**: Real-time connection with a companion mobile app for remote control and interaction.
- **Song and Album Metadata Fetching**: Integration with music metadata APIs to fetch song/album details such as release date, artist bios, and cover art.
- **Work on desktop functionality**: Select and play music with desktop application.

### Contribution

If you'd like to contribute, feel free to fork the repository and submit pull requests. Please make sure your changes align with the coding style and include tests where possible.