import React, { useEffect } from 'react';
import Post from './Post';
import { setPosts } from '../redux/actions/postActions';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function PostList() {

    const dispatch = useDispatch();


    const fetchPosts = async () => {
        const response = await axios
            .get("https://coinlib.io/api/v1/coinlist?key=955d48a7a8fd0c60&page=1")
            .catch((err) => {
                console.log('Err', err)
            })
        dispatch(setPosts(response.data.coins))

    }


    useEffect(() => {
        fetchPosts();

    }, []);



    return (
        <div className='postListComponent ui grid container'>

            <div className="list-group">
                <div className="listTitle list-group-item list-group-item-action ">
                    <div className='listItemWrapper'>

                        <div className='imageNameWrapper'>

                            <h6>#</h6>


                            <h6 className='ms-4'>Name</h6>


                        </div>
                        <h6 className='pricePaddingFix'>Price</h6>
                    </div>
                </div>
                
                <Post />
            </div>
        </div>

    )
}

export default PostList;
