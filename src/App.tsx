import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import IPhone14Pro6 from "./pages/IPhone14Pro6";
import FrameComponent from "./pages/FrameComponent";
import IPhone14Pro27 from "./pages/IPhone14Pro27";
import IPhone14Pro25 from "./pages/IPhone14Pro25";
import IPhone14Pro26 from "./pages/IPhone14Pro26";
import IPhone14Pro24 from "./pages/IPhone14Pro24";
import IPhone14Pro23 from "./pages/IPhone14Pro23";
import IPhone14Pro22 from "./pages/IPhone14Pro22";
import IPhone14Pro21 from "./pages/IPhone14Pro21";
import IPhone14Pro20 from "./pages/IPhone14Pro20";
import IPhone14Pro19 from "./pages/IPhone14Pro19";
import IPhone14Pro18 from "./pages/IPhone14Pro18";
import IPhone14Pro17 from "./pages/IPhone14Pro17";
import IPhone14Pro16 from "./pages/IPhone14Pro16";
import IPhone14Pro15 from "./pages/IPhone14Pro15";
import IPhone14Pro14 from "./pages/IPhone14Pro14";
import IPhone14Pro13 from "./pages/IPhone14Pro13";
import IPhone14Pro12 from "./pages/IPhone14Pro12";
import IPhone14Pro11 from "./pages/IPhone14Pro11";
import IPhone14Pro10 from "./pages/IPhone14Pro10";
import IPhone14Pro5 from "./pages/IPhone14Pro5";
import IPhone14Pro4 from "./pages/IPhone14Pro4";
import IPhone14Pro3 from "./pages/IPhone14Pro3";
import IPhone14Pro2 from "./pages/IPhone14Pro2";
import IPhone14Pro1 from "./pages/IPhone14Pro1";
import FrameComponent1 from "./pages/FrameComponent1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-18":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-27":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-41":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-42":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-43":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-23":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-22":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-21":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-20":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-19":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-18":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-17":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-16":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-15":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-14":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-13":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-12":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-11":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-10":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-5":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-4":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-3":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-2":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-1":
        title = "";
        metaDescription = "";
        break;
      case "/frame-13":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<IPhone14Pro6 />} />

      <Route path="/frame-18" element={<FrameComponent />} />

      <Route path="/iphone-14-pro-27" element={<IPhone14Pro27 />} />

      <Route path="/iphone-14-pro-41" element={<IPhone14Pro25 />} />

      <Route path="/iphone-14-pro-42" element={<IPhone14Pro26 />} />

      <Route path="/iphone-14-pro-43" element={<IPhone14Pro24 />} />

      <Route path="/iphone-14-pro-23" element={<IPhone14Pro23 />} />

      <Route path="/iphone-14-pro-22" element={<IPhone14Pro22 />} />

      <Route path="/iphone-14-pro-21" element={<IPhone14Pro21 />} />

      <Route path="/iphone-14-pro-20" element={<IPhone14Pro20 />} />

      <Route path="/iphone-14-pro-19" element={<IPhone14Pro19 />} />

      <Route path="/iphone-14-pro-18" element={<IPhone14Pro18 />} />

      <Route path="/iphone-14-pro-17" element={<IPhone14Pro17 />} />

      <Route path="/iphone-14-pro-16" element={<IPhone14Pro16 />} />

      <Route path="/iphone-14-pro-15" element={<IPhone14Pro15 />} />

      <Route path="/iphone-14-pro-14" element={<IPhone14Pro14 />} />

      <Route path="/iphone-14-pro-13" element={<IPhone14Pro13 />} />

      <Route path="/iphone-14-pro-12" element={<IPhone14Pro12 />} />

      <Route path="/iphone-14-pro-11" element={<IPhone14Pro11 />} />

      <Route path="/iphone-14-pro-10" element={<IPhone14Pro10 />} />

      <Route path="/iphone-14-pro-5" element={<IPhone14Pro5 />} />

      <Route path="/iphone-14-pro-4" element={<IPhone14Pro4 />} />

      <Route path="/iphone-14-pro-3" element={<IPhone14Pro3 />} />

      <Route path="/iphone-14-pro-2" element={<IPhone14Pro2 />} />

      <Route path="/iphone-14-pro-1" element={<IPhone14Pro1 />} />

      <Route path="/frame-13" element={<FrameComponent1 />} />
    </Routes>
  );
}
export default App;
