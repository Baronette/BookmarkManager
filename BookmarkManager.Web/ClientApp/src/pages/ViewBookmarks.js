import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../UserContext';
import { Link } from 'react-router-dom';
import BookmarkRow from '../components/BookmarkRow';
const ViewBookmarks = () => {
    const [bookmarks, setBookmarks] = useState();
    const { user } = useUser();

    useEffect(() => {
        getBookmarks();
    }, []);

    const getBookmarks = async () => {
        const { data } = await axios.get('api/bookmarks/getall');
        setBookmarks(data);
    };

    const onDeleteClick = async (id) => {
        await axios.post(`api/bookmarks/delete?id=${id}`);
        getBookmarks();
    }
    const onUpdateClick = async (title, id) => {
        await axios.post('api/bookmarks/update', { title, id });
        getBookmarks();
    }

    return (
        <div className='container col-md-8'>
            <h3 className='mt-3'>Welcome back {user.firstName} {user.lastName}</h3>
            <Link to='/addbookmark' className='btn btn-info mb-3'>Add Bookmark</Link>
            <table className='table table-hover table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Url</th>
                        <th>Edit / Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {bookmarks && bookmarks.map(b => <BookmarkRow key={b.id}
                        bookmark={b}
                        onDeleteClick={() => onDeleteClick(b.id)}
                        onUpdateClick={() => onUpdateClick(b.title, b.id)}
                    />)
                    }
                </tbody>
            </table>
        </div>

    )
}
export default ViewBookmarks;