import React from 'react';
import ReactDOM from 'react-dom';
import './Bootstrap/css/bootstrap.css'
import './index.scss';

import Card from './Components/Card/Card';
import Header from './Components/Header/Header';
import Approved from './Components/Approved/Approved';

import * as serviceWorker from './serviceWorker';
import Newsletter from './Components/Newsletter/Newsletter';
import Contador from './Components/Contador/Contador';


class IndexHome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {    };
  }

  componentDidMount() { 

    new Promise((resolve, reject) => { 
  
      var req = new XMLHttpRequest();
  
      req.open('GET', `https://www.blanya.com/api_v2/landing.php?id=12803`); 
  
      req.onload = () => { 
        
        if (req.status === 200) {
          // Resolve the promise with the response text
          var data = JSON.parse(req.response);
  
          //console.table(data);
  
          this.setState({ 
                        id: data.id,
                        titulo: data.title,
                        lista: data.description,
                        image_slide: data.images[1].src,
                        image_product: data.images[0].src,
                        regular_price : data.regular_price, 
                        price: data.price,
                        stock: data.stock_quantity
                      });
                    }
        else {
          reject(Error(req.statusText));
        }
      };
  
      req.send();
    });
  }

   
  render(){
    return (
      <section>       
      <Header slide={this.state.image_slide}/>
      <Approved />
      <div className="container">
        <Card data={this.state}/>
      </div>
      <Contador/>
      </section>
    );

    }
}




ReactDOM.render(
  <React.StrictMode>

    <IndexHome/>

    <footer>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-9"> 
            <h2>¡Cupos limitados, inscríbete Ya!  </h2>
            <h4>El precio del taller incluye todo el material para la elaboración del Candelabro.</h4>
            <h4> <i>Envio gratuito a todo Mexico.</i> ¡No hay excusas, compra ahora!</h4>
            <hr></hr>
          </div>
          <div className="col-xs-12 col-sm-3"> 
            <Newsletter/>
          </div>
        </div>
      </div>
    </footer>

  

  </React.StrictMode>,
  document.getElementById('root')
);



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


//<Card producto={11646} filter={'variants'} activeIndex={'125-ml'}/>
//<CardSingle producto={11657} filter={'single'}/>
//<Card producto={11660} filter={'variants'} activeIndex={'kit-1'}/>

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
