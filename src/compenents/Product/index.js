import React from 'react';
import './product.css';
import { useStateValue } from '../../StateProvider';

function Product({id, title, image, price, rating}) {

    const [{basket}, dispatch] = useStateValue();


    console.log('Энд захиалсан барааны тоо орж ирж байна ===>', basket);

    const addToBasket = () => {
        //Dispatch ашиглан элементийг мэдээллийн давхрагад нэмэх
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'><strong><small>$</small>{price}</strong></p>
                <div className='product__rating'>
                    {Array(rating).fill().map((_, i)=>(
                        <p>🌟</p>
                    ))}
                </div>
            </div>
            <img src={image} alt=''/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
