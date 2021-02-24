import React, { useState, useEffect} from 'react'
import {axiosWithAuth} from "../utils/axiosWithAuth"

const initialFormValues = {
    name: '',
    age: null,
    email: ""
}
const initialState = []
export default function AddFrom() {

    const [formValues, setFormValues] = useState(initialFormValues);
    const [friendList, setFriendList] = useState(initialState);
    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) =>{
        e.preventDefault();
        axiosWithAuth()
            .post("/api/frineds")
            .then(res => {
                setFriendList(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <form onSubmit = {submit}>
                <label> Name: 
                    <input
                    type = "text"
                    name = "name"
                    value = {formValues.name}
                    onChange = {handleChange}
                    />
                </label>

                <label>Age: 
                    <input/>
                </label>

                <label>Email: 
                    <input/>
                </label>
            </form>
        </div>
    )
}
