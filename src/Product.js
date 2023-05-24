import React, { useContext, useReducer } from 'react';
import { Link } from 'react-router-dom';
import styles from './Product.module.css';
import { CounterContext } from './Contexts/CounterContextProvider';
import { TotalContext } from './Contexts/TotalContextProvider';
const Product = ({productData}) => {
    const {num, setNum} = useContext(CounterContext);
    const {total, setTotal} = useContext(TotalContext);
    const add = () =>{
        productData.number += 1;
        setNum(num + 1);
        setTotal(total + productData.price);
    }
    const remove = () =>{
        if(productData.number > 0){
            productData.number -= 1;
            setNum(num - 1);
            setTotal(total - productData.price);
        }
    }
    return (
        <div className={styles.container}>
            <Link style={{textDecoration:"none"}} to={`/products/${productData.id}`}>
                <img className={styles.image} src={productData.image} />
            </Link>
            <Link style={{textDecoration:"none"}} to={`/products/${productData.id}`}>
                <div className={styles.name}>{productData.title}</div>
            </Link>
            <div className={styles.flexDiv}></div>
            <div className={styles.contentContainer}>
                <div className={styles.price}>{productData.price}$</div>
                <button onClick={add} className={styles.add}>+</button>
                {/* <div className={styles.number}>{productData.number}</div> */}
                <button onClick={remove} className={styles.delete}>-</button>
            </div>
        </div>
    );
};

export default Product;