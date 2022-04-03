//import react
import React, {useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
//import hooks
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
//import axios
import api from "../components/api";

const validationPost = yup.object().shape({
    title: yup.string().required('O título é obrigatório.').max(30, 'O título dever conter no maximo 30 caracteres.') ,
    decription: yup.string().required('A descrição é obrigatório.').max(120, 'A descrição dever conter no maximo 120 caracteres.') ,
    content: yup.string().required('O conteúdo é obrigatório.').max(500, 'O conteúdo dever conter no maximo 500 caracteres.')
})

function Edit (){

    const { id } = useParams()

    let navigate = useNavigate()

    const { register, handleSubmit, formState: {errors}, reset } = useForm({
        resolver: yupResolver(validationPost)
    })

    const addPost = data => api.put(`/post/${id}`, data)
    .then(() => {
        console.log('Ok')
        navigate('../')
    })
    .cath(() => {
        console.log(erros)
    })

    useEffect(() => {
        api.get(`/post/${id}`)
        .then((response) => {
            reset(response.data)
        })
    }, [])


    return(
        <div>
            <div className="container d-flex justify-content-around">
                <div className="cardPost col-12 col-lg-10 d-flex flex-column justify-content-around">
                    <div className="fields d-flex flex-column text-center">
                        <h2>Editar postagem</h2>
                        <div className="line"></div>
                    </div>

                    <div className="cardBody">
                        <form onSubmit={handleSubmit(addPost)}>
                            <div className="fields d-flex flex-column">
                                <label>Título</label>
                                <input type="text" name="title" {...register('title')} />
                                <p className="erro-message">{errors.title?.message}</p>
                            </div>
                            <div className="fields d-flex flex-column">
                                <label>Descrição</label>
                                <input type="text" name="decription" {...register('decription')} />
                                <p className="erro-message">{errors.decription?.message}</p>
                            </div>
                            <div className="fields d-flex flex-column">
                                <label>Conteúdo</label>
                               <textarea cols="30" rows="10" name="content" {...register('content')}></textarea>
                               <p className="erro-message">{errors.content?.message}</p>
                            </div>
                            <div className="fields d-flex justify-content-around">
                                <button className="btn">Salvar</button>
                                <Link to={'/'}>
                                    <button className="btn" type="button">Cancelar</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit;
