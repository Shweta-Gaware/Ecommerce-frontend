import React, { useContext } from 'react';
import "./CSS/ShopCategory.css";
import { ShopContext } from '../context/ShopContext';
import Item from "../components/Items/Item"
import dropdown_icon from "../components/Assets/dropdown_icon.png"

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-catogory'>
    <div className="Banner">
    <div className="Banner-left">
      <h1>FLAT 50% OFF</h1>
    <p>12 Hours 20 Mins</p>
    <button>Explore Now</button>
    </div>
    <div className="Banner-right">
    <img className='shopcategory-banner' src={props.banner} style={{width:'100%', height:'100%', background:"linear-gradient(100deg, orange 10%, white 100% )"}} alt="" />
    </div>
    </div>
    <div className="shopcatoegory-indexSort">
<p>
  <span>Showing 1-12 </span> out of 36 products
</p>
 
<div className="shopcategory-sort">
Sort by<img src={dropdown_icon} style={{width:"20px"}}  alt="" />
</div>
    </div>
    <div className="shopcategory-products">

      {all_product.map((item,i) =>{
        if(props.category === item.category){
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        }
        else{
          return null;
        }
      })}
      </div>
      <div className="shopcategory-loadmore">
           Explore More
      </div>
    
    </div>
  )
}

export default ShopCategory