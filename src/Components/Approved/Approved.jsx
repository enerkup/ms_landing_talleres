import React from 'react';
import './Approved.scss';

class Approved extends React.Component {

render(){
  return (
    <section>
        <div className="container logoCertification">
            <span className="conection"></span>
            <div className="row">
                <div className="col-xs-12">
                    <div className="carousel">
                        <div>
                            <h4>IMPARTIDO POR LA MESTRA JOSSY</h4>
                            <h3> Vamos a decorar juntos este <strong> ¡lindo Reloj en Collage! </strong> Te enseñamos cada detalle. </h3>                                                           
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        <div className="container">
            <div className="row">
                <div className="col-xs-12 text-center">
                    <h3>Este taller es para ti</h3>
                    <h4><i>Trabajaremos varias técnicas en un solo proyecto: Decoupage, Craquelado y Esténcil.</i></h4>    
                    <br/>                                    
                </div>
            </div>
        </div>  
    </section>
  );
}

}

export default Approved;
