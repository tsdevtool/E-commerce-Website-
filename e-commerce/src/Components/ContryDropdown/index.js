import { Button } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch, IoMdClose, IoMdTrendingUp } from "react-icons/io";


const Transition = React.forwardRef(function Transition(props,ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const CountryDropdown =()=>{
    const [isOpenModal, setisOpenModal] = useState(false);

    return(
        <>
            <Button className="countryDrop" onClick={()=>setisOpenModal(IoMdTrendingUp)}>
                <div className='info d-flex flex-column'>
                    <span className="label">Your Location</span>
                    <span className="name">India</span>
                </div>
                <span className="ml-auto"><FaAngleDown/></span>
            </Button>


            <Dialog open={isOpenModal} onClose={()=>setisOpenModal(false)} className="locationModal" TransitionComponent={Transition}>
                <h4 className="mb-0">Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className="close_" onClick={()=>setisOpenModal(false)}><IoMdClose /></Button>
                <div className='headerSearch w-100'>
                    <input type='text' placeholder="Search your area..."/>
                    <Button><IoIosSearch/></Button>
                </div>

                <ul className="countryList mt-3">
                    <li><Button onClick={()=>setisOpenModal(false)}>Viet Nam</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Ha Noi</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Ho Chi Minh City</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Da Nang</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Hai Phong</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Can Tho</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Binh Duong</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Ba Ria - Vung Tau</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Dong Nai</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Binh Dinh</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Vinh Long</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Khanh Hoa</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Nam Dinh</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Ca Mau</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Nghe An</Button></li>
                    

                </ul>

            </Dialog>
        </>
    )
}

export default CountryDropdown