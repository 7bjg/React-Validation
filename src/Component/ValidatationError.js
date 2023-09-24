import React from 'react'

const ValidatationError = (props) => {
    // console.log(props.errors.split(">"))
    return (

        // props.errors.forEach(element => {
        //     <div>
        //         {element}
        //         {console.log(typeof(props.errors))}
        //     </div>
        <>
            {props.errors.map((ele) => {
                <div>
                    <p>

                        {ele}
                    </p>
                    {console.log(ele)}
                </div>
            })
            }
        </>
    )
}

export default ValidatationError