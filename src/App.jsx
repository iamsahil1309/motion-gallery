import { useEffect, useState } from "react"
import Navbar from "./component/Navbar"
import List from "./component/List"
import Modal from "./component/Modal";
import Lenis from "lenis"


function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  })
  const [selected ,setSelected] = useState(null)
  return (
    <>
      <Navbar />
      <List setSelected= {setSelected} />
      <Modal selected = {selected} setSelected = {setSelected}/>
    </>
  );
}

export default App
