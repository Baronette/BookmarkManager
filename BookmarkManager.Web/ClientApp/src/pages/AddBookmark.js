import React, {useState} from 'react';
import { useUser } from '../UserContext';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
const AddBookmark = () => {
    const [title, setTitle] = useState();
    const [url, setUrl] = useState();
    const {user} = useUser();
    const history = useHistory();

    const onFormSubmit = async (e) => {
        e.preventDefault();
        await axios.post('api/bookmarks/addbookmark', {title, url, userId: user.id})
        history.push('/bookmarks');
    }

    return (
        <div className='container col-md-5 mt-3'>
            <form className='card card-body bg-light' onSubmit={onFormSubmit}>
                <input type='text' onChange={e => setTitle(e.target.value)} className='form-control mt-3' placeholder='Title'></input>
                <input type='text' onChange={e => setUrl(e.target.value)} className='form-control mt-3' placeholder='url'></input>
                <button className='btn btn-primary col-md-4 mt-3'> Add</button>
            </form>
        </div>
    )
}
export default AddBookmark;