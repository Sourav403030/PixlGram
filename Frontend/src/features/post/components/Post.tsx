import React from 'react'

const Post = () => {
  return (
    <div className='p-10 flex flex-col gap-4'>
        <div className="top flex items-center gap-3">
            <div className='w-16 h-16 bg-conic from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full'>
                <img className=' w-full h-full rounded-full object-cover object-center p-1' src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1366&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <h2 className='text-white text-lg'>Username</h2>
        </div>
        <div className="middle">
            <div className='h-150 w-full bg-red-400'>
                <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1771680968896-cfd9b8f7244e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </div>
        <div className="bottom flex flex-col gap-3">
            <div className='icons flex justify-between'>
                <div className="left flex gap-3">
                    <button><i className="ri-heart-line text-white text-3xl"></i></button>
                    <button><i className="ri-chat-1-line text-white text-3xl"></i></button>
                    <button><i className="ri-share-forward-line text-white text-3xl"></i></button>
                </div>
                <div className="right">
                    <button><i className="ri-bookmark-line text-white text-3xl"></i></button>
                </div>
            </div>
            <div className='description'>
                <p className='text-white font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, facilis necessitatibus pariatur neque itaque nostrum, eligendi sint dolorem dolore vel ratione?</p>
            </div>
        </div>
    </div>
  )
}

export default Post