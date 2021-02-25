import React from 'react';
import './Header.scss';
import logo from './logo_elsultan.png';


class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {    };
  }

  
  componentDidMount() { 

    new Promise((resolve, reject) => {
  
      var req = new XMLHttpRequest();
      req.open('GET', '/api_landing/?status=cart');
      req.onload = () => {
        
        if (req.status === 200) {
          // Resolve the promise with the response text

          var data = JSON.parse(req.response);
  
          console.table(data);
  
          this.setState({
                        total: data.line_total
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
        <header> 
          <div className="home">
            <div className="container">
              <div className="row">
                <div className="col-xs-8">
                  <img src={logo} alt="" className="img-responsive home__logo"/>
                </div>
                <div className="col-xs-4 text-right itemsCart">
                  <span className="itemsCart__cart"><i className="fas fa-shopping-cart"></i></span>
                  <a href="./finalizar-comprar">
                    <span className="itemsCart__pagar"> <i className="fas fa-credit-card"></i> Pagar ${this.state.total}</span>
                  </a>
                </div> 
              </div>
            </div>
          </div>
          <div className="container slides">
            <div className="row slides__animated">
              <img className="img-responsive" src={this.props.slide} alt=""/>
              {/*
              <div className="slides__animated__sa0">
                <img src={waves} alt=""/>
              </div>
              <div className="slides__animated__sa1">
                <img className="img-responsive" src={exmicror} alt=""/>
              </div>
              <div className="slides__animated__sa2">
                <h2> Exmicror® es un desinfectante de origen natural de amplio espectro para manos y superficies. </h2>
              </div>
              */}
            </div>
          </div>
        </header>
    );
  }

}

export default Header;

