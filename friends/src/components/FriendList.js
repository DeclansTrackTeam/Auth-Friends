import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from "../utils/axiosWithAuth"
import Friend from "./Friend"
import AddForm from "./AddForm"

const initialState = []
function FriendList() {
    const [friendList, setFriendList] = useState(initialState);
    useEffect(async () => {
        try{
            const { data } = await axiosWithAuth()
            .get("/api/friends");
            setFriendList(data);
            console.table(data)
        } catch (err) {
            console.log( err )
        }
    }, [])

    return (
        <div>
            <AddForm/>
            <div>
                {friendList.map((friend) => {
                    return <Friend friend = { friend }/>
                })}
            </div>
        </div>
    )
}

export default FriendList
