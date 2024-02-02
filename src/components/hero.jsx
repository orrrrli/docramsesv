function Hero() {
    
    
    const backgroundImageUrl = 'https://images.pexels.com/photos/6941883/pexels-photo-6941883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

    const sectionStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
            <section className="w-full h-full md:py-72 py-48" style={sectionStyle}>
                <div className="container mx-auto text-center text-gray-800">
                    <h1 className="text-5xl font-bold mb-6">Su aliado en el control y manejo de la diabetes.</h1>
                    <p className="text-xl mb-12"> Transformando vidas a través del conocimiento y cuidado especializado.</p>
                    <a href="tel:312 313 9041" className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600">Llamame</a>
                </div>
            </section>
    );
}

export default Hero;
