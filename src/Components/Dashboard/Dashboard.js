import { useState } from "react";
import "./Dashboard.css"
export default function Dashboard() {
    const[degree,setDegree]=useState(0);
    const[convertintounit,setConvertInToUnit]=useState();
    const[inputunit,setInputUnit]=useState();
    const[outputunit,setOutputUnit]=useState();
    function handleDegreeChange(event){
        setDegree(event.target.value);
    }
    function handleConvertInToUnitChange(event){
        setConvertInToUnit(event.target.value);
    }
    function handleInputUnitChange(event){
        setInputUnit(event.target.value);
    }
    function handleOutputUnitChange(event){
        setOutputUnit(event.target.value);
    }

    function handleToConvertClick(){
        console.log(degree,convertintounit, inputunit,outputunit);
        if(convertintounit===Fahrenheit){
            setOutputUnit(Fahrenheit=(degree*9/5)+32);
        }
        else if(convertintounit===Celsius){

            setOutputUnit(Celsius=(degree*5/9)+32);
        }
    
    }
    
    return (
        <div className="background">
            <div className="conversionBox">
                {/* ......Right side Section..... */}
                <div className="innerSection">
                    <div className="inputSection">
                    <div className="inputSectionHeader">Enter Temperature</div>
                    <div>
                        <div className="label"><label>Degree</label></div>
                        <div>
                            <input  type="text" value={degree} onChange={handleDegreeChange}/><select  type="text" value={inputunit} onChange={handleInputUnitChange} className="selectOptions">
                                <option>°C</option>
                                <option>°F</option>
                            </select>
                        </div>
                    </div>
                    <div className="">
                        <div className="label"><label>Convert In</label></div>
                        <div>
                            <select  type="text" value={convertintounit} onChange={handleConvertInToUnitChange}className="innerSelectOption">
                                <option>Fahrenheit(°f)</option>
                                <option>Celsius(°C)</option>
                            </select>
                        </div>
                    </div>
                    <div className="InnerButton">
                        <button onClick={handleToConvertClick}>Convert</button>
                    </div>
                    </div>
                </div>
                {/*.... Left side Section.... */}
                <div className="outerSection">
                    <div type="number" value={outputunit} onChange={handleOutputUnitChange} className="outerSectionText">32°F</div>
                </div>
            </div>

        </div>

    );
}