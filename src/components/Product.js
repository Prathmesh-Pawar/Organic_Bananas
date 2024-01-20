import React, { useState } from 'react'
import ob1 from "../images/placeholder.png"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Fruitcontext from '../context/Fruitcontext'
import { useContext } from 'react';
import { useEffect } from 'react';


import toast from 'react-hot-toast';


function Product(props) {
  const [url , seturl] = useState(null) ;
  const a = useContext(Fruitcontext) ;

  useEffect(()=>{
    console.log(props.image) ;
    if(props.image)
    {
      seturl(props.image) ;
    }
  },[]) ;


  return (
    <div className='my-3 mx-2 dp4'>
      <div className="">
    <div className=" card h-100">
  
      <Link to={`/fruits/${props.name}/${props.p_id}`} ><img src={url ? url : ob1} height={"300px"} className="card-img-top" alt="Not Available"  /></Link>

      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.desc.slice(0,10)} <small><a href="">read more</a></small> </p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Price : {props.amount}RS</small>
        <button onClick={()=> {a.addcart(props.p_id) ; toast.success("Itam Added To Cart" ,{duration:1000, iconTheme: {
    primary: '#000',
    secondary: '#fff',
  },
})}} className='btn btn-sm btn-warning border-black float-end '>Add To Cart</button>

      { props.title=="wishlist" ? <button onClick={()=> { a.deletewishlist(props.p_id) ; toast.success("Itam Removed From WishList" ,{duration:1000, iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
      });  }} className='btn btn-sm btn-warning border-black float-end me-1 '>-</button>
    :
    <button onClick={()=> {  a.addwishlist(props.p_id) ; toast.success("Itam Added To WishList" ,{duration:1000, iconTheme: {
      primary: '#000',
      secondary: '#fff',
    },
  })}} className='btn btn-sm btn-warning border-black float-end me-1 '>+</button>
    }

      </div>
 

    </div>
  </div>
    </div>
  )
}

export default Product




