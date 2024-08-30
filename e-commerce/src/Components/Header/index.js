import { Button } from "@mui/material";
import { FiUser } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import CountryDropdown from '../ContryDropdown';


const Header =()=>{

    return(
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay</p>
                    </div>
                </div>

                {/* <p className="text-primary">Nguyen Thanh Sieu</p> */}
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={"/"}><img src={Logo} alt="Logo"></img></Link>
                                {/* <Link to={"/"}><img src={Logo} alt="Logo"></img></Link> */}
                            </div>

                            <div className='col-sm-10 d-flex align-items-center part2'>
                                <CountryDropdown/>
                                

                                {/*Header Search Start Here*/}
                                <div className='headerSearch ml-3 mr-3'>
                                    <input type='text' placeholder="Search for products..."/>
                                    <Button><IoIosSearch/></Button>
                                </div>

                                {/*Header Search Ends Here*/}
                                <div className="part3 d-flex align-items-center ml-auto">
                                    <Button className="circle mr-3"><FiUser />
                                    </Button>
                                    <div className="ml-auto cartTab d-flex align-items-center">
                                        <span className="price">$ 3.29</span>
                                        <div className="position-relative ml-2">
                                            <Button className="circle "><IoBagOutline />
                                            </Button>
                                            <span className="count d-flex align-items-center
                                            justify-content-center">1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

            </div>
        </>
    )
}

export default Header;