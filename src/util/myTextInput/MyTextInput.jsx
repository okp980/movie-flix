import React from 'react'
import { useField } from 'formik'

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div className='formControl'>
            <label htmlFor={props.name} >{label}</label>
            <input  {...field} {...props} />
            {meta.touched && meta.error ? <small style={{ color: 'red' }}>{meta.error}</small> : null}
        </div>
    )
}

export default MyTextInput
