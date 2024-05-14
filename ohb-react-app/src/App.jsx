import { useState } from "react";
import "./App.css";
import { synthDefBlobHeavenly } from "./utils/synthDefs";
import Home from "./screens/Home";
import ThemeSelection from "./screens/ThemeSelection";
import ocbLogo from "./assets/orc_logo_transparent.png";
import BootMenu from "./screens/BootMenu";
import About from "./screens/About";
import Contact from "./screens/Contact";

import { AnimatePresence } from "framer-motion";
import ThemeDescription from "./screens/ThemeDescription";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [isSCServerBooted, setIsSCServerBooted] = useState(false);

  const [selectedTheme, setSelectedTheme] = useState("heavenlyEssense");
  const [view, setView] = useState("home");
  const [learnMoreTheme, setLearnMoreTheme] = useState("heavenlyEssense");

  // return (
  //   <>
  //     <button
  //       onClick={() => {
  //         setView(!view);
  //       }}
  //     >
  //       test
  //     </button>
  //     <AnimatePresence>{view ? <About /> : <Contact />}</AnimatePresence>
  //   </>
  // );

  //   themeSelected =
  // view =

  // return sitc (view){

  // }
  // return <Home />;

  function getCurrentView(view) {
    switch (view) {
      case "home":
        return <Home key={view} setView={setView} />;
      case "themeSelection":
        return (
          <ThemeSelection
            key={view}
            setView={setView}
            selectedTheme={selectedTheme}
            setSelectedTheme={setSelectedTheme}
            setLearnMoreTheme={setLearnMoreTheme}
          />
        );
      case "themeDescription":
        return (
          <ThemeDescription
            key={view}
            setView={setView}
            learnMoreTheme={learnMoreTheme}
          />
        );
      case "contact":
        return <Contact key={view} />;
      default:
        return <Home key={view} setView={setView} />; // It's good practice to handle the default case
    }
  }

  return (
    <div className="ttt-container">
      <AnimatePresence mode="wait"> {getCurrentView(view)} </AnimatePresence>
    </div>
  );
  return isSCServerBooted ? (
    <>{getCurrentView(view)}</>
  ) : (
    <BootMenu setIsSCServerBooted={setIsSCServerBooted} />
  );
}

export default App;
