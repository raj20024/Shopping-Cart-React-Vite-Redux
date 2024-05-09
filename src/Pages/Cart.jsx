import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/CartSlice";




const Cart = () => {
const items =useSelector((state)=>state.Cart);
const num =items.length;
const dispatch=useDispatch()

const handleClick=(id)=>{
dispatch(remove(id))
}
    return (
    <>
        
 <div className="container mt-20 mx-auto grid grid-cols-4 gap-4">  
 <div className="col-span-3 ">
    <div className="grid grid-cols-1 gap-4">
   {num===0 ? <h1>No Data</h1>:'' }
  
 {items.map((pro)=>{
     if (pro.id === 0) {
        console.log(pro);
        
      }
   return <div className="   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  flex flex-row m-2" key={pro.id}>
    <div className="flex flex-row w-full items-center justify-between p-10 ">
        <img className="w-24 h-24  rounded-full shadow-lg" src={pro.image} alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{pro.price}</h5>
        
        <div className=" md:mt-6">
           
            <button onClick={()=>handleClick(pro.id)} className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Delete</button>
        </div>
    </div>
    </div>
 }
    )
    
    }
    </div>
  </div><div></div>


</div>     

        </>

    )
}
export default Cart;