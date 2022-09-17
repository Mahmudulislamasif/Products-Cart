import React from 'react';
import { BsCartPlusFill } from 'react-icons/bs';

const Product = ({product,handleCart}) => {
    const {id,image,name,color,price,quantity}=product;
    return (
    
              <tr key={id}>
                   <th className="bg-slate-100"><img class="w-16 h-20" src={image} alt="" /></th>
                   <td className="bg-slate-100">{name}</td>
                   <td className="bg-slate-100">{color}</td>
                   <td className="bg-slate-100">{price}</td>
                   <td className="bg-slate-100">
                      <div className="flex items-center">
                        <h1 className="bg-slate-300 w-10 h-9 flex justify-center items-center">{quantity}</h1>
                        <BsCartPlusFill className="text-4xl ml-3 bg-black text-white p-2"/>
                      </div>
                   </td>
                   <td>
                    <input type="checkbox" onClick={()=>handleCart(product)} />
                    
                   </td>
                   </tr>
        
    );
};

export default Product;