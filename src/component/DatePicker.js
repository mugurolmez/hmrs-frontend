
import React from 'react'
import { ErrorMessage, Field } from 'formik';
import DateView from 'react-datepicker'
import TextError from './TextError'
import "react-datepicker/dist/react-datepicker.module.css";

function DatePicker(props) {
    const { label, name, ...rest } = props
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    ({ form, field }) => {
                        const { setFieldValue } = form
                        const { value } = field
                        return (<DateView
                            id={name}{...field}{...rest}
                            selected={value}
                            onChange={val => setFieldValue(name, val)}
                        />
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />

        </div>
    )
}

export default DatePicker