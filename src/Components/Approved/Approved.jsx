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
                            <h3>IMPARTIDO POR LA MAESTRA ESPE</h3>
                            <h4>Aprende a utilizar los esténciles para crear efectos dimensionales, luz y sombra.</h4>
                            <h4> <strong> Te enseñamos cada detalle. En vivo, vía zoom.</strong> </h4>                                                           
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        
        <div className="container-fluid video_space">
            <div className="row"> 
                <div className="col-xs-12 text-center">
                    <h3>25 y 26 de marzo de 4:00 p.m a 6:30 p.m <hr/>  </h3>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 text-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/fqOWkAqfuqo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                   
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
