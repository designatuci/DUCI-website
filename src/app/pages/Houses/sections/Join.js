import { forwardRef } from "react";
import { Text } from "app/components";
import clsx from "clsx";
import { Link } from "react-router-dom";

import cn from "./Join.module.scss";

export const HOUSES_SORTING_FORM = "https://forms.gle/6aj3nKe3S5QttYqp8";
const DEADLINE = new Date("2024-01-12T17:00:00-0800");

function Join(props, ref) {
    const now = new Date();

    const getSorted = (
        <>
            <Text size="XXL" className={cn.title}>
                Sign Up and Get Sorted!
            </Text>
            <Text color="gray" className={cn.description}>
                form open until <Text color="red">Friday at 5pm</Text>
            </Text>
            <div className={clsx("wait show drop d10 l2", cn.button)}>
                <Link to="sorting" className="button L fill blue">
                    <Text size="L" color="white" icon="right">
                        Join Now
                    </Text>
                </Link>
            </div>
        </>
    );

    const contactUs = (
        <>
            <Text size="XL" className={cn.title}>
                Didn’t get to Join a House? Send Us an Email
            </Text>
            <Text color="gray" className={cn.description}>
                To get sorted into a house, please email us or talk to a board
                member at any meeting!
            </Text>
            <div className={clsx("wait show drop d10 l2", cn.button)}>
                <a
                    href="mailto:designatuci@gmail.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="button L fill blue"
                >
                    <Text size="L" color="white" icon="right">
                        Contact us
                    </Text>
                </a>
            </div>
        </>
    );

    return (
        <section className={cn.join} id="join" ref={ref}>
            {now < DEADLINE ? getSorted : contactUs}
        </section>
    );
}

export default forwardRef(Join);
