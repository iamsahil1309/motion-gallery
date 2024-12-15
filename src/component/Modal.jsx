import React from 'react'
import { motion } from "motion/react";

function Modal({selected, setSelected}) {
    if(!selected) {
        return <></>
    }
  return (
    <div
      onClick={() => setSelected(null)}
      className="fixed inset-0 bg-black/50 z-50 cursor-pointer overflow-y-scroll"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[700px] mx-auto my-8 px-8 cursor-default"
      >
        <motion.div layoutId={`card-${selected.id}`}>
          <img src={selected.url} />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="bg-white p-4"
        >
          <h3 className="text-2xl mb-2 font-bold">{selected.title}</h3>
          {selected.tags.map((tag) => (
            <div
              className="bg-zinc-200 inline-block mr-2 text-zinc-600 px-3 py-1 rounded-[25px]"
              key={tag}
            >
              {tag}
            </div>
          ))}
          <p className="my-4">{selected.description}</p>
          <button className="bg-black text-white text-center w-full py-3">
            Download
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Modal
