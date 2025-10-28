import { useState } from "react";
import "./Dashboard.css"
export default function Dashboard() {
    const[degree,setDegree]=useState(0);
    const[inputunit,setInputUnit]=useState("C");
    const[converttounit,setConvertToUnit]=useState("Fahrenheit");
    const[output,setOutput]=useState(32);
    const[outputunit,setOutputUnit]=useState("F");

    function handleDegreeChange(event){
        setDegree(event.target.value);
    }
    function handleInputUnitChange(event){
        setInputUnit(event.target.value);
        if(event.target.value==="C"){
            setConvertToUnit("Fahrenheit")
        }
        else{
            setConvertToUnit("Celsius")
        }
    }
    function handleConvertToUnitChange(event){
        setConvertToUnit(event.target.value);
    }
    function handleToConvert(){
        console.log(degree,inputunit,converttounit);
        if(converttounit==="Fahrenheit"){

            setOutput((degree*9/5)+32);
            setOutputUnit("F")
          }
          else if(converttounit==="Celsius"){
            setOutput((degree*5/9)+32);
            setOutputUnit("C")
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
                                <input type="text" value={degree} onChange={handleDegreeChange}/>
                                <select  value={inputunit} onChange={handleInputUnitChange}className="selectOptions">
                                    <option value={"C"}>°C</option>
                                    <option value={"F"}>°F</option>
                                </select>
                            </div>
                        </div>
                        <div className="">
                            <div className="label"><label>Convert In</label></div>
                            <div>
                                <select  value={converttounit} onChange={handleConvertToUnitChange} className="innerSelectOption">
                                    <option value={"Fahrenheit"}>Fahrenheit(°f)</option>
                                    <option value={"Celsius"}>Celsius(°C)</option>
                                </select>
                            </div>
                        </div>
                        <div className="InnerButton">
                            <button onClick={handleToConvert}>Convert</button>
                        </div>
                    </div>
                </div>
                {/*.... Left side Section.... */}
                <div className="outerSection">
                    <div className="outerSectionText">{output} <sup>°{outputunit}</sup></div>
                </div>
            </div>

        </div>

    );
}