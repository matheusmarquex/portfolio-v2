import { useState } from 'react';
import style from './Navbar.module.scss';

import { RxHamburgerMenu } from 'react-icons/rx';
import { CgClose } from 'react-icons/cg';
import { GrLinkedin, GrGithub } from 'react-icons/gr';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    
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
                        <div className={style.itemMenu}>
                            <p>Projetos</p>
                        </div>
                    </div>
                ) : (<></>)
            }
            <div className={style.menuDesk}>
                <div className={style.item}>
                    <p>Projetos</p>
                </div>
                <div className={style.social}>
                    <div className={style.itemSocial}>
                        <GrLinkedin />
                    </div>
                    <div className={style.itemSocial} id={style.git}>
                        <GrGithub />
                    </div>
                </div>


            </div>


        </div>

    );
}