import React from 'react'

export default function Form() {
  return (
    <>
        <div className="col-lg-7 pr-lg-4 mb-4">
                <h3 className="title billing-title text-uppercase ls-10 pt-1 pb-3 mb-0">
                    جزئیات صورتحساب
                </h3>
                <div className="row gutter-sm">
                    <div className="col-xs-6">
                        <div className="form-group">
                            <label>نام *</label>
                            <input type="text" className="form-control form-control-md" name="firstname" required />
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="form-group">
                            <label>نام خانوادگی *</label>
                            <input type="text" className="form-control form-control-md" name="lastname" required />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>نام شرکت (اختیاری)</label>
                    <input type="text" className="form-control form-control-md" name="company-name"/>
                </div>
                <div className="form-group">
                    <label>کشور / منطقه *</label>
                    <div className="select-box">
                        <select name="country" className="form-control form-control-md">
                            <option value="default" selected="selected">ایران</option>
                            <option value="uk">ترکیه</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label>آدرس *</label>
                    <textarea type="text" className="form-control form-control-md mb-2" name="street-address-1" required />
                </div>
                <div className="row gutter-sm">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>شهر *</label>
                            <input type="text" className="form-control form-control-md" name="town" required />
                        </div>
                        <div className="form-group">
                            <label>کدپستی *</label>
                            <input type="text" className="form-control form-control-md" name="zip" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>شهر *</label>
                            <div className="select-box">
                                <select name="country" className="form-control form-control-md">
                                    <option value="default" selected="selected">تهران</option>
                                    <option value="uk">مازندران</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>تلفن *</label>
                            <input type="text" className="form-control form-control-md" name="phone" required />
                        </div>
                    </div>
                </div>
                <div className="form-group mb-7">
                    <label>آدرس ایمیل *</label>
                    <input type="email" className="form-control form-control-md" name="email" required />
                </div>

                <div className="form-group mt-3">
                    <label for="order-notes">یادداشت های سفارش (اختیاری)</label>
                    <textarea className="form-control mb-0" id="order-notes" name="order-notes" cols="30" rows="4" placeholder="یادداشت هایی در مورد سفارش شما، به عنوان مثال یادداشت های ویژه برای تحویل"></textarea>
                </div>
        </div>
    </>
  )
}
