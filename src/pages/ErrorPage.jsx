export default function ErrorPage() {
  return (
    <div className="error-container">
      <div className="error-box">
        <h1 className="error-title">¡Ups! Algo salió mal</h1>
        <p className="error-message">Parece que algo no está funcionando correctamente. Por favor, inténtalo de nuevo.</p>
        <img src="https://i.makeagif.com/media/7-03-2016/stZJUz.gif" alt="Error GIF" className="error-gif"/>
      </div>
    </div>
  );
}