import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook , faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer(){

    return(

        <div className="bg-blue-700 text-white grid grid-cols-1 text-center md:grid-cols-3 mx-auto px-12 p-4">

            <div className="items-center my-auto text-2xl">
                <h1>CloudCore</h1>
            </div>

            <div className="mt-4">
                <ul>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/'}>About Us</Link></li>
                    <li><Link href={'/'}>Career</Link></li>
                    <li><Link href={'/'}>Contact</Link></li>
                </ul>
            </div>

            <div className=" flex flex-col justify-center items-center mt-4">
                <h4 className="mb-2">Find us at:</h4>
                <ul>
                    <li className="flex items-center gap-2 mb-2">
                    <Link href={'/'}>
                        <FontAwesomeIcon icon={faFacebook} className="w-4" />
                    </Link>             
                    </li>

                    <li className="flex items-center gap-2 mb-2">
                    <Link href={'/'}>
                        <FontAwesomeIcon icon={faInstagram} className="w-4" />
                    </Link>             
                    </li>

                    <li className="flex items-center gap-2">
                    <Link href={'/'}>
                        <FontAwesomeIcon icon={faTwitter} className="w-4" />
                    </Link>             
                    </li>
                </ul>

            </div>





        </div>
    )
}