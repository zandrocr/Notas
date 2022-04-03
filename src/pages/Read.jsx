import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
//import axios
import api from "../components/api";

import Button from '../components/Button'

function Edit (){

    const { id } = useParams()

    const [post, setPost] = useState([])

    useEffect(() => {
        api.get(`/post/${id}`)
        .then((response) => {
            setPost(response.data)
        })
    }, [])


    return(
        <div>
            <div className="container d-flex justify-content-around">
                <div className="cardPost col-12 col-lg-10 d-flex flex-column justify-content-around">
                    <div className="fields d-flex flex-column text-center">
                        <h2>{post.title}</h2>
                        <div className="line"></div>
                    </div>

                    <div className="cardBody">
                        <div>
                            <div className="fields d-flex flex-column">
                                <p>{post.content}</p>
                            </div>
                        </div>
                    </div>

                    <div className="btn">
                        <Link to={'/'} >
                            <Button type={'button'} value={'Voltar'} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit;

