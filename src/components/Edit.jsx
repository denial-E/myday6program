import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Edit = ({id}) => {
    const navigate=useNavigate()
    const[editData, setEditData]=useState({
        product_id:'',
        product_name:'',
        product_price:'',
        product_description:''
    })
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{
        await axios.get(`https://66a7e08a53c13f22a3d1569d.mockapi.io/api/products/${id}`)
        .then(res=>setEditData(res.data))
        .catch((err)=>console.log(err))
    }
    const handleChange=(e)=>{
        const{name, value}= e.target
        setEditData((preData)=>({
            ...preData,[name]:value
        }))

    }
    const handleFormSubmit=async(e)=>{
        e.preventDefault()
        await axios.put(`https://66a7e08a53c13f22a3d1569d.mockapi.io/api/products/${id}`,editData)
        .then(res=>console.log(res.data))
        .catch((err)=>console.log(err))
        navigate('/products')

    }
    return (
        <div>
            <form style={{width:'400px',margin:'50px 50px 50px 50px',backgroundColor:'whitesmoke',borderRadius:'5px',justifyContent:'center',padding:'30px',marginLeft:'40%'}}   onSubmit={handleFormSubmit}>
            <h3 style={{textAlign:'center',color:'#FF00FF',paddingBottom:'20px'}}>Product Edit</h3>
                <label>productId:<input style={{display:'flex',flexDirection:'column',marginBottom:'15px',width:'180%'}} type='text' name='product_id' value={editData.product_id} onChange={handleChange}/></label><br/>
                <label>product Name:<input style={{display:'flex',flexDirection:'column',marginBottom:'15px',width:'180%'}} type='text' name='product_name' value={editData.product_name} onChange={handleChange}/></label><br/>
                <label>product price:<input style={{display:'flex',flexDirection:'column',marginBottom:'15px',width:'180%'}} type='text' name='product_price' value={editData.product_price} onChange={handleChange}/></label><br/>
                <label>product description:<input style={{display:'flex',flexDirection:'column',marginBottom:'15px',width:'180%'}} type='text' name='product_description' value={editData.product_description} onChange={handleChange}/></label><br/>
                <button style={{margin:'10px 5px 10px 35%',width:'30%',borderRadius:'5px',cursor:'pointer',backgroundColor:'#800080',color:'#FFFFFF',paddingBottom:'2px'}} type='submit'>update</button>
            </form>
        </div>
    );
};

export default Edit;