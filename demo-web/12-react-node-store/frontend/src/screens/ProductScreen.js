import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../actions/productsActions';


export default function ProductScreen(props) {
  // const product = data.products.find((x) => x._id === props.match.params.id);
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;
  // if (!product) {
  //   return <div>Product Not Found</div>
  // } 

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  return (
    <div>
      { loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
            // <div className="row center">
            //   {
            //     products.map((product) => (
            //       <Product key={product._id} product={product}></Product>
            //     ))
            //   }
            // </div>
            <div>
              <Link to='/'>Back to Results</Link>
              <div className="row top">
                <div className="col-2">
                  <img className="large" src={ product.image} alt={ product.name }/>
                </div>
        
                <div className="col-1">
                  <ul>
                    <li>
                      <h1>{product.name }</h1>
                    </li>
        
                    <li>
                      <Rating
                        rating={product.rating}
                        numReviews={product.numReviews}
                      ></Rating>
                    </li>
        
                    <li>
                      price={product.price}
                    </li>
        
                    <li>
                      <p>{product.description}</p>
                    </li>
                  </ul>
                </div>
        
                <div className="col-1">
                  <div className="card card-body">
                    <ul>
                      <li>
                        <div className="row">
                          <div>Price</div>
                          <div className="pr">${ product.price }</div>
                        </div>
                      </li>
                      
                      <li>
                        <div className="row">
                          <div>Status</div>
                          <div>
                            {product.countInStock > 0 ? (
                              <span className="success">In Stock</span>
                            ) : (
                                <span className="danger">Unavailable</span>
                            )}
                          </div>
                        </div>
                      </li>
        
                      <li>
                        <button className="primary block">Add to Cart</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        
          )
      }
    </div>


  );
}
