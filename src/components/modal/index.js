import React, {useEffect, useState} from "react";
import { Modal, Button } from "react-bootstrap";
import  Badge  from "react-bootstrap/Badge";
import { useFormik } from "formik";
import EditIcon from '@mui/icons-material/Edit';
import WifiIcon from '@mui/icons-material/Wifi';
import AppleIcon from '@mui/icons-material/Apple';
import'./style.css'
import CloseButton from 'react-bootstrap/CloseButton';


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
const ModalPopUp = ()=>{
    const [isShow, setIsShow] = useState(false)
    const initModal = () =>{
        return setIsShow(!false)
    }

    
    const formik = useFormik({
        initialValues: {
            cardNumber: '',
            expiryDate: '',
            password: '',
            cvv: ''
        }, validate,
        onSubmit: values=>{
            console.log(values)
            alert('form successfully submitted ')
        }
        
    })

    const closeModal = ()=>{
        console.log('ji')
        setIsShow(false)
    }
    useEffect(()=>{
        initModal()
    })

    return (
        <Modal show={isShow} dialogClassName="modal-90w"   >
            <div className='container form'>
                <div className='row content '>

                    <div className='col-lg-7 col-sm-12 col-md-12' >
                        <Modal.Title className='col-lg-7 col-sm-12 col-md-12 content'>
                        <div className="row">
                            <div className='col-lg-8 col-sm-11 col-md-11  header'>
                                <span>
                                    <img src="/imgs/txtlogo.png" alt="logo"/>
                                </span>
                                <h3><span><b>AceCoin</b></span>Pay</h3>
                             </div>
                            <div className='col-sm-12 col-md- col-lg-3 badge_div'>
                                <Badge  className='badge' bg="secondary">0</Badge>
                                <Badge className='badge' bg="secondary">1</Badge>
                                :
                                <Badge bg="secondary" className='badge'>1</Badge>
                                <Badge bg="secondary" className='badge'>9</Badge>

                            </div>
                            
                        </div>
                        </Modal.Title>
                        <Modal.Body  ></Modal.Body >
                        <div className='formContainer' >
                            <form onSubmit={formik.handleSubmit}>
                                <div className='form-group field'>
                                    <label htmlFor="cardNumber" className='label'>Card Number</label>
                                    <p className='iconTxt'>
                                        <span className='iconHint'>Enter the 16-digit card number on the card</span>
                                        <span className='icon'><EditIcon/> edit</span>
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
                                    {formik.errors.cardNumber? <span className="errMsg">{formik.errors.cardNumber}</span>: null}
                                </div>
                                <div  className='fieldContianer'>
                                    <div className={`col-5`}>
                                        <label htmlFor="cardNumber" className='label'>CVV Number</label>
                                        <p className='hint'>Enter the 3 or 4 digit number on your card</p>
                                    </div>
                                    <div className='field form-group col-lg-3 col-sm-7'>
                                        <input
                                            placeholder="334"
                                            name="cvv"
                                            type="text"
                                            id="cvv"
                                            className='form-control  input'
                                            onChange={formik.handleChange}
                                            value={formik.values.cvv}
                                        />
                                    {formik.errors.cvv? <span className="errMsg">{formik.errors.cvv}</span>: null}

                                    </div>
                                    
                                </div>
                                <div  className='fieldContianer'>
                                    <div className='col-5'>
                                        <label htmlFor="expiryDate" className='label'>Expiry Date</label>
                                        <p className='hint'>Enter the expiration date on the card</p>
                                    </div>
                                    <div className='field form-group col-lg-3 col-sm-7'>
                                        <input
                                            placeholder="Aug 2010"
                                            name="expiryDate"
                                            type="month"
                                            id="expiryDate"
                                            className='form-control  input'
                                            onChange={formik.handleChange}
                                            value={formik.values.expiryDate}
                                        />
                                    {formik.errors.expiryDate? <span className="errMsg">{formik.errors.expiryDate}</span>: null}

                                    </div>
                                    
                                </div>
                                <div  className='fieldContianer'>
                                    <div className={`col-5 `}>
                                        <label htmlFor="password" className='label'>Password</label>
                                        <p className='hint'>Enter Your Dynamic Password</p>
                                    </div>
                                    <div className='field form-group col-lg-3 col-sm-7'>
                                        <input
                                            placeholder="***"
                                            name="password"
                                            type="password"
                                            id="password"
                                            className='form-control  input'
                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                        />
                                    {formik.errors.password? <span className="errMsg">{formik.errors.password}</span>: null}

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
                    </div >
                    <div className="col-4">
                        <div className='cardDetail' >
                            <div className='mstCard'>
                                <div className='chip'>
                                    <img src="imgs/chip.png" alt="env chip"/>
                                </div>
                                <div className='wifi'>
                                    <WifiIcon className='wifiSignal'/>
                                </div>
                                
                                        
                            </div>
                            <div className='userInfo'>
                                <p className='name'>Jonathan Micheal</p>
                                <p className='numberSample'>....  3456</p>
                            </div>
                            <div  className='otherInfo'>
                                <div className='date'>
                                    <p>09/22</p>
                                </div>
                                <div className='mstLogo'>
                                    <img src="imgs/mastercard.svg" alt="mastercard logo"/>
                                </div>
                            </div>
                        </div>
                        <div className='bg'>
                            <div className='companyInfo'>
                                <div className='company'>
                                    <p className='companyName'>Company</p>
                                    <p className='companylogo'>
                                        <p><AppleIcon className='companylogos' /></p>
                                        Apple
                                    </p>
                                </div>
                                <div className='GenInfo'>
                                    <p className='GenName'>Order Number</p>
                                    <p  className='GenNumber'>1266201</p>

                                </div>
                                <div className='GenInfo'>
                                    <p className='GenName'>Product</p>
                                    <p  className='GenNumber'>MacBook Air</p>

                                </div>
                                <div className='GenInfo'>
                                    <p className='GenName'>VAT(20)</p>
                                    <p  className='GenNumber'>$100.00</p>

                                </div>
                            </div>
                            <hr />

                            <div className='balance'>

                                <p className='pay'>You have to pay</p>
                                <div className='amount'>
                                    <div className='amountInfo'>
                                    <p className='price'>549.</p><p className='cent'>99</p>
                                        <span className='currency'>USD</span>
                                    </div>
                                    <div className='bill'>
                                        <img src="imgs/bill.png"  className='recieptt' alt="reciept"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>
                <div className="col-1 closeBtn" >
                <button onClick={closeModal} className="btn btn-close"></button>

            </div>
            </div>
            
        </Modal>
    )

    
}

export default ModalPopUp