import { MdAlternateEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function ContactCard () {
    const email = "dr.ramsescastaneda@gmail.com";

    return (
        <div className="my-6" id="contact">
            <div className="grid grid-cols-1 items-center p-8 mx-auto max-w-xl bg-sky-50 shadow-xl rounded-md">
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-700">Permitenos guiarte</h1>
                        <p className="text-md font-medium text-sky-800 mt-3">¡Estamos aquí para ayudarte en tu camino hacia un estilo de vida saludable y controlado! 
                        Nos enorgullece ofrecer atención médica de calidad centrada en el paciente.</p>
                        <div className="mt-12">
                        <div className="flex mx-auto max-w-3xl mb-5 items-center">
                            <FaPhoneAlt className="text-slate-700 mr-2" size={25}/>
                            <h1 className="text-2xl font-bold text-slate-700 ">Teléfonos de contacto</h1>
                        </div>
                            <ul className="mt-3">
                                <li className="flex items-center">
                                    <a target="blank" href="#" className="text-sky-800 text-sm">
                                        <small className="block">Citas</small>
                                        <strong>+52 312 313 9041</strong>
                                    </a>
                                    <a target="blank" href="#" className="text-sky-800 text-sm ml-8">
                                        <small className="block">Urgencias</small>
                                        <strong>+52 312 135 5297</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mx-auto max-w-3xl mt-10">
                            <div className="flex mx-auto max-w-3xl mb-5 items-center">
                                <FaLocationDot className="text-slate-700 mr-2" size={25}/>
                                <h1 className="text-2xl font-bold text-slate-700 ">Ubicación</h1>
                            </div>
                            <p>Av. Gonzalo de Sandoval 350a, Colonia Las Víboras, 28040 Colima, Col.<br></br>
                            En el consultorio y farmacia del Sindicato Único de Trabajadores de la Universidad de Colima SUTUC</p>
                        </div>
                        <div className="mt-12">
                            <h2 className="text-lg font-extrabold">Socials</h2>
                            <ul className="flex mt-3 space-x-4">
                                <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href="http://bit.ly/FacebookDiabetic">
                                        <FaFacebook className="text-sky-600" size={35}/>
                                    </a>
                                </li>
                                <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href="https://www.youtube.com/@dr.ramsescastanedadiabetol6294">
                                        <FaYoutube className="text-red-600"size={35}/>
                                    </a>
                                </li>
                                <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href={`mailto:${email}`}>
                                        <MdAlternateEmail size={25}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default ContactCard;