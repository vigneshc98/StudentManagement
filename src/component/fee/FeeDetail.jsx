import React,{useState,useEffect} from 'react'
import PortalModal from './PortalModal';
import PostDataHoc from '../hoc/PostDataHOC'
import { useDispatch} from 'react-redux'
import { actionCreators } from '../state/index'
import axios from 'axios'
import css from './fee.module.css'
import cssPortal from './portal.module.css'
import imgsrc from './paidIcon.png'
import payIcon from './payIcon.png'
import { toast } from 'react-toastify';

const FeeDetail = (props) => { 

    const apiKey = process.env.REACT_APP_API_KEY;

    // let collegeTotFee=100000;
    // let busTotFee=30000;
    // let activityTotFee=3000;
    // let esdpTotFee=1500;
    // let alumniTotFee=1000;
    let collegeTotFee=process.env.REACT_APP_COLLEGE_FEE;
    let busTotFee=process.env.REACT_APP_BUS_FEE;
    let activityTotFee=process.env.REACT_APP_ACTIVITY_FEE;
    let esdpTotFee=process.env.REACT_APP_ESDP_FEE;
    let alumniTotFee=process.env.REACT_APP_ALUMNI_FEE;

    console.log(collegeTotFee);

    const dispatch = useDispatch();

    let { crudMethod} = props;

    const [payAmount, setPayAmount] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [typeValue, setTypeValue] = useState('')
    const [studList, setstudList] = useState({
        id:"",
        name:"",
        usn:"",
        dept:"",
        sem:"",
        collgefees:"",
        busfees:"",
        activityfee:"",
        ESDPfee:"",
        alumnifee:""
    });
    // const [launch, setLaunch] = useState(true);

    let {name, usn , dept, sem,id,collgefees,busfees,activityfee,ESDPfee,alumnifee} = studList;

    useEffect(() => {
        let id = localStorage.getItem("ID");
        axios.get(`${apiKey}/${id}`)
        .then((response)=>{
             setstudList(response.data);
             console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    }, []);

    const toggleModal = (hold) => {
        setIsOpen(true);
        setTypeValue(hold);
    }
    
    const setFees = () => {
        console.log(payAmount);
        switch(typeValue){
            case 'CF':  if(Number(collgefees)+Number(payAmount)<=(collegeTotFee)&& payAmount>0){
                             dispatch(actionCreators.setName(id,name,usn,dept,sem,(Number(collgefees)+Number(payAmount)),busfees,activityfee,ESDPfee,alumnifee));
                             toast.success("Payment successfull")
                         }else{
                             toast.error("Payment error..plese check amount enterd");
                         }
                        break;
            case 'BF': if(Number(busfees)+Number(payAmount)<=(busTotFee)&& payAmount>0){
                         dispatch(actionCreators.setName(id,name,usn,dept,sem,collgefees,(Number(busfees)+Number(payAmount)),activityfee,ESDPfee,alumnifee));
                         toast.success("Payment successfull")
                        }else{
                            toast.error("Payment error..plese check amount enterd");
                        }
                        break;
            case 'AF': if(Number(activityfee)+Number(payAmount)<=(activityTotFee)&& payAmount>0){
                         dispatch(actionCreators.setName(id,name,usn,dept,sem,collgefees,busfees,(Number(activityfee)+Number(payAmount)),ESDPfee,alumnifee));
                         toast.success("Payment successfull")
                        }else{
                            toast.error("Payment error..plese check amount enterd");
                        }
                        break;
            case 'EF': if(Number(ESDPfee)+Number(payAmount)<=(esdpTotFee)&& payAmount>0){
                       dispatch(actionCreators.setName(id,name,usn,dept,sem,collgefees,busfees,activityfee,(Number(ESDPfee)+Number(payAmount)),alumnifee));
                       toast.success("Payment successfull")
                        }else{
                            toast.error("Payment error..plese check amount enterd");
                        }
                        break;
            case 'ALF': if(Number(alumnifee)+Number(payAmount)<=(alumniTotFee)&& payAmount>0){
                         dispatch(actionCreators.setName(id,name,usn,dept,sem,collgefees,busfees,activityfee,ESDPfee,(Number(alumnifee)+Number(payAmount))));
                         toast.success("Payment successfull")
                         } else{
                            toast.error("Payment error..plese check amount enterd");
                         }
                        break;
        }
    }

    return (
        <div className={css.container}>
            <h1 className={css.H1}>{name} - FeeDetail</h1>
            <div className={css.subContainer}>
                <div className={css.subContainer2}>

                        <div className={css.inputMain}>
                            <div className={css.CardUpper}>
                                <div className={css.inputSubMain}>
                                    <h1 className={css.H1}>College-Fee</h1>
                                    <div className={css.icon}>
                                   { (collegeTotFee)-collgefees<1 ? <>  <img src={imgsrc} className={css.iconImg} /> </>: ''}
                                    </div>
                                </div>
                                <div className={css.CardMid}>
                                    <div className={css.inputSubMain}>
                                        <label>Total Amount: </label>
                                        <input type="text" value={collegeTotFee+' Rs'} readOnly className={css.input} />
                                    </div>
                                    <div className={css.inputSubMain}>
                                        <label>Amount Paid: </label>
                                        <input type="text" value={collgefees+' Rs'} readOnly className={css.input} />
                                    </div>
                                    <div className={css.inputSubMainRed}>
                                        <label>Amount Pending: </label>
                                        <input type="text" value={collegeTotFee-collgefees+' Rs'} readOnly className={css.input} />
                                    </div>
                                </div>
                            </div>
                            { (collegeTotFee)-collgefees<1 ?
                                    <button onClick={()=>{toggleModal("CF")}} disabled={(collegeTotFee)-collgefees<1} className={css.disableBtn} >Pay Now</button>
                                :   <button onClick={()=>{toggleModal("CF")}} disabled={(collegeTotFee)-collgefees<1} className={css.btn} >Pay Now</button>
                            }
                        </div>

                        <div className={css.inputMain}>
                            <div className={css.CardUpper}>
                                <div className={css.inputSubMain}>
                                    <h1 className={css.H1}>Bus-Fee</h1>
                                    <div className={css.icon}>
                                   { busTotFee-busfees<1 ? <>  <img src={imgsrc} className={css.iconImg} /> </>: ''}
                                    </div>
                                </div>
                                <div className={css.CardMid}>
                                    <div className={css.inputSubMain}>
                                        <label>Toatal Amount </label>
                                        <input type="text" value={busTotFee+' Rs'} readOnly className={css.input} />
                                    </div>
                                    <div className={css.inputSubMain}>
                                        <label>Amount Paid: </label>
                                        <input type="text" value={busfees+' Rs'} readOnly className={css.input} />
                                    </div>
                                    <div className={css.inputSubMainRed}>
                                        <label>Amount Pending: </label>
                                        <input type="text" value={busTotFee-busfees+' Rs'} readOnly className={css.input} />
                                    </div>
                                </div>
                            </div>
                            {
                             busTotFee-busfees<1 ?
                             <button onClick={()=>{toggleModal("BF")}} disabled={busTotFee-busfees<1} className={css.disableBtn} >Pay Now</button>
                             :  <button onClick={()=>{toggleModal("BF")}} disabled={busTotFee-busfees<1} className={css.btn} >Pay Now</button>

                            }
                        </div>

                        <div className={css.inputMain}>
                            <div className={css.CardUpper}>
                                <div className={css.inputSubMain}>
                                    <h1 className={css.H1}>Activity-Fee</h1>
                                    <div className={css.icon}>
                                   { activityTotFee-activityfee<1 ? <>  <img src={imgsrc} className={css.iconImg} /> </>: ''}
                                    </div>
                                </div>
                                <div className={css.CardMid}>
                                    <div className={css.inputSubMain}>
                                        <label>Total Amount: </label>
                                        <input type="text" value={activityTotFee+' Rs'} readOnly className={css.input} />
                                    </div>
                                    <div className={css.inputSubMain}>
                                        <label>Amount Paid: </label>
                                        <input type="text" value={activityfee+' Rs'} readOnly className={css.input} />
                                    </div>
                                    <div className={css.inputSubMainRed}>
                                        <label>Amount Pending: </label>
                                        <input type="text" value={activityTotFee-activityfee+' Rs'} readOnly className={css.input} />
                                    </div>
                                </div>
                            </div>
                            {
                                activityTotFee-activityfee<1 ?
                                 <button onClick={()=>{toggleModal("AF")}} disabled={activityTotFee-activityfee<1} className={css.disableBtn}>Pay Now</button>
                                :  <button onClick={()=>{toggleModal("AF")}} disabled={activityTotFee-activityfee<1} className={css.btn}>Pay Now</button>
                            }
                        </div>
                </div>
                <div className={css.subContainer3}>

                    <div className={css.inputMain}>
                        <div className={css.CardUpper} >
                            <div className={css.inputSubMain}>
                                    <h1 className={css.H1}>ESDP-Fee</h1>
                                    <div className={css.icon}>
                                   { esdpTotFee-ESDPfee<1 ? <>  <img src={imgsrc} className={css.iconImg} /> </>: ''}
                                    </div>
                            </div>
                            <div className={css.CardMid}>
                                <div className={css.inputSubMain}>
                                    <label>ESDP-Fee </label>
                                    <input type="text" value={esdpTotFee+' Rs'} readOnly className={css.input} />
                                </div>
                                <div className={css.inputSubMain}>
                                    <label>Amount Paid: </label>
                                    <input type="text" value={ESDPfee+' Rs'} readOnly className={css.input} />
                                </div>
                                <div className={css.inputSubMainRed}>
                                    <label>Amount Pending: </label>
                                    <input type="text" value={esdpTotFee-ESDPfee+' Rs'} readOnly className={css.input} />
                                </div>
                            </div>
                        </div>
                            {
                                esdpTotFee-ESDPfee<1 ?
                                  <button onClick={()=>{toggleModal("EF")}} disabled={esdpTotFee-ESDPfee<1} className={css.disableBtn}>Pay Now</button>
                                :   <button onClick={()=>{toggleModal("EF")}} disabled={esdpTotFee-ESDPfee<1} className={css.btn}>Pay Now</button>
                            }
                    </div>

                    <div className={css.inputMain}>
                        <div className={css.CardUpper} >
                            <div className={css.inputSubMain}>
                                    <h1 className={css.H1}>Alumni-Fee</h1>
                                    <div className={css.icon}>
                                   { alumniTotFee-alumnifee<1 ? <>  <img src={imgsrc} className={css.iconImg} /> </>: ''}
                                    </div>
                            </div>
                            <div className={css.CardMid}>
                                <div className={css.inputSubMain}>
                                    <label>Alumni-Fee </label>
                                    <input type="text" value={alumniTotFee+' Rs'} readOnly className={css.input} />
                                </div>
                                <div className={css.inputSubMain}>
                                    <label>Amount Paid: </label>
                                    <input type="text" value={alumnifee+' Rs'} readOnly className={css.input} />
                                </div>
                                <div className={css.inputSubMainRed}>
                                    <label>Amount Pending: </label>
                                    <input type="text" value={alumniTotFee-alumnifee+' Rs'} readOnly className={css.input} />
                                </div>
                            </div>
                        </div>
                        {
                            alumniTotFee-alumnifee<1 ?
                               <button onClick={()=>{toggleModal("ALF")}} disabled={alumniTotFee-alumnifee<1} className={css.disableBtn}>Pay Now</button>
                            :  <button onClick={()=>{toggleModal("ALF")}} disabled={alumniTotFee-alumnifee<1} className={css.btn}>Pay Now</button>
                        }
                    </div>
                </div>

                <PortalModal isOpen={isOpen} setIsOpen={setIsOpen} >
                    <form onSubmit={crudMethod} className={cssPortal.portalForm} >
                        <div className={cssPortal.inputMain}>
                            <label>Enter the Amount to pay</label>
                            <img src={payIcon} alt="" className={cssPortal.payIcon} />
                            <input type="number" placeholder="Amount in rs" onChange={(e)=>{setPayAmount(e.target.value)}} className={cssPortal.input} />
                        </div>
                        <div className={cssPortal.btnDiv}>
                            <button onClick={()=>{setIsOpen(false)}} className={cssPortal.btnCncl}>Cancel</button>
                            <button onClick={setFees} className={cssPortal.btnPay}>Pay</button>  
                        </div>
                    </form>
                </PortalModal>
                
            </div>
        </div>
    )
}

export default PostDataHoc(FeeDetail,'put','feedetail');
