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
                            <h3>IMPARTIDO POR LA MAESTRA JOSSY</h3>
                            <h4>Aprende a integrar colores y texturas. Formando un candelabro tipo proyector.</h4>
                            <h4> <strong> Te enseñamos cada detalle.</strong> </h4>
                                                                                       
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        
        <div className="container-fluid video_space">
            <div className="row"> 
                <div className="col-xs-12 text-center">
                    <h3> 29 y 30 de abril de 4:00 p.m a 6:30 p.m <hr/>  </h3>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 text-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/b7A5cZz2w5E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                   
                    {/* 
                    <h3>Este taller es para ti</h3>
                    <h4><i>Trabajaremos varias técnicas en un solo proyecto: Decoupage, Craquelado y Esténcil.</i></h4>    
                    <br/>     
                    */}                    
                </div>
            </div>
        </div>
    </section>
  );
}

}

export default Approved;
