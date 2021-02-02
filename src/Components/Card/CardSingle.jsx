import React from 'react';
import './Card.scss';

class CardSingle extends React.Component {

constructor(props) {
  super(props);
  this.state = {
  };
}


componentDidMount() {

  new Promise((resolve, reject) => { 

    var req = new XMLHttpRequest();

    req.open('GET', `https://www.blanya.com/api_v2/product.php?id=${this.props.producto}`); 

    req.onload = () => { 
      
      if (req.status === 200) {
        // Resolve the promise with the response text
        var data = JSON.parse(req.response);

        //console.table(data);

        this.setState({ 
                      id: data.id,
                      titulo: data.title,
                      lista: data.description,
                      image: data.images[0].src,
                      regular_price : data.regular_price, 
                      price: data.price
                    });
                  }
      else {
        reject(Error(req.statusText));
      }
    };

    req.send();
  });
}
 

addCart =() => {
  //https://www.manualidadeselsultan.com/?add-to-cart=11646&variation_id=11648&quantity=3
  
  var req = new XMLHttpRequest();
  req.open('GET', `/?add-to-cart=${this.state.id}`);

  req.onload = () => { 

    document.getElementById("por_agregar").innerHTML = '<i className="fas fa-spinner fa-spin"></i> &nbsp; <span>Agregando</span>'; 
      
    if (req.status === 200) {
      // Resolve the promise with the response text

      window.location.href = 'https://www.manualidadeselsultan.com/carrito/';

                }
    else {
     alert("Error al agregar producto!")
    }
  };

  req.send();

} 


render(){
  return (
      <div className="row card">
        <div className="col-xs-12 col-sm-4">
          <div className="card__image">
                <img alt="product_image" className="img-responsive" src={this.state.image} /> 
          </div>
        </div>
        <div className="col-xs-12 col-sm-8">
          {/* <h2> {this.state.titulo} </h2>*/} 
          <div className="card__info" dangerouslySetInnerHTML={{__html:this.state.lista}} />
          <div className="card__version">
            <hr/>
          </div>
  
          <div className="card__acart">

            <p> <span>${this.state.regular_price}</span> ${this.state.price}</p>
            <button onClick={this.addCart}>

              <div id="por_agregar">
                <i className="fas fa-shopping-cart"></i> &nbsp; <span>Agregar</span>
              </div>                                    

            </button>
          </div>
        </div>
      </div>
    );
} 

}

export default CardSingle;
