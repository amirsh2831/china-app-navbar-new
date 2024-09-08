import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import VideoChannel from "./components/videoChannel/VideoChannel";
import { useState } from "react";
function App() {
  return (
    <>
      <Navbar />
      <VideoChannel />

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
