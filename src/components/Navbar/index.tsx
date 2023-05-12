import { useRef, useState } from 'react';
import style from './Navbar.module.scss';

import { RxHamburgerMenu } from 'react-icons/rx';
import { CgClose } from 'react-icons/cg';
import { GrLinkedin, GrGithub } from 'react-icons/gr';
import { IoLogoWhatsapp } from 'react-icons/io';

export default function Navbar(props: { onItemClick: (componentName: string) => void }) {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleMenuItemClick(componentName: string): void {
        setIsOpen(false);
        props.onItemClick(componentName);
    }


    return (
        <div className={style.container}>
            <div className={style.logoAndHamb}>
                <div className={style.logo}>
                    <h1>&lt;Matheus Marques /&gt;</h1>
                </div>
                <div className={style.hamburgerDiv}>
                    {
                        !isOpen ? (
                            <div onClick={() => setIsOpen(true)}>
                                <RxHamburgerMenu />
                            </div>
                        ) : (
                            <div onClick={() => setIsOpen(false)}>
                                <CgClose />
                            </div>
                        )
                    }
                </div>
            </div>
            {
                isOpen ? (
                    <div className={style.menu}>
                        <div className={style.itemMenu} onClick={() => handleMenuItemClick('Hello')}>
                            <p>Sobre Mim</p>
                        </div>
                        <div className={style.itemMenu} onClick={() => handleMenuItemClick('Tech')}>
                            <p>Conhecimentos</p>
                        </div>
                        <div className={style.itemMenu} onClick={() => handleMenuItemClick('Projects')}>
                            <p>Projetos</p>
                        </div>
                        <div className={style.social}>
                            <div className={style.itemSocial}>
                                <a href="https://api.whatsapp.com/send?phone=5511973784125&text=Oi">
                                    <IoLogoWhatsapp />
                                </a>
                            </div>
                            <div className={style.itemSocial}>
                                <a href="https://linkedin.com/in/matheusmarquex">
                                    <GrLinkedin />
                                </a>
                            </div>
                            <div className={style.itemSocial} id={style.git}>
                                <a href="https://github.com/matheusmarquex">
                                    <GrGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                ) : (<></>)
            }
            <div className={style.menuDesk}>
                <div className={style.itemMenu} onClick={() => handleMenuItemClick('Hello')}>
                    <p>Sobre Mim</p>
                </div>
                <div className={style.itemMenu} onClick={() => handleMenuItemClick('Tech')}>
                    <p>Conhecimentos</p>
                </div>
                <div className={style.itemMenu} onClick={() => handleMenuItemClick('Projects')}>
                    <p>Projetos</p>
                </div>
                <div className={style.social}>
                    <div className={style.itemSocial}>
                        <a href="https://api.whatsapp.com/send?phone=5511973784125&text=Oi">
                            <IoLogoWhatsapp />
                        </a>
                    </div>
                    <div className={style.itemSocial}>
                        <a href="https://linkedin.com/in/matheusmarquex">
                            <GrLinkedin />
                        </a>
                    </div>
                    <div className={style.itemSocial} id={style.git}>
                        <a href="https://github.com/matheusmarquex">
                            <GrGithub />
                        </a>
                    </div>
                </div>


            </div>


        </div>

    );
}