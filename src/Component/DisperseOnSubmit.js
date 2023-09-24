import { useState } from "react"
import './Disperse.css';
import ErrorBtn from "./ErrorBtn";
import ValidatationError from "./ValidatationError";


function findDuplicateStrings(arr) {
    const stringIndices = {};

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i];

        if (!stringIndices[str]) {
            stringIndices[str] = [i];
        } else {
            stringIndices[str].push(i);
        }
    }

    const duplicateStrings = {};

    for (const key in stringIndices) {
        if (stringIndices[key].length > 1) {
            duplicateStrings[key] = stringIndices[key];
        }
    }

    return duplicateStrings;
}

export default findDuplicateStrings;




export function DisperseOnSubmit() {


    let [data, setData] = useState([]);

    const [validationError, setValidationError] = useState([]);

    const [toggle, setToggle] = useState(false);


    const handleInputChange = (e) => {
        const value = e.target.value;
        setData(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.trim()) {
            setValidationError('Input cannot be empty');
        }
        else if (data.trim()) {



            let trans = data.trim().split("\n");
            // console.log(trans);

            let amountarr = trans.map((curr, index) => {
                return curr.split(" ")[1];
            })

            let addressArr = trans.map((curr, index) => {
                return curr.split(" ")[0];
            })
            // console.log(addressArr);

            let err = [];
            for (let index = 0; index < amountarr.length; index++) {
                const element = amountarr[index];
                console.log(element);
                if (isNaN(element)) {

                    err.push(`Line ${index + 1} worng amount `);
                }

            }
            // setValidationError(`Line ${index + 1} worng amount`);
            // console.log(err);
            if (err.length > 0) {
                setValidationError(err);
                return;
            }
            else{
                setValidationError('');
            }

            //checking for duplicate

            const duplicates = findDuplicateStrings(addressArr);
            console.log(duplicates);
            if (Object.values(duplicates).length > 0) {
                const err = [];
                for (const key in duplicates) {
                    if (Object.hasOwnProperty.call(duplicates, key)) {
                        err.push(`Address ${key} encounter duplicate in Line : ${duplicates[key]}`)
                    }
                }
                // console.log(err);
                setValidationError(err);
                //setting the toggle
                setToggle(true);
                return;
            }


        }


        else {
            // Validation successful, we can perform further actions here
            setValidationError('');
        }
    };


    return (
        <>

            <div className="container">
                <form onSubmit={handleSubmit}>
                        <label htmlFor="inputField">Input:</label>
                    <div>
                        <textarea
                            rows={6}
                            cols={50}
                            value={data}
                            onChange={handleInputChange}
                        >

                        </textarea>

                    </div>

                    <div className="errorcontainer">

                        {validationError && <div className="error"> {validationError} </div>}
                        {toggle && <ErrorBtn data={data} setToggle={setToggle} setValidationError={setValidationError} setData={setData} />}
                    </div>
                    <div className="btncontainer">
                        <button id="btn" type="submit">Next</button>
                    </div>
                </form>
            </div>


        </>
    )
}