


import React, { useState } from 'react'
import Signup from '../../components/Signup'
const SingUp = () => {


    const [form, setForm] = useState({
        firstName: "",
        lastName: "", email: "", password: "", confirmPassword: "",userName: ""
    });
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "", email: "", password: "",confirmPassword: "", userName: ""
    })
    // console.log('=======errors',errors)
    //console.log('=======form outside========',form)
    const onChange = (name, value) => {

        errors[name]

        console.log('==========errors[name]',errors[name])

        setForm({
            ...form,
            [name]: value
        })
        if( value !== '' && errors[name] !== ''){
            setErrors(prevState => {
                return {
                    ...prevState,
                    [name]: ''
                }
            })
        }
        // else{
        //     setErrors(prevState => {
        //         return {
        //             ...prevState,
        //             [name]: 'this field is required'
        //         }
        //     })
        // }
    }
    const onSubmit = () => {
        //validations
      
        if (!form.userName) {
            setErrors(prevState => {
                return {
                    ...prevState,
                    userName: 'user name is required'
                }
            })
        }
        if (!form.firstName) {
            setErrors(prevState => {
                return {
                    ...prevState,
                    firstName: 'first name is required'
                }
            })
        }
        if (!form.lastName) {
            setErrors(prevState => {
                return {
                    ...prevState,
                    lastName: 'last name is required'
                }
            })
        }
        if (!form.email) {
            setErrors(prevState => {
                return {
                    ...prevState,
                    email: 'email  is required'
                }
            })
        }
        if (!form.password) {
            setErrors(prevState => {
                return {
                    ...prevState,
                    password: 'password is required'
                }
            })
        }
        if (!form.confirmPassword) {
            setErrors(prevState => {
                return {
                    ...prevState,
                    confirmPassword: 'confirm password is required'
                }
            })
        }
    }
    return (

        <Signup
            onChange={onChange}
            onSubmit={onSubmit}
            form={form}
            errors={errors}
            setErrors={setErrors}
            setForm={setForm}
            />

    )
}

export default SingUp
