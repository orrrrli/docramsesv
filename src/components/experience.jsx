import PropTypes from 'prop-types';
const ExperienceItem = ({title, date, description,location}) => {
    return (
        <div className="md:flex justify-center">
        <li className="border-l-2 border-sky-700"></li>
        <div className="bg-sky-800 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
            </svg>
        </div>
        <div className="block p-6 rounded-lg shadow-lg bg-white-50 max-w-md ml-6 mb-10">
            <div className="flex justify-between">
            <a className="font-medium text-sky-600">{title}</a>
            <a className="font-medium text-sky-600">{date}</a>
            </div>
            <p className="text-gray-700">{location}</p>
            <p className="text-gray-700 mt-2 mb-1">{description}</p>
        </div>
    </div>
    )
}
ExperienceItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string
}


function Experience () {
    return ( 
       <div className="m-10">
            <h3 className="text-4xl text-center text-gray-700 font-bold mb-6 ml-3" id="experience">Experiencia</h3>
            <ol>
                <ExperienceItem title="Prevención y Atención de la Diabetes Mellitus tipo 2" date="Cursando..." description='Fundación Carlos Slim. Aprende.org' location="Colima" />
                <ExperienceItem title="ISSSTE" date="08 y 09 noviembre del 2021" description='Actualización en el Manejo de la Diabetes Mellitus en Ciudad de México ' />
                <ExperienceItem title="Grupo de Apoyo Amanecer, I.A.P. de Lucha Contra el Cáncer" date="03/08/2019" description='Detección Oportuna y Prevención de Complicaciones del Diabetes' location='Colima, Colima'/>
                <ExperienceItem title="e-Master en Diabetes" date="2019" description='Colegio de Medicina Interna de México A.C. y CONAMEGE' location="En linea"  />
                <ExperienceItem title="PADIMXISSSTE" date="16/10/2017 - 15/10/2018" description='Programa de Actualización en Diabetes (Acreditado por la CONAMEGE y la Asociación de Medicina Interna del Estado de México' location='En linea'/>
                <ExperienceItem title="Comité Nacional de Evaluación, Diagnóstico y Certificación del Programa Hospital Seguro" date="Septiembre 2018" description='Hospital seguro' location="En linea, 60 hrs"  />
                <ExperienceItem title="Ponente: 7º foto Interinstitucional de Calidad y Seguridad del paciente" description='Hospital Regional Universitario, Gobierno del Estado de Colima' date="21/06/2018" location="Colima, Colima" />
                <ExperienceItem title="Ponente: Programa de Prevención y Control de Enfermedades Crónicas No Transmisibles" description='ISSSTE' date="13/06/2019" location="Colima, Colima" />
                <ExperienceItem title="Grupo de Apoyo Amanecer, I.A.P. de Lucha Contra el Cáncer" description='Ponente: Taller de Automonitoreo del Paciente Diabético.' date="05/05/2018" location="Colima, Colima" />
                <ExperienceItem title="Grupo de Apoyo Amanecer, I.A.P. de Lucha Contra el Cáncer" description='Ponente: “Cuidados en el Paciente Diabético”' date="14/04/2018" location="Colima, Colima" />
                <ExperienceItem title="Asistencia y Participación en conferencia. Resultados de una Encuesta Representativa sobre la Diabetes Mellitus en la Ciudad de México. " description='Secretaria de Salud y Servicios de Salud Pública de la Ciudad de México.' date="09/09/2016" location="Colima, Colima" />
                <ExperienceItem title="Fundación Carlos Slim. PIEENSO (Plataforma Interactiva para la Educación en Salud Online)" description='Diplomado en Prevención y Atención Integral de las Enfermedades Crónicas' date="07/09/2016" location="Ciudad de Mexico, 265 horas" />
                <ExperienceItem title="Centro Multidisciplinario de Diabetes de la Ciudad de México Universidad La Salle" description='Diplomado. Acreditado. Diabetología 2015.' date="04/09/2015 al 11/03/2016" location="Ciudad de Mexico, 138 horas" />
                <ExperienceItem title='Programa de Capacitación para la Prevención de las Enfermedades Crónicas No Transmisibles, con Énfasis en la Atención de la Diabetes en el ISSSTE 2015' description='En Instituto Nacional de Salud Pública de México. Diplomado. Acreditado.' date='13/11/2015' location='Ciudad de México, 60 horas' />
                <ExperienceItem title="ISSSTE. Dirección Médica, Subdirección de Prevención y Protección a la Salud, Jefatura de Servicios de Atención Médica Familiar" description='Ponente: Inducción del nuevo Modelo de Atención a la Diabetes y Enfermedades Crónicas, ADEC.' date="6/10/2015" location="Ciudad de México" />
                <ExperienceItem title="Dirección Médica, Subdirección de Prevención y Protección a la Salud, Jefatura de Servicios de Atención Médica Familiar" description='ISSSTE. Asistente: Taller nacional del programa de capacitación para la prevención de las Enfermedades Crónicas No Transmisibles, con énfasis en la atención de la diabetes.' date="09/09/2015" location="Ciudad de México." />
                <ExperienceItem title="Dirección Médica, Subdirección de Prevención y Protección a la Salud, Jefatura de Servicios de Atención Médica Familiar" description='Ponente: Capacitación en el Modelo de Atención de Diabetes y Enfermedades Crónicas para médicos MIDE' date="21/08/2015" location="Ciudad de México" />
                <ExperienceItem title="Tecnológico de Monterrey/Ciencia e Innovación en Diabetes 2014" description='Diplomado. Acreditado. Diabetología' date="28/02/2014 al 07/07/2014" location="En linea" />
                <ExperienceItem title="Dirección Médica, Subdirección de Prevención y Protección a la Salud" description='ISSSTE. Acreditación como Asesor en Diabetes' date='20/06/2014' location="Ciudad de Mexico" />
                <ExperienceItem title="Diploma: Introducción a la nutrición" description='Instituto Internacional de Gastronomía' date="17/12/2013 al 26/05/2014" location="En linea, 180 horas" />
                <ExperienceItem title="Ponente: El impacto de la diabetes en el mundo" description='ISSSTE (Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado)' date="1/04/2014" location="Acaponeta, Nayarit" />
                <ExperienceItem title='LiIIy Diabetes / Congreso Internacional de la Sociedad Mexicana de Nutrición y Endocrinología / XV Congreso de la Asociación Latinoamericana de Diabetes / XXIII Reunión Bienal de la Asociación Latinoamericana de Investigadores en Reproducción Humana' description='Asistente: Magno congreso Internacional de Endocrinología, Diabetes y Reproducción' date="15/11/2013" location="Cancún, Quintana Roo" />
                <ExperienceItem title="Asistente: Diabetes Manejo Integral 2013" description='Lilly Diabetes' date="25/10/2013 - 27/10/2013" location="Veracruz, Veracruz" />
                <ExperienceItem title="Asociación Mazatleca para la Diabetes A.C. / UAS (Universidad Autónoma de Sinaloa)" description='Asistente: IX Megasimposium de Diabetes Mellitus' date="02/08/2013 - 03/08/2013" location="Mazatlán, Sinaloa" />
                <ExperienceItem title="ISSSTE (Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado)" description='Curso-Taller: Síndrome Cardiometabólico' date="25/10/2013 - 27/10/2013" location="Veracruz, Veracruz" />
                <ExperienceItem title="e-REMEDI (Electronic - Resultados Médicos, Educación e Investigación en Salud, A. C.)" description='Diplomado: Organización, Desarrollo y Acción Grupal en Diabetes Mellitus tipo 2' date="01/11/2012 – 14/12/2012" location="En linea, Calificacion: 10" />
                <ExperienceItem title='International Diabetes Center / ReMeDi (Resultados Médicos, Educación e Investigación en Salud, A. C.)' description='Curso de BASIC, Manejo de Diabetes por Etapas 2012' date='Noviembre 2012' location="Cd. de México D.F." />
                <ExperienceItem title='Titulación, Médico Cirujano y Partero. Vía EGEL/CENEVAL' description='Universidad Autónoma de Nayarit' date="09/09/2010" location="Tepic, Nayarit" />
            </ol>
       </div>
    )
}
export default Experience;