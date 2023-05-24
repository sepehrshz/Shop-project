import React, {useContext, useState} from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchData } from './api';
import { ProductContext } from './Contexts/ProductContextProvider';
import styles from './Detail.module.css';
import arrow from './Images/arrow.png';
import arrow2 from './Images/arrow2.png';
const Detail = () => {
    const {id} = useParams();
    // const data = useContext(ProductContext);
    const [data, setData] = useState('');
    const [height, setHeight] = useState('');
    useEffect(() => {
        const h = window.innerHeight - 20;
        setHeight(h + "px");
    }, []);
    useEffect(() => {
        const fetchDataFromApi = async() => {
            const apiData = await fetchData();
            setData(apiData[id - 1]);
        }
        fetchDataFromApi();
    }, []);
    return (
        <div style={{height:`${height}`,display: "flex", justifyContent: "center", alignItems: "center"}}><div className={styles.container}>
            <div className={styles.imgcnt}>
                <img className={styles.image} src={data.image}/>
            </div>
            <div>
                <div className={styles.contentContainer}>
                    <h3 className={styles.name}>{data.title}</h3>
                    <div className={styles.detail}>{data.description}</div>
                </div>
                <div style={{display: "flex"}}>
                    <div className={styles.price}>{data.price}$</div>
                    <Link style={{textDecoration: "none"}} to="/products">
                    <div className={styles.btn}>Exit
                        <img className={styles.arrow2} src={arrow2}/>
                        <img className={styles.arrow} src={arrow}/>
                    </div>
                    </Link>
                </div>
            </div>
        </div></div>
    );
};

export default Detail;