import React, {useState} from "react";
import {TbClick} from "react-icons/tb";
import "./Process.css";
import blocks from "./AboutProcess-block.json";

function Process () {

    const [VisibleBlocks, SetVisibleBlocks] = useState([...blocks.filter(e=> e.visible == true)]);


    const close =  function(eliment){
        SetVisibleBlocks([...VisibleBlocks.filter(e=> e!==eliment)])
    }
    const open = function(id){
        if (VisibleBlocks.length === 0) {
            const NewBlock = blocks.find(e => e.id == id)
            NewBlock.visible = true
            SetVisibleBlocks([NewBlock])
        } else if (VisibleBlocks.some(item => item.id !== id)) {        
            const NewBlock = blocks.find(e => e.id == id)
            NewBlock.visible = true
            SetVisibleBlocks([...VisibleBlocks.concat(NewBlock)])
        }
        else return
    }
    
    return(
        <div id="process-container" className="process-container">
            <h3>
                Посмотрите как происходит процесс газификации наших домов
            </h3>
            <div className="map">
                {
                    VisibleBlocks.map(eliment =>(
                        <>
                            <div className={eliment.visible ? `AboutProcess-block AboutProcess-block${eliment.id}` : ""} key={eliment.id}>
                                <div className="blockHeader">
                                    <h4 className="blockHeader-text">{eliment.title}</h4>
                                    <div className="AboutProcess-buttom-close" onClick={() => close(eliment)}>+</div>
                                </div>
                                <p className="block-paragraph">
                                    {eliment.paragraph}
                                </p>
                            </div>
                        </>
                    ))
                }
                <div className="button-AboutProcess-map">
                    <div className="button-AboutProcess button-AboutProcess-position1" onClick={() => open(1)}>
                        <TbClick className="click" alt="click"/>
                    </div>
                    <div className="button-AboutProcess button-AboutProcess-position2" onClick={() => open(2)}>
                        <TbClick className="click" alt="click"/>
                    </div>
                    <div className="button-AboutProcess button-AboutProcess-position3" onClick={() => open(3)}>
                        <TbClick className="click" alt="click"/>
                    </div>
                    <div className="button-AboutProcess button-AboutProcess-position4" onClick={() => open(4)}>
                        <TbClick className="click" alt="click"/>
                    </div>
                    <div className="button-AboutProcess button-AboutProcess-position5" onClick={() => open(5)}>
                        <TbClick className="click" alt="click"/>
                    </div>
                    <div className="button-AboutProcess button-AboutProcess-position6" onClick={() => open(6)}>
                        <TbClick className="click" alt="click"/>
                    </div>
                    <div className="button-AboutProcess button-AboutProcess-position7" onClick={() => open(7)}>
                        <TbClick className="click" alt="click"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Process;

