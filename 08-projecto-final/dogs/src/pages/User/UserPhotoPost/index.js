import React from 'react';
import styles from './index.module.css';
import Input from "../../../components/forms/Input";
import Button from "../../../components/forms/Button";
import useForm from "../../../hooks/useForm";
import useFetch from "../../../hooks/useFetch";
import {PHOTO_POST} from "../../../api";
import Error from "../../../components/helper/Error";
import {useNavigate} from "react-router-dom";
import Head from "../../../components/helper/Head";

const UserPhotoPost = () => {
    const nome = useForm();
    const peso = useForm('number');
    const idade = useForm('number');
    const [img, setImg] = React.useState({});
    const {data, error, loading, request} = useFetch();
    const navigate = useNavigate();

    React.useEffect(()=>{
        if(data)navigate('/conta')
    }, [data, navigate])

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('img', img.raw);
        formData.append('nome', nome.value);
        formData.append('peso', peso.value);
        formData.append('idade', idade.value);
        const token = window.localStorage.getItem('token');
        const {url, options} = PHOTO_POST(formData, token)

        request(url, options);
    }

    function handleImgChange({target}) {
        console.log(URL.createObjectURL(target.files[0]));
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0]
        })
    }

    return (
        <section className={`${styles.photoPost} animeLeft`}>
            <Head title={'Nova postagem'} description={'Site Dogs, sua rede para cachoros.'}/>
            <form onSubmit={handleSubmit}>
                <Input label={'Nome'} name={'nome'} type={'text'} {...nome} />
                <Input label={'Peso'} name={'peso'} type={'text'} {...peso} />
                <Input label={'Idade'} name={'idade'} type={'text'} {...idade} />
                <input className={styles.file} type="file" name={'img'} id={'img'} onChange={handleImgChange}/>
                <Button disabled={loading}>Enviar</Button>
                <Error error={error}/>
            </form>

            <div>
                {
                    img.preview &&
                        <div className={styles.preview} style={{backgroundImage: `url(${img.preview})`}}/>
                }
            </div>
        </section>
    );
};

export default UserPhotoPost;
