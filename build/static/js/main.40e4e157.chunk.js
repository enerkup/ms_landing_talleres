(this.webpackJsonpshealth=this.webpackJsonpshealth||[]).push([[0],{17:function(e,a,t){e.exports=t.p+"static/media/logo_elsultan.29a2277c.png"},19:function(e,a,t){e.exports=t(49)},24:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t(3),l=t(5),c=t(4),s=t(0),o=t.n(s),i=t(16),m=t.n(i),u=(t(24),t(25),t(26),function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).addCart=function(){document.getElementById("por_agregar").innerHTML='<i class="fas fa-spinner fa-spin"></i> &nbsp; <span>Agregando</span>';var e=new XMLHttpRequest;e.open("GET","/?add-to-cart=".concat(r.props.data.id)),e.onload=function(){200===e.status?window.location.href="https://www.manualidadeselsultan.com/finalizar-compra/":alert("Error al agregar producto!")},e.send()},r.state={},r}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"row card"},o.a.createElement("div",{className:"col-xs-12 col-sm-4"},o.a.createElement("div",{className:"card__image"},o.a.createElement("img",{alt:"product_image",className:"img-responsive",src:this.props.data.image_product}))),o.a.createElement("div",{className:"col-xs-12 col-sm-8"},o.a.createElement("div",{className:"card__info",dangerouslySetInnerHTML:{__html:this.props.data.lista}}),o.a.createElement("div",{className:"card__version"},o.a.createElement("hr",null)),o.a.createElement("div",{className:"card__acart"},o.a.createElement("p",null," ",o.a.createElement("span",null,"$",this.props.data.regular_price)," $",this.props.data.price),o.a.createElement("button",{onClick:this.addCart},o.a.createElement("div",{id:"por_agregar"},o.a.createElement("i",{className:"fas fa-shopping-cart"})," \xa0 ",o.a.createElement("span",null,"Agregar"))))))}}]),t}(o.a.Component)),d=(t(27),t(17)),E=t.n(d),p=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;new Promise((function(a,t){var n=new XMLHttpRequest;n.open("GET","/api_landing/?status=cart"),n.onload=function(){if(200===n.status){var a=JSON.parse(n.response);console.table(a),e.setState({total:a.line_total})}else t(Error(n.statusText))},n.send()}))}},{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"home"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-8"},o.a.createElement("img",{src:E.a,alt:"",className:"img-responsive home__logo"})),o.a.createElement("div",{className:"col-xs-4 text-right itemsCart"},o.a.createElement("span",{className:"itemsCart__cart"},o.a.createElement("i",{className:"fas fa-shopping-cart"})),o.a.createElement("a",{href:"./finalizar-comprar"},o.a.createElement("span",{className:"itemsCart__pagar"}," ",o.a.createElement("i",{className:"fas fa-credit-card"})," Pagar $",this.state.total)))))),o.a.createElement("div",{className:"container slides"},o.a.createElement("div",{className:"row slides__animated"},o.a.createElement("img",{className:"img-responsive",src:this.props.slide,alt:""}))))}}]),t}(o.a.Component),h=(t(28),function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("section",null,o.a.createElement("div",{className:"container logoCertification"},o.a.createElement("span",{className:"conection"}),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-12"},o.a.createElement("div",{className:"carousel"},o.a.createElement("div",null,o.a.createElement("h3",null,"IMPARTIDO POR LA MAESTRA ESPE"),o.a.createElement("h4",null,"Aprende a utilizar los est\xe9nciles para crear efectos dimensionales, luz y sombra."),o.a.createElement("h4",null," ",o.a.createElement("strong",null," Te ense\xf1amos cada detalle. En vivo, v\xeda zoom.")," ")))))),o.a.createElement("div",{className:"container-fluid video_space"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-12 text-center"},o.a.createElement("h3",null,"25 y 26 de marzo de 4:00 p.m a 6:30 p.m ",o.a.createElement("hr",null),"  "))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-12 text-center"},o.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/fqOWkAqfuqo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=t(6),f=t(18),g=t.n(f),b=(t(47),function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;return Object(n.a)(this,t),(e=a.call(this)).handleSubmit=e.handleSubmit.bind(Object(v.a)(e)),e}return Object(r.a)(t,[{key:"handleSubmit",value:function(e){var a=this;e.preventDefault();var t=new FormData(e.target);g()({method:"POST",url:"https://www.manualidadeselsultan.com/values/crm/sultan/",data:{nombre:t.get("nombre"),correo:t.get("correo")}}).then((function(e){return a.setState({recipes:e.data})})),alert("Ya estas suscrito. Gracias.")}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h4",null,"SUSCR\xcdBETE"),o.a.createElement("p",null,"TE LLEGAR\xc1 NUESTRO NEWSLETTER"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{placeholder:"Nombre",type:"text",name:"nombre"}),o.a.createElement("input",{placeholder:"Correo Electr\xf3nico",type:"email",name:"correo"}),o.a.createElement("button",null,"Enviar")))}}]),t}(o.a.Component)),N=(t(48),function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=new Date("Mar 16, 2021 23:59:59").getTime(),a=setInterval((function(){var t=(new Date).getTime(),n=e-t,r=Math.floor(n/864e5),l=Math.floor(n%864e5/36e5),c=Math.floor(n%36e5/6e4),s=Math.floor(n%6e4/1e3);document.getElementById("dias").innerHTML=r,document.getElementById("horas").innerHTML=l,document.getElementById("minutos").innerHTML=c,document.getElementById("segundos").innerHTML=s,n<0&&(clearInterval(a),document.getElementById("demo").innerHTML="EXPIRED")}),1e3)}},{key:"render",value:function(){return o.a.createElement("div",{className:"text-center contador"},o.a.createElement("h3",null," Fecha l\xedmite de inscripci\xf3n 16 de marzo."),o.a.createElement("ul",{class:"contiene-tiempo"},o.a.createElement("li",null,o.a.createElement("h3",{id:"dias"}),o.a.createElement("p",null,"D\xedas")),o.a.createElement("li",null,o.a.createElement("h3",{id:"horas"}),o.a.createElement("p",null,"Horas")),o.a.createElement("li",null,o.a.createElement("h3",{id:"minutos"}),o.a.createElement("p",null,"Minutos")),o.a.createElement("li",null,o.a.createElement("h3",{id:"segundos"}),o.a.createElement("p",null,"Segundos"))))}}]),t}(o.a.Component)),w=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;new Promise((function(a,t){var n=new XMLHttpRequest;n.open("GET","https://www.blanya.com/api_v2/landing.php?id=12715"),n.onload=function(){if(200===n.status){var a=JSON.parse(n.response);e.setState({id:a.id,titulo:a.title,lista:a.description,image_slide:a.images[1].src,image_product:a.images[0].src,regular_price:a.regular_price,price:a.price})}else t(Error(n.statusText))},n.send()}))}},{key:"render",value:function(){return o.a.createElement("section",null,o.a.createElement(p,{slide:this.state.image_slide}),o.a.createElement(h,null),o.a.createElement("div",{className:"container"},o.a.createElement(u,{data:this.state})),o.a.createElement(N,null))}}]),t}(o.a.Component);m.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null),o.a.createElement("footer",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-12 col-sm-9"},o.a.createElement("h2",null,"\xa1Cupos limitados, inscr\xedbete Ya!  "),o.a.createElement("h4",null,"El precio del taller incluye todo el material para la elaboraci\xf3n del retablo.  Envio gratuito a todo Mexico."),o.a.createElement("h4",null,"\xa1No hay excusas, compra ahora!"),o.a.createElement("hr",null)),o.a.createElement("div",{className:"col-xs-12 col-sm-3"},o.a.createElement(b,null)))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.40e4e157.chunk.js.map