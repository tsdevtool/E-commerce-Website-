import { Button } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import React, { useContext, useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch, IoMdClose, IoMdTrendingUp } from "react-icons/io";
import { MyContext } from "../../App";


const Transition = React.forwardRef(function Transition(props,ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const CountryDropdown =()=>{
    const [isOpenModal, setisOpenModal] = useState(false);
    const [selectedTab, setSelectedTab] =  useState(null)
    const[countryList, setCountryList] = useState([])
    const context = useContext(MyContext)
    const selectCountry=(index, country)=>{
        setSelectedTab(index)
        setisOpenModal(false)
        context.setSelectedCountry(country)
    }

    useEffect(()=>{
        setCountryList(context.countryList)
    },[])
    const filterList=(e)=>{
        const keyword = e.target.value.toLowerCase()

        if(keyword!==""){
            const list = countryList.filter((item)=>{
                return item.country.toLowerCase().includes(keyword)
                
            })
            setCountryList(list)
        }else{
            setCountryList(context.countryList)
        }
        

        
    }
    return(
        <>
            <Button className="countryDrop" onClick={()=>setisOpenModal(IoMdTrendingUp)}>
                <div className='info d-flex flex-column'>
                    <span className="label">Your Location</span>
                    <span className="name">{context.selectedCountry!=="" ? context.selectedCountry.length>10? context.selectedCountry?.substr(0,10)+"..." : context.selectedCountry: "Select Location"}</span>
                </div>
                <span className="ml-auto"><FaAngleDown/></span>
            </Button>


            <Dialog open={isOpenModal} onClose={()=>setisOpenModal(false)} className="locationModal" TransitionComponent={Transition}>
                <h4 className="mb-0">Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className="close_" onClick={()=>setisOpenModal(false)}><IoMdClose /></Button>
                <div className='headerSearch w-100'>
                    <input type='text' placeholder="Search your area..." onChange={filterList}/>
                    <Button><IoIosSearch/></Button>
                </div>

                <ul className="countryList mt-3">
                {
                    countryList?.length!==0 && countryList?.map((item, index)=>{
                        return(
                            <li key={index}><Button onClick={()=>selectCountry(index, item.country)}
                            className={`${selectedTab === index ? 'active' : ''}`}>{item.country}</Button></li>
                        )
                    })
                }
                    
                    

                </ul>

            </Dialog>
        </>
    )
}

export default CountryDropdown