import React from "react";
import "./BootMenu.css";

const BootMenu = ({ setIsSCServerBooted }) => {
  const bootSCServer = () => {
    try {
      //Boot SC Server
      var args = Module["arguments"];
      args[args.indexOf("-o") + 1] = "2";
      console.log(args[args.indexOf("-o") + 1]);
      console.log("args are", args);
      console.log("booting");
      Module.callMain(args);

      //Load SynthDefs
      sendOSC_t("/d_recv", "b", synthDefBlobHeavenly);

      setIsSCServerBooted(true);
    } catch (e) {
      console.log("Failed To Boot SuperCollider Server! \n Error:- ", e);
    }
  };
  return (
    <div className="boot-menu-container" onClick={bootSCServer}>
      <p className="boot-text">TAP ANYWHERE TO START</p>
    </div>
  );
};

export default BootMenu;
