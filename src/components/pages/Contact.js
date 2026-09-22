import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Contact() {
    return (
        <div className={"p-4 rounded-[5px] w-full"}>
            <h1 className={"text-6xl"}>Entre em contato</h1>
            <div>
                <h3 className={"flex"}><span><BsTelephoneFill /></span>exemplo@email.com</h3>
                <h3 className={"flex"}><span><MdEmail /></span>(99) 3999-9999</h3>
            </div>
        </div>
    )
}

export default Contact;