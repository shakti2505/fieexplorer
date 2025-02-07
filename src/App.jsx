import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FileExplorer from "./components/FileExplorer";
import { explorer } from "./data/folderData";
import FileData from "./components/FileData";

function App() {

  return (
    <>
      <div className="main-container">
        <FileExplorer explorer={explorer}key={explorer.id}  />
        <FileData/>
      </div>
    </>
  );
}

export default App;
