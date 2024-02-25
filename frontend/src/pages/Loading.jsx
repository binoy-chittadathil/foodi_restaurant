import React from 'react'

function Loading() {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <span className="loading loading-bars loading-xs text-green"></span>
            <span className="loading loading-bars loading-sm text-green"></span>
            <span className="loading loading-bars loading-md text-green"></span>
            <span className="loading loading-bars loading-lg text-green"></span>
        </div>
    )
}

export default Loading