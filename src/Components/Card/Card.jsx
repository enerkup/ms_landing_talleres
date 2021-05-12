import React from 'react';
import './Card.scss';

class Card extends React.Component {

constructor(props) {
  super(props);
  this.state = {
  };
}



addCart =() => {

  document.getElementById("por_agregar").innerHTML = '<i class="fas fa-spinner fa-spin"></i> &nbsp; <span>Agregando</span>'; 
      
  var req = new XMLHttpRequest();
  req.open('GET', `/?add-to-cart=${this.props.data.id}`);

  req.onload = () => { 
    if (req.status === 200) {
      // Resolve the promise with the response text
      window.location.href = 'https://www.manualidadeselsultan.com/finalizar-compra/'; 
                }
    else {
     alert("Error al agregar producto!")
    }
  };

  req.send();

} 


render(){

  if(this.props.data.stock >= 1) {  var btn_shop = `Agregar`;  } else { var btn_shop = `Agotado`; }
  return (
      <div className="row card">
        <div className="col-xs-12 col-sm-4">
          <div className="card__image">
                <img alt="product_image" className="img-responsive" src={this.props.data.image_product} /> 
          </div>
        </div>
        <div className="col-xs-12 col-sm-8">
          {/* <h2> {this.state.titulo} </h2>*/} 
          <div className="card__info" dangerouslySetInnerHTML={{__html:this.props.data.lista}} />
          <div className="card__version">
            <hr/>
          </div>
  
          <div className="card__acart">

            <p>  <span> ${this.props.data.regular_price} </span> ${this.props.data.price}</p>
            <button onClick={this.addCart}>

              <div id="por_agregar">              
                <i className="fas fa-shopping-cart"></i> &nbsp; {btn_shop}                                                                
              </div>                                                

            </button>
          </div>
        </div>
      </div>
    );
} 

}

export default Card;
