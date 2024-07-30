import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = ({setId}) => {
    const [products, setProducts] = useState([])
    const[deleteData,setDeleteData]=useState([])
    const navigate=useNavigate()
    useEffect(() => {
        fetchData();
    }, [deleteData])
    const fetchData = async () => {
        await axios.get('https://66a7e08a53c13f22a3d1569d.mockapi.io/api/products')
            .then(res => setProducts(res.data))
            .catch((err) => { console.log(err); })
    }
    const handleEdit=(id)=>{
        setId(id)
        navigate(`/edit/${id}`)

    }
    const handleDelete=async(id)=>{
        await axios.delete(`https://66a7e08a53c13f22a3d1569d.mockapi.io/api/products/${id}`)
        .then(res=>setDeleteData(res.data))
        .catch((err)=>console.log(err))

    }
    return (
        <div>
            <div className='container' style={{display:'flex',flexDirection:'column',width:'500%',margin:'50px 100px 50px 100px',backgroundColor:'whitesmoke',borderRadius:'5px',justifyContent:'center',padding:'30px'}}>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Num</th>
                        <th scope="col" style={{paddingLeft:'5%'}}>ProductID</th>
                        <th scope="col"style={{paddingLeft:'4%'}}>ProductName</th>
                        <th scope="col" style={{paddingLeft:'3%'}}>ProductPrice</th>
                        <th scope="col"style={{paddingLeft:'2%'}}>Productdescription</th>
                        <th scope="col" style={{paddingLeft:'5%'}}>Edit</th>
                        <th scope="col" style={{paddingLeft:'2%'}}>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => {
                        return (
                            <>
                                <tr key={index}>
                                    <th scope="row" style={{backgroundColor:'#00FFFF'}}>{item.id}</th>
                                    <td style={{backgroundColor:'#FF00FF'}}>{item.product_id}</td>
                                    <td style={{backgroundColor:'#008080'}}>{item.product_name}</td>
                                    <td style={{backgroundColor:'#0000FF'}}>{item.product_price}</td>
                                    <td style={{backgroundColor:'#000080',width:'15%'}}>{item.product_description}</td>
                                    <td style={{}}><button style={{backgroundColor:'green',width:'100px',marginLeft:'20%'}}onClick={()=>{handleEdit(item.id)}}>Edit</button></td>
                                    <td style={{}}><button style={{backgroundColor:'red',width:'100px',}}onClick={()=>{handleDelete(item.id)}}>delete</button></td>
                                </tr>
                            </>
                        )
                    })}


                </tbody>
            </table>
            <button style={{marginLeft:'30%',width:'10%',color:'red',}}onClick={()=>{navigate('/create')}}>Create</button>
                
            </div>
           
        </div>
    );
};

export default Products;