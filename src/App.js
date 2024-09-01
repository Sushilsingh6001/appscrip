import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";


function App() {
  const [products, setProducts] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [isIdealForVisible, setIsIdealForVisible] = useState(true);
  const [isRecommendedVisible, setIsRecommendedVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cotegeryList, setCotegeryList] = useState([])
  const [cotegerySelected, setCotegerySelected] = useState({
    value: '',
    ind: ''
  })

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setProducts(data)
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const categories = [...new Set(products.map(product => product.category))];
    setCotegeryList(categories)
    console.log(categories);
  }, [products.length])
  const handleIdleFilter = (val, ind) => {
    debugger
    if (cotegerySelected.ind === ind) {
      setCotegerySelected({
        value: '',
        ind: ''
      })
    } else {
      setCotegerySelected({
        value: val,
        ind: ind
      })
    }
  }
  const handleShowSidebar = () => {
    if (!isFilterVisible) {
      document.getElementById('products').style.width = '80%'
    } else {
      document.getElementById('products').style.width = '100%'
    }
    setIsFilterVisible(!isFilterVisible)

  }
  return (
    <div>
      <Nav />
      <main>
        <section className="product-intro">
          <h1>Discover Our Products</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
        </section>
        <div className='space'>
          <div className='space_1'>
            <h2>{products.length} Items</h2>
            <button
              className="hide-filter"
              onClick={handleShowSidebar}>
              {isFilterVisible ? 'Hide Filter' : 'Show Filter'}
            </button>
          </div>
          <div className="recommended-dropdown">
            <button
              className="recommended-button"
              onClick={() => setIsRecommendedVisible(!isRecommendedVisible)}>
              Recommended {isRecommendedVisible ? '▲' : '▼'}
            </button>
            {!isRecommendedVisible && (
              <ul className="recommended-options">
                <li>Newest First</li>
                <li>Popular</li>
                <li>Price: High to Low</li>
                <li>Price: Low to High</li>
              </ul>
            )}
          </div>
        </div>
        <section className="product-listing">
          {isFilterVisible && (
            <aside className="filters">

              <div
                className="filter-category"
                style={{ cursor: 'pointer' }}>
                <input type='checkbox' className='set'/>
                PATTERN
                {/* <span><MdKeyboardArrowDown /></span> */}
              </div>
              <div className="filter-options">
                <div
                  className="filter-category"
                  onClick={() => setIsIdealForVisible(!isIdealForVisible)}
                  style={{ cursor: 'pointer' }}>
                  IDEAL FOR
                  {
                    isIdealForVisible ?
                      <span><MdKeyboardArrowUp /></span> :
                      <span><MdKeyboardArrowDown /></span>
                  }


                </div>
                {isIdealForVisible && (
                  <div className="filter-sub-options">
                    {
                      cotegeryList.map((val, ind) => {
                        return (
                          <>
                            <label><input type="checkbox" checked={val == cotegerySelected.value} onClick={() => handleIdleFilter(val, ind)} /> {val}</label><br /></>
                        )
                      })
                    }
                  </div>
                )}
                <div
                  className="filter-category"
                  style={{ cursor: 'pointer' }}>
                  OCCASION
                  <span><MdKeyboardArrowDown /></span>
                </div>
                <div
                  className="filter-category"
                  style={{ cursor: 'pointer' }}>
                  WORK
                  <span><MdKeyboardArrowDown /></span>
                </div>
                <div
                  className="filter-category"
                  style={{ cursor: 'pointer' }}>
                  FABRIC
                  <span><MdKeyboardArrowDown /></span>
                </div>
                <div
                  className="filter-category"
                  style={{ cursor: 'pointer' }}>
                  SEGMENT
                  <span><MdKeyboardArrowDown /></span>
                </div>
                <div
                  className="filter-category"
                  style={{ cursor: 'pointer' }}>
                  SUITABLE FOR
                  <span><MdKeyboardArrowDown /></span>
                </div>
                <div
                  className="filter-category"
                  style={{ cursor: 'pointer' }}>
                  RAW MATERIALS
                  <span><MdKeyboardArrowDown /></span>
                </div>
                <div
                  className="filter-category"
                  style={{ cursor: 'pointer' }}>
                  PATTERN
                  <span><MdKeyboardArrowDown /></span>
                  
                </div>
              </div>
            </aside>
          )}
          <div className="products" id='products'>
            {products.map((product) => (
              cotegerySelected.value == '' ?
                <div className="product" key={product.id}>
                  <img width={150} height={150} src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                </div> :
                cotegerySelected.value == product.category &&
                <div className="product" key={product.id}>
                  <img width={150} height={150} src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;



