import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Post() {

    const posts = useSelector((state) => state.allPosts.posts)

    const renderList = posts.map((post, index) => {
        const { symbol, name, price, rank } = post;
        const imageUrl = `https://coinlib.io/static/img/coins/small/${symbol.toLowerCase()}.png`
        return (

            <Link key={index} to={`/post/${symbol}`} style={{ textDecoration: 'none' }}>
                <div className="list-group-item list-group-item-action ">
                    <div className='listItemWrapper'>

                        <div className='imageNameWrapper'>

                            <p>{rank}</p>


                            <img src={imageUrl} className="ms-4 coin-icon img-thumbnail" alt="..." />

                            <h6 className='ms-4'>{name}</h6>
                        </div>
                        <span className='ms-4'>$ {price}</span>
                    </div>
                </div>
            </Link>
        )
    });

    return (
        <>{renderList}</>



    )
}

export default Post;
