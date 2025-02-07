
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
