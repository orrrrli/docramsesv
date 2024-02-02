function Mision ()
{
    const backgroundImageUrl = 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    const sectionStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-sky-100 place-items-center py-5" id="mision" > 
            <div className="m-10" >
                <h1 className="text-6xl font-bold text-slate-900 text-center">Vision</h1>
                <p className="pt-4 text-lg text-center">
                En nuestra clínica especializada en diabetes, nos dedicamos a proporcionar un enfoque integral para el manejo de esta enfermedad crónica.
                Nuestro compromiso es brindar atención médica de la más alta calidad, centrada en el paciente y basada en la evidencia científica más reciente. 
                Nos esforzamos por no solo tratar los síntomas de la diabetes, sino también por abordar las necesidades individuales de cada paciente, incluyendo la educación sobre la enfermedad, 
                el manejo de la dieta y el ejercicio, el control de la glucosa en sangre y la prevención de complicaciones
                <br></br> 
                Creemos en la importancia de establecer una relación de confianza y colaboración con cada paciente, trabajando juntos para lograr y mantener un control óptimo de la diabetes y mejorar su calidad de vida a largo plazo.
                </p>
            </div>
            <div className="m-10">
                <h1 className="text-6xl font-bold text-slate-900 text-center">Mision</h1>
                <p className="pt-5 text-lg text-center">
                Nuestra visión es ser reconocidos como líderes en el cuidado integral de la diabetes en México, siendo un centro de excelencia médica y un referente en el campo de la endocrinología. 
                Nos esforzamos por ser una fuente confiable de información y apoyo para las personas que viven con diabetes, así como para sus familias y cuidadores.
                <br></br>
                Buscamos establecer alianzas con otros profesionales de la salud, instituciones médicas y organizaciones comunitarias para promover la prevención, el diagnóstico temprano y el manejo óptimo de la diabetes en todo México. Aspiramos a contribuir al avance de la investigación en diabetes, participando en estudios clínicos y colaborando con investigadores nacionales e internacionales para desarrollar nuevas terapias y enfoques de tratamiento.
                </p>
            </div>
        </div>
        <section className="w-full h-full py-28" style={sectionStyle}></section>
     </>
    );
}

export default Mision;