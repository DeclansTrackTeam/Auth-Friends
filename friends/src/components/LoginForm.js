import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {axiosWithAuth} from "../utils/axiosWithAuth"
const initialFormValues = {
    username:'',
    password:''
}
function LoginForm(props) {

    const [formValues, setFormValues] = useState(initialFormValues);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    // const submit = (e) => {
    //     e.preventDefault()
    //     axiosWithAuth()
    //         .post('/api/login')
    //         .then(res => {
    //             localStorage.setItem("token", res.data.payload);
    //             props.history.push("/protected")
    //         })
    //         .catch(err => {
    //             console.log("fail", err)
    //         }) 
    //         console.log("click")
    // }
    const onSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', formValues)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/protected')
                console.log("success", res.data)
            })
            .catch(err => {
                console.log("fail", err)
            }) 
    } 
    return (
        <div>
            <form onSubmit = {onSubmit}>
                <label>Username: 
                    <input
                    name = "username"
                    value = {formValues.username}
                    onChange = {handleChange}
                    type = "text"/>
                </label>

                <label>Password: 
                    <input
                        name = "password"
                        value = {formValues.password}
                        onChange = {handleChange}
                        type = "text"/>
                </label>
            </form>
            <button>Submit</button>
        </div>
    )
}

export default LoginForm
