import React from 'react'
import web from '../src/images/www-animate.svg'
import { NavLink } from 'react-router-dom';


const Home = () => {
  return (
    <>
        <section id="header" className='d-flex align-item-center'>
        <div className='container-fluid nav_bg'>
        <div className='row'>
            <div className='col-10 mx-auto'>
            <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'  >
                    <h1>Grow your bussiness with <strong className="text-primary" >DipuTechnical</strong></h1>
                    <h2 className='my-3'>
                        We are the team of talented developer making Websites
                    </h2>
                    <div className='mt-3'>
                        <NavLink to="/login" className='btn btn-outline-primary'>Login</NavLink>
                    </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                    <img src={web} className='img-fluid animated' alt="homeimg"/>
                </div>
                </div>
            </div>
        </div>
        </div>
        </section>
    </>
  )
}

export default Home;