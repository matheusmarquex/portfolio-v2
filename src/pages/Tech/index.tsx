import style from "./Tech.module.scss";
import { techImgs } from "./images";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


export default function Tech() {

    return (
        <div className={style.container}>
            <h1>Conhecimentos</h1>
            <div className={style.imgsTechs}>
                {
                    techImgs.map((img) => {
                        return (
                            <>
                                <Tooltip title={img.name} key={img.id}>
                                    <IconButton>
                                        <img src={img.img} alt="" data-tip={img.name} />
                                    </IconButton>
                                </Tooltip>
                            </>
                        );
                    })

                }
            </div>
        </div>
    );
}