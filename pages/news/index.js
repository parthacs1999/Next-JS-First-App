import { Fragment } from "react";
import Link from "next/link";
const Newspage = () => {
    return (
        <Fragment>
            <ul>
                <li>
                    <Link href='/news/next-js-is-fun'>
                        Next js is great
                    </Link>
                </li>
                <li>Something else</li>
            </ul>
        </Fragment>
    )
}
export default Newspage;