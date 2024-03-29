import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Fruitcontext from "../context/Fruitcontext";
import { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";
import SPcard from "../components/SPcard";

function Products() {
  const a = useContext(Fruitcontext);
  const [count, setc] = useState(0);
  const [formdata, setfd] = useState({ fruit: false, vegetable: false });

  useEffect(() => {
    if (a.product_list.length > 0) {
    } else {
      a.fetchData();
    }
  }, [a.s1, a.fi1, count]);

  const update = (ele) => {
    if (a.s1 === ele) {
    } else {
      a.sets1(ele);
      a.setpage(0);
      a.setproduct_list([]);
    }
  };
  const update1 = (ele) => {
    if (a.fi1 === ele) {
    } else {
      a.setfi1(ele);
      a.setpage(0);
      a.setproduct_list([]);
    }
  };

  const changeHandler = (event) => {
    update1(event.target.value);
  };
  const changeHandler1 = (event) => {
    // setc(count+1);
    const { name, checked } = event.target;
    setfd((prev) => {
      return { ...prev, [name]: checked };
    });
    const arr = a.category;
    if (checked) {
      arr.push(name);
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === name) {
          arr.splice(i, 1);
        }
      }
    }
    console.log(arr);
    a.setcat(arr);
    a.setpage(0);
    a.setproduct_list([]);
    setc(count + 1);
  };
  return (
    <div className="pt-28 lg:pt-40  bg-zinc-100">
      <div className="flex  ">
        <div
          style={{ minWidth: "200px" }}
          className="bg-zinc-800 text-white me-1  p-3 rounded hidden lg:block "
        >
          <h3 className="text-lg font-bold">Filters</h3>
          <div>
            <h5 className="">Category</h5>
            <ul className="ms-1 mt-2">
              <li className="flex">
                <input
                  onChange={changeHandler1}
                  name="fruit"
                  id="fruit"
                  type="checkbox"
                  checked={formdata.fruit}
                />
                <label className="ms-2" htmlFor="fruit">Fruits</label>
              </li>
              <li className="flex">
                <input
                className="p-0 m-0"
                  onChange={changeHandler1}
                  name="vegetable"
                  id="Vegetable"
                  type="checkbox"
                  checked={formdata.vegetable}
                />
                <label className="ms-2 " htmlFor="Vegetable">Vegetables</label>
              </li>
            </ul>
          </div>
          
          <div className="my-3">
            <h5 className="">Price</h5>
            <ul className="ms-1 mt-2" >
              <li className="flex " >
                <input
                  value={50}
                  onChange={changeHandler}
                  id="price1"
                  type="radio"
                  name="ch1"
                />
                <label className="ms-1"  htmlFor="price1">Below 50</label>
              </li>
              <li className="flex my-2" >
                <input
                  value={100}
                  onChange={changeHandler}
                  id="price2"
                  type="radio"
                  name="ch1"
                />
                <label className="ms-1"  htmlFor="price2">Below 100</label>
              </li>
              <li className="flex my-2" >
                <input
                  value={200}
                  onChange={changeHandler}
                  id="price3"
                  type="radio"
                  name="ch1"
                />
                <label className="ms-1"  htmlFor="price3">Below 200</label>
              </li>
              <li className="flex my-2" >
                <input
                  value={300}
                  onChange={changeHandler}
                  id="price4"
                  type="radio"
                  name="ch1"
                />
                <label className="ms-1"  htmlFor="price4">Below 300</label>
              </li>
              <li className="flex my-2">
                <input
                  value={10000000}
                  onChange={changeHandler}
                  id="price5"
                  type="radio"
                  name="ch1"
                />
                <label className="ms-1" htmlFor="price5">All Items</label>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="">Availability</h5>
            <ul className="ms-1 mt-2">
              <li className="flex">
                <input
                  name=""
                  id=""
                  type="checkbox"
                  checked={false}
                />
                <label className="ms-2" htmlFor="">Include Out Of Stock</label>
              </li>
             
            </ul>
          </div>

        </div>
        
        
        <div className="text-white grow">
          <div className="flex justify-between items-center px-2  bg-zinc-800  ">
            <h1 className=" text-2xl  font-bold p-2 ">
              Fresh Fruits
              <p
                className="text-xs lg:inline  lg:ms-2"
              >
                (showing 1-{a.product_list.length} items of {a.total_fruits})
              </p>
            </h1>
            <div className="float-right  inline text-black">
              <select
                className="rounded"
              >
                <option value="inline">Sort By</option>
                <option onClick={() => {
                    update("amount");
                  }}  value="">Price(Lowest)</option>
                   <option onClick={() => {
                    update("-amount");
                  }}  value="">Price(Highest)</option>
                   <option  onClick={() => {
                    update("name");
                  }}
                    value="">A-z</option>
                   <option onClick={() => {
                    update("-name");
                  }}value="">Z-A</option>
              </select>

             
            </div>
          </div>
          <div>
            <InfiniteScroll
              dataLength={a.product_list.length} //This is important field to render the next data
              next={a.fetchData}
              hasMore={a.product_list.length < a.total_fruits}
              loader={<Spinner />}
              endMessage={
                <p className="text-center font-bold mt-2 p-3 bg-zinc-800 text-white">
                  You are done with all Products!!
                </p>
              }
            >
              <div className="">
                <div className="flex flex-wrap justify-around lg:justify-start ">
                  {a.product_list.map((product, index) => {
                    return (
                      <Product
                        key={index}
                        p_id={product._id}
                        name={product.name}
                        desc={""}
                        amount={product.amount}
                        image={product.image[0]}
                      />
                    );
                  })}
                </div>
              </div>
              {/* <div className="block lg:hidden">
                <div className="flex flex-wrap justify-around lg:justify-start ">
                  {a.product_list.map((product, index) => {
                    return (
                      <SPcard
                        key={index}
                        p_id={product._id}
                        name={product.name}
                        desc={""}
                        amount={product.amount}
                        image={product.image[0]}
                      />
                    );
                  })}
                </div>
              </div> */}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
