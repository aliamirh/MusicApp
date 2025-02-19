import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home.tsx";
import AlbumDetails from "./components/Pages/AlbumDetails/AlbumDetails.tsx";
import BottomPlayer from "./components/BottomPlayer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album-details" element={<AlbumDetails />} />
        </Routes>
      </BrowserRouter>
      <BottomPlayer />
    </Provider>
  </StrictMode>
);
