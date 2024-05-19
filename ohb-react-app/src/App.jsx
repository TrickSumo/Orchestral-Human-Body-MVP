import { useEffect, useState } from "react";
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
import themes from "./utils/Constants";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [isSCServerBooted, setIsSCServerBooted] = useState(false);

  const [selectedTheme, setSelectedTheme] = useState("heavenlyEssense");
  const [view, setView] = useState({ current: "home", previous: "home" });
  const [learnMoreTheme, setLearnMoreTheme] = useState("heavenlyEssense");
  const [selectedEvent, setSelectedEvent] = useState({
    name: "Working - Home Office",
    iconName: "WorkingIcon",
    time: "5/22/2024 10:49 AM - 5/22/2024 14:48 AM",
  });

  console.log("effect", themes?.[selectedTheme]?.["events"][0]);
  useEffect(() => {
    setSelectedEvent(themes?.[selectedTheme]?.["events"][0] || {});
  }, [selectedTheme]);

  function getCurrentView(view) {
    switch (view.current) {
      case "home":
        return (
          <Home
            key={view.current}
            setView={setView}
            selectedTheme={selectedTheme}
            selectedEvent={selectedEvent}
            setSelectedEvent={setSelectedEvent}
          />
        );
      case "themeSelection":
        return (
          <ThemeSelection
            key={view.current}
            view={view}
            setView={setView}
            selectedTheme={selectedTheme}
            setSelectedTheme={setSelectedTheme}
            setLearnMoreTheme={setLearnMoreTheme}
          />
        );
      case "themeDescription":
        return (
          <ThemeDescription
            key={view.current}
            setView={setView}
            learnMoreTheme={learnMoreTheme}
          />
        );
      default:
        return (
          <Home
            key={view.current}
            setView={setView}
            selectedTheme={selectedTheme}
          />
        ); // It's good practice to handle the default case
    }
  }

  // return (
  //   <div className="root-container">
  //     <AnimatePresence mode="wait"> {getCurrentView(view)} </AnimatePresence>
  //   </div>
  // );

  return isSCServerBooted ? (
    <div className="root-container">
      <AnimatePresence mode="wait"> {getCurrentView(view)} </AnimatePresence>
    </div>
  ) : (
    <BootMenu setIsSCServerBooted={setIsSCServerBooted} />
  );
}

export default App;
