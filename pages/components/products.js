import React, {useState, useEffect} from 'react';
import axios from 'axios'
import auth from '../api/auth';

function InsbyInit(){

    const [products, setProducts] = useState([]);
    const [url, setUrl] = useState([])

    useEffect(() => {
    
     auth()
    .then(function(response){
        let token = response.data.data.token
    
        axios.get("https://dev-mrp.insby.tech/api/session/restaurant/menu", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(function(resp){
            setProducts(resp.data.data)      
            setUrl("https://files.insby.tech/tap-dev-4/")
        })         
 
    })  
}, [])
        

    return(
       
       

            <div className="mainHeading">
                <ul>
                {products.map(product => (
                    <li key={product.category_id}>
                        
                        <h2>
                            {product.category_name}
                        </h2>
                        
                        {product.items.map(item => (

                        <div className="product" key={item.product_variant_id}>
                            
                            <img src={url + item.product_variant_image_url} alt='' />
                            <p className="productName">{item.product_variant_name}</p>
                            <p className='productPrice'> {item.product_variant_price != null ? item.product_variant_price.display_price : ''}</p>
                            
                            
                        </div>


                        ))}
                        
                    
                    </li>
                    
                ))}
                </ul>
            </div>
           
        
    )
}

export default InsbyInit