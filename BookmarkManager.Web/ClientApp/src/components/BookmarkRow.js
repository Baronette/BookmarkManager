import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookmarkRow = ({ bookmark, onDeleteClick, onUpdateClick}) => {
    const [editState, setEditState] = useState(false);
    const title = bookmark.title;
    const onTextChange = e => {
        bookmark.title = e.target.value;
    }
    return (<tr>
        <td>{editState ? <input className="form-control" type='text' defaultValue={bookmark.title} onChange={onTextChange} /> : bookmark.title}</td>
        <td><a href={bookmark.url} target="_blank"></a></td>
        <td>
            {!editState && <button className='btn btn-success mr-3' onClick={() => setEditState(true)}>Edit Title</button>}

            {editState && <><button className='btn btn-warning mr-3' onClick={() =>[onUpdateClick, setEditState(false)]}>Update</button>
                <button className='btn btn-info mr-3' onClick={() => [setEditState(false), bookmark.title = title]}>Cancel</button></>}

            <button className='btn btn-danger' onClick={onDeleteClick}>Delete</button></td>
    </tr>)
}
export default BookmarkRow;