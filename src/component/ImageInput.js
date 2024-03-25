import { ErrorMessage, Field, useFormikContext } from 'formik'
import React, { useState } from 'react'
import TextError from './TextError'
import { Image, Input } from 'semantic-ui-react';

function ImageInput(props) {
    const { label, name, ...rest } = props
    const [imagePreview, setImagePreview] = useState(null);
    const { setFieldValue } = useFormikContext()

    const handleImageFileChange = (event) => {
        const file = event.target.files[0]

        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(file)
            setFieldValue(name, file)
        } else {

            setImagePreview(null)
            setFieldValue(name, null)
        }
    }


    return (
        <div className='form-control'>

            <label htmlFor={name}>{label}</label>
            {imagePreview && <Image src={imagePreview} size='small' />}
            <Input type='file' onChange={handleImageFileChange} />


            <Field
                id={name}
                name={name}
                {...rest}></Field>
            <ErrorMessage component={TextError} name={name} />

        </div>
    )
}

export default ImageInput