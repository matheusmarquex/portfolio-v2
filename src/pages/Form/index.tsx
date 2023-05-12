import { FormEvent, useRef, useState } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import style from './Form.module.scss';
import { GrGithub, GrLinkedin } from 'react-icons/gr';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

type EmailParams = {
    name: string;
    email: string;
    message: string;
};

export default function Form() {

    const [isSending, setIsSending] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const formRef = useRef<HTMLFormElement>(null);

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);
        setErrorMessage('');

        const { name, email, message } = formRef.current.elements as unknown as EmailParams;

        try {
            await emailjs.send(
                'service_u0k1c0n',
                'template_c2qz819',
                {
                    name: name.value,
                    email: email.value,
                    message: message.value,
                },
                'STeYxq_DFDJ2Qp5Pg'
            );
            setIsSuccess(true);
        } catch (err) {
            setErrorMessage('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
        } finally {
            setIsSending(false);
        }
    };


    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     console.log(e);

    //     emailjs.sendForm("service_u0k1c0n", "template_c2qz819", form.current, 'STeYxq_DFDJ2Qp5Pg')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // };

    return (
        <div className={style.container}>

            <div className={style.left}>
                <h1>&lt;Matheus Marques /&gt;</h1>
                <a href='Matheus-MarquesCV.pdf' download="Matheus-MarquesCV.pdf">
                <button>Baixar Currículo</button>
                </a>
                <div className={style.social}>
                    <div>
                        {/* <a href="https://web.whatsapp.com/send?phone=5511973784125&text=oi"> */}
                        <a href="https://api.whatsapp.com/send?phone=5511973784125&text=Oi">
                            <IoLogoWhatsapp />
                        </a>
                    </div>
                    <div>
                        <a href="https://linkedin.com/in/matheusmarquex">
                            <GrLinkedin />
                        </a>
                    </div>
                    <div>
                    <a href="https://github.com/matheusmarquex">
                        <GrGithub />
                        </a>
                    </div>
                </div>
            </div>
            <div className={style.right}>
                <p>Me mande uma mensagem </p>
                <form onSubmit={handleFormSubmit} ref={formRef}>
                    <div>
                        <label htmlFor="">Nome<span style={{color:"#c16e6e"}}> *</span></label>
                        <input type="text" placeholder='Digite seu nome' name='name' />
                    </div>
                    <div>
                        <label htmlFor="">E-mail<span style={{color:"#c16e6e"}}> *</span></label>
                        <input type="text" placeholder='Digite seu e-mail' name='email' />
                    </div>
                    <div>
                        <label htmlFor="">Mensagem<span style={{color:"#c16e6e"}}> *</span></label>
                        <textarea id="" placeholder='Digite sua mensagem' name='message' />
                    </div>
                    <div>
                        <button type="submit" disabled={isSending}>
                            {isSending ? 'Enviando...' : 'Enviar'}
                        </button>
                    </div>


                </form>
                    {isSuccess && (
                        <Stack sx={{ width: '15%', position: 'fixed', top: "7rem", right: "1rem" }} spacing={2}>
                            <Alert severity="success">Mensagem enviada com sucesso!</Alert>
                        </Stack>
                    )}
                    {errorMessage && (
                        <Stack sx={{ width: '15%', position: 'fixed', top: "7rem", right: "1rem" }} spacing={2}>
                            <Alert severity="error">Erro ao enviar contato!</Alert>
                        </Stack>
                    )}
            </div>
        </div>
    );
}