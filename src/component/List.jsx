import React from 'react'
import { items } from '../data'
import { motion } from "motion/react";

const Card = ({setSelected, item}) => {
    return <div className='inline-block w-full mb-4'>
        <motion.img
        whileHover={{
            scale : 1.025,
            transition : {
                duration : 0.2,
            }
        }}
        whileTap={{
            scale : 0.95,
        }}
        layoutId={`card-${item.id}`}
        onClick={() => {
            setSelected(item)
        }}
        className='w-full bg-base-100 shadow-xl image-full cursor-pointer'
        src={item.url} />
        <div className='flex flex-wrap mt-2 gap-4 mb-2 '>
            {item.tags.map(tag => (
                <div className='bg-zinc-200 text-zinc-600 px-3 py-1 rounded-[25px]' key={tag}>{tag}</div>
            ))}
        </div>
    </div>
}

function List({setSelected}) {
  return (
    <div className='p-4'>
        <h1 className='text-center font-bold text-4xl mb-8'>Your Images</h1>
        <div className='columns-2 md:columns-3 xl:columns-4 gap-4'>
            {items.map(item => <Card key={item.id} setSelected = {setSelected} item={item} />)}
        </div>
    </div>
  )
}

export default List
