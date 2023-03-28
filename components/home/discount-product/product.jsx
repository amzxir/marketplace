import React from 'react'

export default function Product() {
  return (
    <div className='container'>
        <div className="row appear-animate">
            <div className="col-lg-4 col-md-5 mb-6">
                <div className="product-lg br-sm">
                    <h2 className="title title-underline mb-4">Deals Of The Week</h2>
                    <div className="swiper">
                        <div className="swiper-container swiper-theme nav-top swiper-nav-md ">
                            <div className="swiper-wrapper row cols-1">
                                <div className="swiper-slide product text-center">
                                    <figure className="product-media">
                                        <a href="product-default.html">
                                            <img src="assets/images/demos/demo9/product/5-1-1.jpg" alt="Product"
                                                width="800" height="900" />
                                            <img src="assets/images/demos/demo9/product/5-1-2.jpg" alt="Product"
                                                width="800" height="900" />
                                        </a>
                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                title="Add to cart"></a>
                                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                title="Wishlist"></a>
                                            <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                title="Compare"></a>
                                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                title="Quick View"></a>
                                        </div>
                                    </figure>
                                    <div className="product-details">
                                        <h3 className="product-name">
                                            <a href="product-default.html">Mobile Electronic Recorder</a>
                                        </h3>
                                        <div className="product-price">
                                            <ins className="new-price">$95.72</ins><del
                                                className="old-price">$97.15</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="swiper-button-next"></button>
                            <button className="swiper-button-prev"></button>
                        </div>
                    </div>

                    <div className="swiper-slide product-countdown-container">
                        <div className="countdown-lable mr-3 mb-2">
                            <h4 className="font-weight-bold ls-10">Hurry up!</h4>
                            <label className="text-dark">Offer end in:</label>
                        </div>
                        <div className="swiper-slide product-countdown countdown-compact mb-2">
                            00:00:00:00
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8 col-md-7 mb-6">
                <div className="tab tab-nav-underline tab-nav-center">
                    <ul className="nav nav-tabs justify-content-center" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" href="#tab-1">Featured</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tab-2">On Sale</a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content">
                    <div className="tab-pane active" id="tab-1">
                        <div className="swiper-container swiper-theme">
                            <div className="swiper-wrapper row cols-lg-4 cols-sm-3 cols-2">
                                <div className="swiper-slide product-col">
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="product-default.html">
                                                <img src="assets/images/demos/demo9/product/5-3.jpg"
                                                    alt="Product" width="800" height="900" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <h3 className="product-name">
                                                <a href="product-default.html">Gold Watch</a>
                                            </h3>
                                            <div className="product-price">
                                                <ins className="new-price">$41.36</ins><del
                                                    className="old-price">$48.82</del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="product-default.html">
                                                <img src="assets/images/demos/demo9/product/5-7.jpg"
                                                    alt="Product" width="800" height="900" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <h3 className="product-name">
                                                <a href="product-default.html">Comfortable Backpack</a>
                                            </h3>
                                            <div className="product-price">
                                                <ins className="new-price">$138.05</ins>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide product-col">
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="product-default.html">
                                                <img src="assets/images/demos/demo9/product/5-4.jpg"
                                                    alt="Product" width="800" height="900" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <h3 className="product-name">
                                                <a href="product-default.html">Brown Leather Shoes</a>
                                            </h3>
                                            <div className="product-price">
                                                <ins className="new-price">$70.28</ins><del
                                                    className="old-price">$75.32</del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="product-default.html">
                                                <img src="assets/images/demos/demo9/product/5-8.jpg"
                                                    alt="Product" width="800" height="900" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <h3 className="product-name">
                                                <a href="product-default.html">Comfortable Armchair</a>
                                            </h3>
                                            <div className="product-price">
                                                <ins className="new-price">$290.05</ins><del
                                                    className="old-price">$302.74</del>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide product-col">
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="product-default.html">
                                                <img src="assets/images/demos/demo9/product/5-5.jpg"
                                                    alt="Product" width="800" height="900" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <h3 className="product-name">
                                                <a href="product-default.html">Men's Suede Belt</a>
                                            </h3>
                                            <div className="product-price">
                                                <ins className="new-price">$37.19</ins><del
                                                    className="old-price">$40.57</del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="product-default.html">
                                                <img src="assets/images/demos/demo9/product/5-9.jpg"
                                                    alt="Product" width="800" height="900" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <h3 className="product-name">
                                                <a href="product-default.html">Prtable Torch</a>
                                            </h3>
                                            <div className="product-price">
                                                <ins className="new-price">$10.73</ins>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide product-col">
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="product-default.html">
                                                <img src="assets/images/demos/demo9/product/5-6.jpg"
                                                    alt="Product" width="800" height="900" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <h3 className="product-name">
                                                <a href="product-default.html">Wooden Chair</a>
                                            </h3>
                                            <div className="product-price">
                                                <ins className="new-price">$40.21</ins>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="product-default.html">
                                                <img src="assets/images/demos/demo9/product/5-10.jpg"
                                                    alt="Product" width="800" height="900" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <h3 className="product-name">
                                                <a href="product-default.html">Top Men's Hiking Hat</a>
                                            </h3>
                                            <div className="product-price">
                                                <ins className="new-price">$20.84</ins><del
                                                    className="old-price">$25.92</del>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                    <div className="tab-pane" id="tab-2">
                        <div className="swiper-container swiper-theme">
                            <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-md-2">
                                <div className="swiper-slide product-col">
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="product-default.html">
                                                <img src="assets/images/demos/demo9/product/5-9.jpg"
                                                    alt="Product" width="800" height="900" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <h3 className="product-name">
                                                <a href="product-default.html">Prtable Torch</a>
                                            </h3>
                                            <div className="product-price">
                                                <ins className="new-price">$10.73</ins>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="product-default.html">
                                                <img src="assets/images/demos/demo9/product/5-7.jpg"
                                                    alt="Product" width="800" height="900" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <h3 className="product-name">
                                                <a href="product-default.html">Comfortable Backpack</a>
                                            </h3>
                                            <div className="product-price">
                                                <ins className="new-price">$138.05</ins>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide product-col">
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="product-default.html">
                                                <img src="assets/images/demos/demo9/product/5-4.jpg"
                                                    alt="Product" width="800" height="900" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <h3 className="product-name">
                                                <a href="product-default.html">Brown Leather Shoes</a>
                                            </h3>
                                            <div className="product-price">
                                                <ins className="new-price">$70.28</ins><del
                                                    className="old-price">$75.32</del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="product-default.html">
                                                <img src="assets/images/demos/demo9/product/5-5.jpg"
                                                    alt="Product" width="800" height="900" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <h3 className="product-name">
                                                <a href="product-default.html">Men's Suede Belt</a>
                                            </h3>
                                            <div className="product-price">
                                                <ins className="new-price">$37.19</ins><del
                                                    className="old-price">$40.57</del>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide product-col">
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="product-default.html">
                                                <img src="assets/images/demos/demo9/product/5-10.jpg"
                                                    alt="Product" width="800" height="900" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <h3 className="product-name">
                                                <a href="product-default.html">Top Men's Hiking Hat</a>
                                            </h3>
                                            <div className="product-price">
                                                <ins className="new-price">$20.84</ins><del
                                                    className="old-price">$25.92</del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="product-default.html">
                                                <img src="assets/images/demos/demo9/product/5-8.jpg"
                                                    alt="Product" width="800" height="900" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <h3 className="product-name">
                                                <a href="product-default.html">Comfortable Armchair</a>
                                            </h3>
                                            <div className="product-price">
                                                <ins className="new-price">$290.05</ins><del
                                                    className="old-price">$302.74</del>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide product-col">
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="product-default.html">
                                                <img src="assets/images/demos/demo9/product/5-6.jpg"
                                                    alt="Product" width="800" height="900" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <h3 className="product-name">
                                                <a href="product-default.html">Wooden Chair</a>
                                            </h3>
                                            <div className="product-price">
                                                <ins className="new-price">$40.21</ins>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="product-default.html">
                                                <img src="assets/images/demos/demo9/product/5-3.jpg"
                                                    alt="Product" width="800" height="900" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <h3 className="product-name">
                                                <a href="product-default.html">Gold Watch</a>
                                            </h3>
                                            <div className="product-price">
                                                <ins className="new-price">$41.36</ins><del
                                                    className="old-price">$48.82</del>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
