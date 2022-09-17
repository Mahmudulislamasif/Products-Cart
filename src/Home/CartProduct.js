import React from 'react';

const CartProduct = ({item}) => {
    const { name, image,color,price } = item;
    return (
        
            <tr>
            <th></th>
            <td>
                <img className="w-16 h-20" src={image} alt='' />
            </td>
            <td>{name}</td>
            <td>{color}</td>
            <td>{price}</td>
            </tr>
        
    );
};

export default CartProduct;