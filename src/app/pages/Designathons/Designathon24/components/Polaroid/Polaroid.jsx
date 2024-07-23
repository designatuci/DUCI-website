import { useCallback, useState } from "react";

import tape_black from "../../assets/graphics/speakers/tape_black.svg";
import tape_white from "../../assets/graphics/speakers/tape_white.svg";
import { Modal } from "../Speakers/Modal/Modal";
import cn from "./Polaroid.module.scss";

export const Profile = ({ person, odd, showTape }) => {
    const { photo, name, role } = person;

    return (
        <div className={cn.polaroid}>
            {showTape ? (
                <img
                    src={odd ? tape_white : tape_black}
                    alt="tape"
                    className={cn.tape}
                />
            ) : null}

            <img
                src={require(`../../assets/${photo}`)}
                alt={`polaroid of ${name}`}
                className={cn.polaroidImage}
            />

            <div className={cn.polaroidDetails}>
                <h6 className={cn.polaroidName}>{name}</h6>
                <p className={cn.polaroidRole}>{role}</p>
            </div>
        </div>
    );
};

const Polaroid = ({ person, odd }) => {
    const [open, setOpen] = useState(false);

    const handleClick = useCallback(() => {
        setOpen((prev) => !prev);
    }, []);

    return (
        <>
            <div className={cn.polaroidContainer} onClick={handleClick}>
                <Profile person={person} odd={odd} showTape={true} />
            </div>

            {open ? (
                <Modal
                    person={person}
                    open={open}
                    toggleProfile={handleClick}
                />
            ) : null}
        </>
    );
};

export default Polaroid;
