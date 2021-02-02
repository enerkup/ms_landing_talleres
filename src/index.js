import React from 'react';
import ReactDOM from 'react-dom';
import './Bootstrap/css/bootstrap.css'
import './index.scss';

import CardSingle from './Components/Card/CardSingle';
import Card from './Components/Card/Card';
import Header from './Components/Header/Header';
import Approved from './Components/Approved/Approved';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Approved />
    <div className="container">
      
      <CardSingle producto={12431} filter={'single'}/>
      
    </div>

    

{/*
    <div className="container images_middle">
      <div className="row text-center">
        <div className="col-xs-12">
            <h4>¡Cupos limitados, inscríbete Ya!</h4>
            <div className="col-xs-6 text-right">
                <img src="https://www.manualidadeselsultan.com/wp-content/uploads/2020/11/cja01.jpeg" alt="" className="img-responsive"/>
            </div> 
            <div className="col-xs-6 text-left">
                    <img src="https://www.manualidadeselsultan.com/wp-content/uploads/2020/11/cja02.jpeg" alt="" className="img-responsive"/>                     
            </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <ul className="listaBene">
            <li>• Son flexibles por lo que, se adaptan a superficies curvas.</li>
            <li>• Se logran proyectos muy originales con esténciles y sellos.</li>
            <li>• Sobre ellos se puede pegar servilleta o papel usando Medium para Decoupage y hacer distintas texturas con nuestra pasta 3D.</li>
            <li>• Además, son resistentes al calor logrando hacer proyectos funcionales para tu hogar.</li>
          </ul>
        </div>
      </div>
    </div>
*/}

    <footer>
      <div className="container">
        <div className="row">
          <div className="col-xs-12"> 
            <h2>¡Cupos limitados, inscríbete Ya!  </h2>
            <h4>El precio del taller incluye todo el material para la elaboración de la caja. Envio gratuito a todo Mexico.</h4>
            <h4>¡No hay excusas, compra ahora!</h4>
          </div>
        </div>
      </div>
    </footer>

    



  </React.StrictMode>,
  document.getElementById('root')
);

//<Card producto={11646} filter={'variants'} activeIndex={'125-ml'}/>
//<CardSingle producto={11657} filter={'single'}/>
//<Card producto={11660} filter={'variants'} activeIndex={'kit-1'}/>

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
