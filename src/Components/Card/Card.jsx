import React from 'react';
import './Card.scss';

class Card extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    activeAtributo: this.props.activeIndex,
    variations: []
  };
}


componentDidMount() {

  new Promise((resolve, reject) => {

    var req = new XMLHttpRequest();
    req.open('GET', `/api_landing/?status=${this.props.filter}&product_id=${this.props.producto}`);
    req.onload = () => {
      
      if (req.status === 200) {
        // Resolve the promise with the response text
        var data = JSON.parse(req.response);

        console.table(data);

        var index = data.variations.map(function(e) { return e.atributo; }).indexOf(this.props.activeIndex);

        var price = data['variations'][index].price;
        var dataVariation = data['variations'][index].variation_id;


        this.setState({
                      id: data.id,
                      titulo: data.title,
                      lista: data.description,
                      variations: data.variations,
                      image: data.image,
                      
                      price: price,
                      dataVariation: dataVariation 

                    });
                  }
      else {
        reject(Error(req.statusText));
      }
    };

    req.send();
  });
}

cambioProducto = (e) => {
    
    var key = e.target.getAttribute("data-atributo");
    var price = e.target.getAttribute("data-price");
    var dataVariation = e.target.getAttribute("data-variation");
    this.setState({price:price, activeAtributo: key, dataVariation:dataVariation});
   
}

addCart =() => {
  //https://manualidadeselsultan.com/?add-to-cart=11646&variation_id=11648&quantity=3
  
  var req = new XMLHttpRequest();
  req.open('GET', `/?add-to-cart=${this.state.id}&variation_id=${this.state.dataVariation}&quantity=1`);
  req.send();

  alert("Producto Agregado");
  window.location.reload(false);

}


render(){
  return ( 
      <div className="row card">
        <div className="col-xs-12 col-sm-4">
          <div className="card__image">
            {this.state.variations.map((variation) => <div className={variation.atributo === this.state.activeAtributo ? '' : 'hidden'} key={variation.atributo}> 
                                                             <img alt="product_image" className="img-responsive" src={variation.image} /> 
                                                      </div>)}
          </div> 
        </div>
        <div className="col-xs-12 col-sm-8">
          <h2> {this.state.titulo} {this.state.activeAtributo}</h2> 
          <div className="card__info" dangerouslySetInnerHTML={{__html:this.state.lista}} />
          <div className="card__version">
            <hr/>
            <h4>Selecciona: </h4>
            {this.state.variations.map((variation) =>  <button  onClick={this.cambioProducto}
                                                                className={variation.atributo === this.state.activeAtributo ? 'selected' : ''} 
                                                                data-atributo={variation.atributo} 
                                                                data-price={variation.price}
                                                                data-variation={variation.variation_id}
                                                                key={variation.atributo}>  {variation.atributo} 
                                                        </button>)}
          </div>
  
          <div className="card__acart">
            <p>${this.state.price}</p>
            <button onClick={this.addCart}>
              <i className="fas fa-shopping-cart"></i> &nbsp; <span>Agregar</span>
            </button>
          </div>
        </div>
      </div>
    );
} 

}

export default Card;

//componentWillUnmount() {}
 
//componentShouldUpdate() {}
