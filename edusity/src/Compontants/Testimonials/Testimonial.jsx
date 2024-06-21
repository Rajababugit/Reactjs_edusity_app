import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonial = () => {
    const slider = useRef();
    let tx =0;
const slideForword=()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

const slideBackword=()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForword} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackword}/>
        <div className="slider">
            <ul ref= {slider}>
                <li>
                    <div className="slider">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>willson jack</h3>
                                <span>Edusity USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis provident 
                            beatae ut blanditiis rem nihil culpa officiis totam odit. In expedita officiis autem amet, nostrum incidunt.
                            orem ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis provident 
                            beatae ut blanditiis rem nihil culpa officiis totam odit. In expedita officiis autem amet</p>
                    </div>
                </li>
                <li>
                    <div className="slider">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Clarck Hanneryk</h3>
                                <span>Edusity USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis provident 
                            beatae ut blanditiis rem nihil culpa officiis totam odit. In expedita officiis autem amet, nostrum incidunt.
                            orem ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis provident 
                            beatae ut blanditiis rem nihil culpa officiis totam odit. In expedita officiis autem amet</p>
                    </div>
                </li>
                <li>
                    <div className="slider">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Samcuran </h3>
                                <span>Edusity USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis provident 
                            beatae ut blanditiis rem nihil culpa officiis totam odit. In expedita officiis autem amet, nostrum incidunt.
                            orem ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis provident 
                            beatae ut blanditiis rem nihil culpa officiis totam odit. In expedita officiis autem amet</p>
                    </div>
                </li>
                <li>
                    <div className="slider">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>brawo will</h3>
                                <span>Edusity USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis provident 
                            beatae ut blanditiis rem nihil culpa officiis totam odit. In expedita officiis autem amet, nostrum incidunt.
                            orem ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis provident 
                            beatae ut blanditiis rem nihil culpa officiis totam odit. In expedita officiis autem amet</p>
                    </div>
                </li>


            </ul>
        </div>
    </div>
  )
}

export default Testimonial