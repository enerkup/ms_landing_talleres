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
                        <div className="container">
                        <div>
                            <h4 className="tituloMorado"> <strong> Taller Zoom 22 y 23 de julio</strong> </h4>
                            <h3>Vamos a crear este portaretrato lleno de color y texturas para esas fotos que te encantan</h3>
                            <h5>Súmate a esta experiencia creativa con la maestra Jossy y aprende  a combinar técnicas tridimensionales, fluido del color y transferencia. 
                                <br/>
                                En un proyecto que puedes usar para tus fotografias favoritas</h5>                                                                                       
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        
        <div className="container-fluid video_space">
            <div className="row"> 
                <div className="col-xs-12 text-center">
                     {/* <h3> 22 y 23 de julio de 4:00 p.m a 6:30 p.m <hr/>  </h3> */}
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 text-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/9UDh2a8EPEs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                   
                     
                    <h3 className="centralAdd">El precio del taller incluye todo el material para la elaboración de este portaretrato. <br/> Envió gratuito a todo México.						
                    </h3>

                     {/*  <h4><i>Trabajaremos varias técnicas en un solo proyecto: Decoupage, Craquelado y Esténcil.</i></h4>  */}
                                        
                </div>
            </div>
        </div>
    </section>
  );
}

}

export default Approved;
