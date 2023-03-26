import React, {useState, useEffect, Children, cloneElement} from "react";
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import "./OurProjects.css"


function Carousel ({children}){

    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    const handleLeftArrowClick = () => {
        setOffset((currentOffset)=>{
            if (currentOffset >= 0){
                return -100
            }
            else{return currentOffset + 100}
        })
    }
    const handleRightArrowClick = () => {
        setOffset((currentOffset)=>{
            if (currentOffset <= -100){
                return 0
            }
            else{return currentOffset - 100}
        })
    }

    useEffect((child)=>{
        setPages(
            Children.map(children, (child) =>
                {return cloneElement(child,{
                    style:{
                        height: '100%',
                        minWidth: '100%',
                        maxWidth: '100%',
                    }
                })}
            )
        )
    },[])

    return(
        <div className="main-conainer">
            <BsArrowLeftShort className="arrow arrow-left" onClick = {handleLeftArrowClick}/>
            <div id="window-carousel" className="window-carousel">
                <div
                className="all-pages-container"
                style={{
                transform: `translateX(${offset}%)`,
                }}
                >
                    {pages}
                </div>
            </div>
            <BsArrowRightShort className="arrow arrow-right" onClick = {handleRightArrowClick}/>
        </div>
    )
}
export {Carousel};