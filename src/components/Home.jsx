import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData=async()=>{
        await axios.get('https://66a7e08a53c13f22a3d1569d.mockapi.io/api/products')
        .then(res => setProducts(res.data))
        .catch((err)=>{ console.log(err);})
    }
    return (
        <div>
             <div className='container'>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                {products.map((item, index) => {
                    return (
                        <>
                            <div key={index}>
                                <div class="col" style={{width:'400px',margin:'50px 50px 50px 50px',backgroundColor:'whitesmoke',borderRadius:'5px',justifyContent:'center',padding:'30px'}}>
                                    <div class="card h-100">
                                        <img src={item.product_image} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title" style={{textAlign:'center'}}>{item.product_name}</h5>
                                            <h5 class="price" style={{textAlign:'center'}}>{item.product_price}</h5>
                                            <p class="card-text" style={{textAlign:'center'}}>{item.product_description}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </>
                    )
                })}

            </div>

             </div>
            
        </div>
    );
};

export default Home;