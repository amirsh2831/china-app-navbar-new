import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import VideoChannel from "./components/videoChannel/VideoChannel";
import { useState } from "react";
function App() {
  const [lockScroll, setLockScroll] = useState(false);

  return (
    <>
      <main>
        <Navbar />
        <VideoChannel lockScroll={lockScroll} setLockScroll={setLockScroll} />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        . <br />
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default App;
