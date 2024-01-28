function Hero() {
    const backgroundImageUrl = 'https://images.unsplash.com/photo-1624625021542-41a4ff97c025?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    const sectionStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
            <section className="w-full h-full py-32" style={sectionStyle}>
                <div className="container mx-auto text-center text-slate-800">
                    <h1 className="text-5xl font-medium mb-6">Su aliado en el control y manejo de la diabetes.</h1>
                    <p className="text-xl mb-12"> Transformando vidas a través del conocimiento y cuidado especializado.</p>
                    <a href="#" className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600">Llamame</a>
                </div>
            </section>
    );
}

export default Hero;
