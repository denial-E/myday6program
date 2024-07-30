import axios from 'axios';
import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate=useNavigate()
    const[createData, setCreateData]=useState({
        product_id:'',
        product_name:'',
        product_price:'',
        product_description:''
    })
    const handleChange=(e)=>{
        const{name, value}= e.target
        setCreateData((preData)=>({
            ...preData,[name]:value
        }))

    }
    const handleFormSubmit=async(e)=>{
        e.preventDefault()
        await axios.post(`https://66a7e08a53c13f22a3d1569d.mockapi.io/api/products`,createData)
        .then(res=>console.log(res.data))
        .catch((err)=>console.log(err))
        navigate('/products')

    }
    return (
        <div className='box'>
             <form  style={{width:'400px',margin:'50px 50px 50px 50px',backgroundColor:'whitesmoke',borderRadius:'5px',justifyContent:'center',padding:'30px',marginLeft:'40%'}}   onSubmit={handleFormSubmit}>
                <h1 style={{textAlign:'center',color:'green'}}>Products</h1>
                <label>productId:<input style={{display:'flex',flexDirection:'column',marginBottom:'15px',width:'180%'}} type='text' name='product_id' value={createData.product_id} onChange={handleChange}/></label><br/>
                <label>product Name:<input style={{display:'flex',flexDirection:'column',marginBottom:'15px',width:'180%'}} type='text' name='product_name' value={createData.product_name} onChange={handleChange}/></label><br/>
                <label>product price:<input style={{display:'flex',flexDirection:'column',marginBottom:'15px',width:'180%'}} type='text' name='product_price' value={createData.product_price} onChange={handleChange}/></label><br/>
                <label>product description:<input style={{display:'flex',flexDirection:'column',marginBottom:'15px',width:'180%'}} type='text' name='product_description' value={createData.product_description} onChange={handleChange}/></label><br/>
                <button style={{marginLeft:'40%',marginTop:'5%',width:'100px'}} type='submit'>Create</button>
            </form>
        </div>
    );
};

export default Create;