import React, { useEffect,useState } from "react";
import { add } from "../Redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { fetchproducts } from "../Redux/ProductSlice";





const Home = () => {
    //const [product,setproduct]= useState([]);
     const {data:product,status}= useSelector((state)=>state.Product)
     const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
      ///first method
      /*  const productFetch = async()=>{
            const res =await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
           const product= setproduct(data);
        }
      /  productFetch();  */
        ///second method
      /*fetch('https://fakestoreapi.com/products')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setproduct(data);
        setIsLoading(false);
      });*/
///third method
      dispatch(fetchproducts())
      setIsLoading(false);
    },[]);



    const hanleAdd=(p)=>{
      dispatch(add(p))
    }

    if (isLoading) {

      return <Loading />;

    }

    return (
        <>
        
          <div className="container mx-auto mt-20" >
          <div className="grid grid-cols-4 gap-4 w-100" >
          {product.map((item)=>(
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col" key={item.id}>
                  <a href="#">
                      <img className="rounded-t-lg  max-h-[100px] mx-auto"  src={item.image} alt="" />
                  </a>
                  <div className="p-5 ">
                      <a href="#">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate "> {item.title}</h5>
                      </a>
                      <p>{item.price}</p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                      <button onClick={()=>hanleAdd(item)}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
                          Add to Cart
                         
                      </button>
                  </div>
                  
              </div> ))  }
          </div>
      </div> 
     

            
        </>

    )
}

export default Home;