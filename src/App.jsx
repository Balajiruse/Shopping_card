import './App.css';
 import { useState } from 'react';
function App(){
  const data=[
    {
    productImage:
    "https://i.ytimg.com/vi/sASG3iy5JwA/maxresdefault.jpg",
    productName:"Fancy Product",
    price:"$40.00 - $80.00",
  },
  {
    productImage:
    "https://www.shutterstock.com/image-photo/text-sign-showing-special-order-260nw-1969445062.jpg",
    productName:"Special Item",
    price:"$18.00",
  },
  {
    productImage:
    "https://www.foodlocale.in/wp-content/uploads/2022/11/food-1024x683.jpg",
    productName:"Popular Item",
    price:"$40.00",
  },
  {
    productImage:
    "https://www.businessinsider.in/photo/94359342/best-deals-on-kitchen-appliances-in-amazon-sale.jpg?imgsize=70714",
    productName:"Sale Item",
    price:"$25.00",
  },
  ];

  const [product,setProduct]=useState([]);
  const [inCart,setInCart]=useState(0);
  //dummy delay
  setTimeout(()=>
  {
    setProduct(data);
  },1000)
  return (
  <div className="app">
  <div className="cart-count navbar">
  <div className="start">
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Shop
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">All Products</a></li>
            <li><a className="dropdown-item" href="#">Popular item</a></li>
            <li><a className="dropdown-item" href="#">New Arrivals</a></li>
          </ul>
        </li>
      </ul>
    </div>
   
        
  </div>

</nav>

   
</div>
<ul className="nav-item end">
          <a className="nav-link " href="#">Cart </a>
          <li className="badge rounded-pill text-bg-dark">{inCart}</li>
        </ul>
    </div>
    <div className="shop">
      <h1 className="top">Shop in style</h1>
      <h6 className="top2">With this shop hompeage template</h6>
    </div>
  <div className="cart-area">
 
   {product?.map((prod,idx)=>(
  <ProductCard
     key={idx}
    productImg={prod.productImage}
    productName={prod.productName}
    price={prod.price}
    inCart={inCart}
    setInCart={setInCart}
  />
   ))}
   </div>
 </div>
  );
}
export default App;



// eslint-disable-next-line react/prop-types
function ProductCard({productImg,productName,price,inCart,setInCart})
{
  const [show,setShow]=useState(true);

  const handleAdd=()=>{
    setShow(!show)
    setInCart(inCart+1);
  }
  const handleRemove=()=>{
    setShow(!show)
    setInCart(inCart-1);
  }
  return(
    <div className="cart-component">
      <img src={productImg} alt="no data" />
      <h2>{productName}</h2>
      <h6>{price}</h6>
      {show === true ?
      <button onClick={handleAdd}>Add to Cart</button> :
      <button onClick={handleRemove}>Remove from Cart</button>
}
    </div>  
    )
}