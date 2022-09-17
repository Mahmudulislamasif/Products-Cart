import { handler } from 'daisyui';
import React, { useEffect, useState } from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
import { GrPowerReset } from 'react-icons/gr';
import CartProduct from './CartProduct';
import Product from './Product';
const Products = () => {
    const [products,setProducts]=useState([])
    const [size,setSize]=useState("")
    const [value, setValue]=useState("")
    const [addInfo,setInfo]=useState([]);
    const [checkValue,setCheckValue]=useState(false)
    
    const [filter,setFilter]=useState(products)
    useEffect(()=>{
        fetch('Products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const filterClothes =(size)=>{
        const updateList=products.filter((x)=>x.size===size)
        setFilter(updateList)
     }
     const filterClothesCategory =(cat)=>{
        const updateList=products.filter((x)=>x.category===cat)
        setFilter(updateList)
     }
     const handleCart=(product)=>{
        const removeDuplicate=addInfo.filter((x)=>x.id!==product.id)
        const newCart=[...removeDuplicate,product]
        setInfo(newCart)
     }
    return (
        <div className="min-h-screen">
           
        <div className="py-2 ml-12 container text-left flex">
        <select className="select w-28 mr-4" name="" id=""  onChange={(e)=>{
             const selectSetSize=e.target.value;
             setSize(()=>filterClothesCategory(selectSetSize))
         }}>
             <option value="Hoddie">Hoddie</option>
             <option value="Tshirt">Tshirt</option>
        </select>
        
        
        <select name="" id=""  className="select w-28 mr-4"   onChange={(e)=>{
             const selectSetSize=e.target.value;
             setSize(()=>filterClothes(selectSetSize))
         }}>

             <option value="XXL">XXL</option>
             <option value="XL">XL</option>
             <option value="L">L</option>
             <option value="M">M</option>
         </select>
        
        
        <button class="btn btn-secondary" onClick={()=>setFilter(products)}><GrPowerReset className="mr-3 "/>Reset</button>

        <label for="my-modal" class="btn btn-secondary modal-button ml-3">Cart {addInfo.length}</label>


          
        </div>
        <div class="overflow-x-auto">
         
        <table class="table w-full container mx-auto">
            <thead>
            <tr>
                <th className="bg-cyan-400">Image</th>
                <th className="bg-cyan-400">Name</th>
                <th className="bg-cyan-400">Color</th>
                <th className="bg-cyan-400">Price</th>
                <th className="bg-cyan-400">Quantity</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {
                   filter.map((product)=> 
                   <Product key={product.id} product={product} handleCart={handleCart}></Product>)
                }
                  
            </tbody>
        </table>
        <div>
        <input type="checkbox" id="my-modal" class="modal-toggle" />
    <div class="modal">
    <div class="modal-box">
        
        <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Color</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        addInfo.map((item)=><CartProduct key={item.id} item={item}></CartProduct>)
                    }
                    </tbody>
                </table>
            </div>
       
        
        <div class="modal-action">
        <label for="my-modal" class="btn">Yay!</label>
        </div>
    </div>
    </div>
       
          
           
          </div>
        </div>
        </div>
    );
};

export default Products;