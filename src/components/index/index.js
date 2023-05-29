import React, {useEffect, useState} from "react";
import Style from './style.module.css'
import  Badge  from "react-bootstrap/Badge";
import { useFormik } from "formik";
import EditIcon from '@mui/icons-material/Edit';
import WifiIcon from '@mui/icons-material/Wifi';
import AppleIcon from '@mui/icons-material/Apple';

const validate = values =>{
    const errors = {};
    if(!values.cardNumber){
        errors.cardNumber = 'Card Number is Required'
    }
    else if(values.cardNumber.length <16){
        errors.cardNumber = 'Card Number cannot be less than 16'
    }
    if(!values.cvv){
        errors.cvv = 'CVV Number is Required'
    }
    else if(values.cvv.length<3){
        errors.cvv = 'CVV Number cannot be less than 3'
    }
    if(!values.expiryDate){
        errors.expiryDate = 'Expiry Date is required'
    }
    if(!values.password){
        errors.password = 'Password is Required'
    }
    else if(values.password.length<4){
        errors.password = 'Password cannot be less than 4'
    }

    if(!values.expiryDate){
        errors.expiryDate = 'Invalid Expiry Date'
    }
    return errors    

}

const Index = () =>{
    
    useEffect(()=>{

    })
    
    const formik = useFormik({
        initialValues: {
            cardNumber: '',
            expiryDate: '',
            password: '',
            cvv: ''
        }, validate,
        onSubmit: values=>{
            console.log(values)
        }
        
    })

        
    return (
        <div className={`${Style.container}`}>
            <div className={`container ${Style.form}` }>
                <div className={`row ${Style.content}` } >
                    <div className={`col-lg-7 col-sm-12 col-md-12 ${Style.content}` }>
                        <div className="row">
                            <div className={`col-lg-9 col-sm-12 col-md-12  ${Style.header}`}>
                                <span>
                                    <img src="imgs/img.png"/>
                                </span>
                                <h3 className={`${Style.title}`}>AceCoin</h3>
                                <h3 className={`${Style.title2}`}>Pay</h3>
                            </div>
                            <div className={`col-sm-12 col-md-12 col-lg-3 ${Style.badge_div}`}>
                                <Badge  className={`${Style.badge}`} bg="secondary">0</Badge>
                                <Badge className={`${Style.badge}`} bg="secondary">1</Badge>
                                :
                                <Badge bg="secondary" className={`${Style.badge}`}>1</Badge>
                                <Badge bg="secondary" className={`${Style.badge}`}>9</Badge>

                            </div>

                        </div>
                        <div className={`row ${Style.formContainer}`} >
                            <form onSubmit={formik.handleSubmit}>
        
                                <div className={`form-group ${Style.field}`}>
                                    <label htmlFor="cardNumber" className={`${Style.label}`}>Card Number</label>
                                    <p className={`${Style.iconTxt}`}>
                                        <span className={`${Style.iconHint}`}>Enter the 16-digit card number on the card</span>
                                        <span className={`${Style.icon}`}><EditIcon/> edit</span>
                                    </p>
                                    <input
                                        className={`form-control `}
                                        name="cardNumber"
                                        id="cardNumber"
                                        type="text"
                                        placeholder="5399 - 9100 - 3779 - 1640 "
                                        onChange={formik.handleChange}
                                        value={formik.values.cardNumber}
                                    />
                                    {formik.errors.cardNumber ? <div>{formik.errors.cardNumber}</div>: null}
                                </div>
                                <div  className={` ${Style.fieldContianer} `}>
                                    <div className={`col-5`}>
                                        <label htmlFor="cardNumber" className={`${Style.label}`}>CVV Number</label>
                                        <p className={`${Style.hint}`}>Enter the 3 or 4 digit number on your card</p>
                                    </div>
                                    <div className={`${Style.field} form-group col-lg-3 col-sm-7`}>
                                        <input
                                            placeholder="334"
                                            name="cvv"
                                            type="text"
                                            id="cvv"
                                            className={`form-control  ${Style.input}`}
                                            onChange={formik.handleChange}
                                            value={formik.values.cvv}
                                        />
                                    {formik.errors.cvv? <span>{formik.errors.cvv}</span>: null}

                                    </div>
                                    
                                </div>
                                <div  className={` ${Style.fieldContianer} `}>
                                    <div className={`col-5`}>
                                        <label htmlFor="expiryDate" className={`${Style.label}`}>Expiry Date</label>
                                        <p className={`${Style.hint}`}>Enter the expiration date on the card</p>
                                    </div>
                                    <div className={`${Style.field} form-group col-lg-3 col-sm-7`}>
                                        <input
                                            placeholder="Aug 2010"
                                            name="expiryDate"
                                            type="month"
                                            id="expiryDate"
                                            className={`form-control  ${Style.input}`}
                                            onChange={formik.handleChange}
                                            value={formik.values.expiryDate}
                                        />
                                    {formik.errors.expiryDate? <span>{formik.errors.expiryDate}</span>: null}

                                    </div>
                                    
                                </div>
                                <div  className={` ${Style.fieldContianer} `}>
                                    <div className={`col-5 `}>
                                        <label htmlFor="password" className={`${Style.label}`}>Password</label>
                                        <p className={`${Style.hint}`}>Enter Your Dynamic Password</p>
                                    </div>
                                    <div className={`${Style.field} form-group col-lg-3 col-sm-7`}>
                                        <input
                                            placeholder="***"
                                            name="password"
                                            type="password"
                                            id="password"
                                            className={`form-control  ${Style.input}`}
                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                        />
                                    {formik.errors.password? <span>{formik.errors.password}</span>: null}

                                    </div>
                                    
                                </div>
                                <button 
                                    type="submit"
                                    
                                    className={`btn btn-primary`}
                                >
                                    Pay Now
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className={` ${Style.cardDetail}`} >
                        <div className={` ${Style.mstCard}` }>
                             <div className={`${Style.chip}`}>
                                <img src="imgs/chip.png" alt="env chip"/>
                            </div>
                            <div className={`${Style.wifi}`}>
                                <WifiIcon className={`${Style.wifiSignal}`}/>
                            </div>
                            
                                    
                        </div>
                        <div className={`${Style.userInfo}`}>
                            <p className={`${Style.name}`}>Jonathan Micheal</p>
                            <p className={`${Style.numberSample}`}>....  3456</p>
                        </div>
                        <div  className={`${Style.otherInfo}`}>
                            <div className={`${Style.date}`}>
                                <p>09/22</p>
                            </div>
                            <div className={`${Style.mstLogo}`}>
                                <img src="imgs/mastercard.svg" alt="mastercard logo"/>
                            </div>
                        </div>
                    </div>
                    <div className={`${Style.bg}`}>
                        <div className={`${Style.companyInfo}`}>
                            <div className={`${Style.company}`}>
                                <p className={`${Style.companyName}`}>Company</p>
                                <p className={`${Style.companylogo}`}>
                                    <p><AppleIcon className={`${Style.companylogos}`} /></p>
                                    Apple
                                </p>
                            </div>
                            <div className={`${Style.GenInfo}`}>
                                <p className={`${Style.GenName}`}>Order Number</p>
                                <p  className={`${Style.GenNumber}`}>1266201</p>

                            </div>
                            <div className={`${Style.GenInfo}`}>
                                <p className={`${Style.GenName}`}>Product</p>
                                <p  className={`${Style.GenNumber}`}>MacBook Air</p>

                            </div>
                            <div className={`${Style.GenInfo}`}>
                                <p className={`${Style.GenName}`}>VAT(20)</p>
                                <p  className={`${Style.GenNumber}`}>$100.00</p>

                            </div>
                        </div>
                        <hr />

                        <div className={Style.balance}>

                            <p className={Style.pay}>You have to pay</p>
                            <div className={Style.amount}>
                                <div className={Style.amountInfo}>
                                <p className={Style.price}>549.</p><p className={Style.cent}>99</p>
                                    <span className={Style.currency}>USD</span>
                                </div>
                                <div className={Style.bill}>
                                    <img src="imgs/bill.png"  className={Style.recieptt} alt="reciept"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Index