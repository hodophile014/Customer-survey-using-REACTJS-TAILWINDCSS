import React from 'react'

function Loading() {
    const style={
        backgroundImage: `url('https://cdn.dribbble.com/users/591610/screenshots/3861704/media/3dffbbb905a6432f6fdae29750d33850.gif')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    height: '100vh', 
    width: '100%',
    }
  return (
    <div className='flex justify-center items-center h-screen'>
     <div className='flex h-4/5 w-4/5  justify-center items-center' style={style}>
     <h1 className='text-center mt-20 text-2xl'>LOADING....</h1>
     </div>
    </div>
  )
}

export default Loading
