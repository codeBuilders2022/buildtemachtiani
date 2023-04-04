import React from 'react'

const Button = ({title, onCLick}) => {
  return (
    <>
        <button className='group flex items-center rounded-full 
            bg-slate-100 px-4 py-2 text-sm font-medium 
            text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 
            ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 
            dark:text-zinc-200 dark:ring-white/10 
            dark:hover:ring-white/20
            hover:text-teal-500 dark:hover:text-teal-400'
            onClick={onCLick}
            >
                {title}
        </button>
    </>
  )
}

export default Button