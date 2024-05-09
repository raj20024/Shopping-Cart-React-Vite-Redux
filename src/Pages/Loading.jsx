import React from 'react';

function Loading() {
    return (
        <div className='w-full h-screen flex items-center justify-center relative z-40'>
        <button type="button" className="bg-indigo-500 mt-50" >
  <svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24">
  
  </svg>
  Processing...
</button></div>
    );
}
export default Loading;