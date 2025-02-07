import React, { useEffect, useState } from "react";

const FileExplorer = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  const [inputValue, setInputvalue] = useState("");

  const handleInput = (val) => {
    setInputvalue(val);
  };

  // create new folder
  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  // add new folder
  const addNewFolder = (exp, isFolder) => {
    exp.items.push({
      id: 1,
      name: inputValue,
      isFolder: isFolder ? true : false,
      items: [],
    });
    setExpand(false);
    setInputvalue("");
    alert(isFolder ? "New folder added":"New file added")
    setExpand(true);
  };

  // remove folder
  const removeFolder = (exp) => {
    delete exp.name;
    delete exp.id;
    delete exp.isFolder;
    delete exp.items;
    alert("deleted");
    setExpand(false);
  };

  if (explorer.isFolder) {
    return (
      <div className="explorer-container">
        <div>
          <button onClick={(e) => removeFolder(explorer, showInput.isFolder)}>
            ❌
          </button>
          <span
            onClick={() => setExpand(!expand)}
            className="expandIcon"
            style={{ fontSize: "larger", font: "icon", fontFamily: "serif" }}
          >
            📂{explorer.name}
          </span>
        </div>
        <div style={{ gap: "4px" }}>
          <button className="btn" onClick={(e) => handleNewFolder(e, false)}>
            + File
          </button>
          <button className="btn" onClick={(e) => handleNewFolder(e, true)}>
            + folder
          </button>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="input-container">
              <span style={{ fontSize: 10 }}>
                {showInput.isFolder ? "📂" : "🗄️"}
              </span>
              <input
                onChange={(e) => handleInput(e.target.value)}
                value={inputValue}
                autoFocus
                type="text"
                className="input-container"
                placeholder={showInput.isFolder ? "Folder Name" : "File name"}
              />
              <button
                onClick={(e) => addNewFolder(explorer, showInput.isFolder)}
              >
                Add
              </button>
            </div>
          )}
          {explorer.items.map((item) => {
            return <FileExplorer explorer={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
        <>
        <div style={{display:"flex", flexDirection:'column'}}>
        <span className="file">🗄️{explorer.name}</span>
        </div>
        </>
    );
  }
};

export default FileExplorer;
