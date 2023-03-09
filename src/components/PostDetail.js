import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedPost, removeSelectedPost } from '../redux/actions/postActions';

function PostDetail() {

    const post = useSelector((state) => state.post)
    const { postId } = useParams()
    const dispatch = useDispatch();

    const fetchPost = async () => {
        const response = await axios
            .get(`https://coinlib.io/api/v1/coin?key=955d48a7a8fd0c60&symbol=${postId}`)
            .catch((err) => {
                console.log('Err', err)
            })
        dispatch(selectedPost(response.data))

    }

    console.log(post.symbol)

   
    


    useEffect(() => {

        if (postId && !postId == "") {

            fetchPost();
        }

        return () => {
            dispatch(removeSelectedPost())
        }

    }, [postId]);

    const {symbol , name, price, rank, market_cap, total_volume_24h, low_24h, high_24h} = post;

    const imageUrl = `https://coinlib.io/static/img/coins/${postId.toLowerCase()}.png`

    return (
        <div>

            {Object.keys(post).length === 0 ? (
                <div className='loadingElement'><h4>...Loading</h4></div>
            ) : (
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="project-info-box mt-0">
                                <h5>PROJECT DETAILS</h5>
                                <p className="mb-0">Hello, I hope you guys like this Project and also I'd Like to take a moment to thank the API providers For their Amazing service. <br /> Powered by <a href="https://coinlib.io/apidocs">Coinlib API</a></p>
                            </div>

                            <div className="project-info-box">
                                <p><b>Rank:</b> {rank}</p>
                                <p><b>Symbol:</b> {symbol} CO</p>
                                <p><b>Name:</b> {name}</p>
                                <p><b>Price:</b> $ {price}</p>
                                <p><b>High 24H:</b> $ {high_24h}</p>
                                <p className="mb-0"><b>Low 24H:</b> $ {low_24h}</p>
                            </div>

                            <div className="project-info-box mt-0 mb-0">
                                
                            </div>
                        </div>

                        <div className="col-md-7">
                            <img src={imageUrl} alt="Coin-Symbol" className="rounded" />
                            <div className="project-info-box">
                                <p><b>Market Cap:</b> {market_cap} </p>
                                <p><b>Total Volume 24H:</b> {total_volume_24h}</p>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>

    );
}

export default PostDetail;
