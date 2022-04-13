//import images
import More from '../img/more.svg'
//import css
import '../css/feed.css'
//import componets
import React, {useState, useEffect} from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import api from '../components/api'

function Feed (){

    const [post, setPost] = useState([])

    useEffect (() => {
        //action function
        api.get('/post')
        .then((response) => {
            setPost(response.data)
        })
        .catch(() => {
            console.log('erro')
        })
    }, [])

    function deletePost(id){
        api.delete(`/post/${id}`)

        setPost(post.filter(poste => poste.id !== id))
    }

    return(
        <div className="main d-flex flex-column align-items-center">
            {post.map((post, key) => {
                return(
                    <div className="cards col-12 col-lg-10" key={key}>
                        <div className="card ">
                            <span className="d-flex justify-content-between align-items-center">
                                <h2>{post.title}</h2>
                            </span>
                            <div className="line"></div>
                            <p>{post.decription}</p>

                            <div className="buttons d-flex justify-content-around">
                                <Link to={{pathname: `/edit/${post.id}`}}>
                                    <Button type={'button'} value={'Edit'} />
                                </Link>
                                <Link to={{pathname: `/read/${post.id}`}}>
                                    <Button type={'button'} value={'Ler mais'}  />
                                </Link>
                                <button className='btn del' onClick={() => deletePost(post.id)} >Apagar</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Feed;