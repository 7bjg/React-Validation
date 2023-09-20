import { useState } from "react"
import './Disperse.css';
import ErrorBtn from "./ErrorBtn";


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






export function DisperseOnSubmit() {

    let [data, setData] = useState("");

    const [validationError, setValidationError] = useState('');



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
            console.log(trans);

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
                
                return;
            }


        }


        else {
            // Validation successful, you can perform further actions here
            setValidationError('');
        }
    };


    return (
        <>

            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="inputField">Input:</label>
                        <textarea
                            rows={6}
                            cols={50}
                            value={data}
                            onChange={handleInputChange}
                        >

                        </textarea>

                    </div>


                    {validationError && <p className="error"> {validationError} </p>}
                    <button type="submit">Submit</button>
                </form>
            </div>


        </>
    )
}