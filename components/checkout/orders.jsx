import React from 'react'

export default function Orders() {
  return (
    <>
        <div className="col-lg-5 mb-4 sticky-sidebar-wrapper">
            <div className="order-summary-wrapper sticky-sidebar">
                <h3 className="title text-uppercase ls-10">سفارش شما</h3>
                <div className="order-summary">
                    <table className="order-table">
                        <thead>
                            <tr>
                                <th colspan="2">
                                    <b>محصول</b>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bb-no">
                                <td className="product-name">ژاکت چاپ نخل <i className="fas fa-times"></i> <span className="product-quantity">1</span></td>
                                <td className="product-total">120.000 تومان</td>
                            </tr>
                            <tr className="bb-no">
                                <td className="product-name">کوله پشتی قهوه ای <i className="fas fa-times"></i> <span className="product-quantity">1</span></td>
                                <td className="product-total">140.000 تومان</td>
                            </tr>
                            <tr className="cart-subtotal bb-no">
                                <td>
                                    <b>جمع</b>
                                </td>
                                <td>
                                    <b>220.000 تومان</b>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className="shipping-methods">
                                <td colspan="2" className="text-left">
                                    <h4 className="title title-simple bb-no mb-1 pb-0 pt-3">ارسال
                                    </h4>
                                    <ul id="shipping-method" className="mb-4">
                                        <li>
                                            <div className="custom-radio text-right">
                                                <input type="radio" id="free-shipping"
                                                    className="custom-control-input" name="shipping"/>
                                                <label for="free-shipping"
                                                    className="custom-control-label color-dark">ارسال رایگان</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="custom-radio text-right">
                                                <input type="radio" id="local-pickup"
                                                    className="custom-control-input" name="shipping"/>
                                                <label for="local-pickup"
                                                    className="custom-control-label color-dark">وانت محلی</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="custom-radio text-right">
                                                <input type="radio" id="flat-rate"
                                                    className="custom-control-input" name="shipping"/>
                                                <label for="flat-rate"
                                                    className="custom-control-label color-dark">نرخ ثابت: 120.00 تومان</label>
                                            </div>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="order-total">
                                <th>
                                    <b>جمع</b>
                                </th>
                                <td>
                                    <b>150.000 تومان</b>
                                </td>
                            </tr>
                        </tfoot>
                    </table>

                    <div className="payment-methods" id="payment_method">
                        <h4 className="title font-weight-bold ls-25 pb-0 mb-1">روش های پرداخت</h4>
                        <div className="accordion payment-accordion">
                            <div className="card">
                                <div className="card-header">
                                    <a href="#cash-on-delivery" className="collapse">انتقال مستقیم بانکی</a>
                                </div>
                                <div id="cash-on-delivery" className="card-body expanded">
                                    <p className="mb-0">
                                        Make your payment directly into our bank account. 
                                        Please use your Order ID as the payment reference. 
                                        Your order will not be shipped until the funds have cleared in our account.
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <a href="#payment" className="expand">پرداخت ها را چک کنید</a>
                                </div>
                                <div id="payment" className="card-body collapsed">
                                    <p className="mb-0">
                                        Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <a href="#delivery" className="expand">پرداخت نقدی هنگام تحویل</a>
                                </div>
                                <div id="delivery" className="card-body collapsed">
                                    <p className="mb-0">
                                        Pay with cash upon delivery.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-group place-order pt-6">
                        <button type="submit" className="btn btn-dark btn-block btn-rounded">ثبت سفارش</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
