import { useNavigate } from "react-router-dom";
import ContactForm from "../../components/common/contactForm";

const KontakPage=()=>{
    const navigate = useNavigate();

    const handleClickHome=()=>{
        navigate("/");
    }
    return(
        <>
        <div className="bg-white  h-auto mx-auto w-11/12">
            <div className="p-10 w-full">
                <p className="text-sm text-gray-400 ">
                    <span onClick={handleClickHome} className="hover:cursor-pointer text-blue-600 font-bold">
                        Roggero. M. Consulting
                    </span>
                    {' > '} 
                    kontakt
                </p>
                <h2 className="text-3xl font-bold pt-2 text-red-700">
                    Kontakt
                </h2>

            </div>
            
        </div>
        <div className=" mb-10 w-full">
            <ContactForm/>
        </div>
        </>
    )
}

export default KontakPage;