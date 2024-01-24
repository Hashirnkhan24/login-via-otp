import { useEffect, useRef, useState } from "react"

function OtpLogin() {
    const [inputFocus, setInputFocus] = useState(0)
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]

    const shiftFocus = () => {
        setInputFocus((prevInput) => (prevInput + 1) % inputRefs.length)
    }
    useEffect(() => {
        if(inputFocus !== null && inputRefs[inputFocus] && inputRefs[inputFocus].current){
            inputRefs[inputFocus].current.focus()
        }
    }, [inputFocus])
    return (
        <div className="flex justify-center items-center m-4">
            {inputRefs.map((ref, index) => 
                <input 
                    type="text"
                    placeholder="-"
                    key={index}
                    ref={ref}
                    onChange={index < inputRefs.length - 1 ? shiftFocus : undefined}
                    className="w-16 h-16 mx-2 text-center border rounded focus:outline-none focus:border-blue-500"
                />
            )}
            {/* <input type="text" ref={inputRefs[0]} onChange={shiftFocus}/>
            <input type="text" ref={inputRefs[1]} onChange={shiftFocus}/>
            <input type="text" ref={inputRefs[2]} onChange={shiftFocus}/>
            <input type="text" ref={inputRefs[3]} /> */}
        </div>
    )
}

export default OtpLogin