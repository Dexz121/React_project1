import './App.css';
import Testimonio from './componentes/Testimonio';

function App() { // <Testimonio /> va a contener las propiedades que queremos que tenga el componente. El componente Testimonio puede ser invocado N veces, y sus parametros como nombre, pais, etc, seran enviados a Testimononio.js
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Testimonios</h1>
        <Testimonio 
        nombre='Rodrigo Najera'
        pais='Suecia'
        imagen='1'
        cargo='Ingeniero en Software'
        empresa='Spotify'
        Testimonio='Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.' //Los parametros deben ser escritos respetando mayusculas y minusculas
        />
      </div>
      <Testimonio 
      nombre='Zamudio Bistrain'
      pais='Noruega'
      imagen='2' //Hablemos de la ruta de imagen, mandaremos unicamente el numero que corresponde al nombre de la imagen, ya que la imagen se llama halo, y unicamente cambia el numero, ese es el que mandaremos para hacer referencia a esa imagen. Si la imagen no se carga bien dara error.
      cargo='Ingeniero en Software'
      empresa='Amazon'
      Testimonio='The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesnt distract from the layout. A practice not without controversy, laying oust pages with meaningless filler text can be very useful when the focus is meant to be on design, not content. ' 
      />
    </div>
  );
}

export default App;
