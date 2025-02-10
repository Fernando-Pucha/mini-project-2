export default function AboutPage() {
  return (
    <div className="about-container">
            <h1>Ecommerce Admin Dashboard</h1>
            <p className="about-description">
                Este proyecto fue realizado por dos estudiantes apasionados por el desarrollo web:
                <strong> Samuel </strong> y <strong> Fernando </strong>.
            </p>
            
            <div className="team-container">
                <div className="team-member">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4792/4792929.png" // Cambia las URLs por las fotos reales
                        alt="Samuel"
                        className="team-photo"
                    />
                    <h3>Samuel</h3>
                    <p>Desarrollador Frontend</p>
                </div>

                <div className="team-member">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4042/4042171.png" // Cambia las URLs por las fotos reales
                        alt="Fernando"
                        className="team-photo"
                    />
                    <h3>Fernando</h3>
                    <p>Desarrollador Backend</p>
                </div>
            </div>

            <div className="additional-info">
                <h2>Sobre el Proyecto</h2>
                <p>
                    El "Ecommerce Admin Dashboard" es una aplicación que permite gestionar productos. 
                    A través de este dashboard, los administradores pueden visualizar, agregar nuevos y actualizar productos.
                </p>
            </div>
        </div>
  );
}