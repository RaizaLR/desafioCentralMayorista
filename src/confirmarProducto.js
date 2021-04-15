Quagga.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      target: document.querySelector('#camera')    // Or '#yourElement' (optional)
    },
    decoder : {
      readers : ["code_128_reader"]
    }
  }, function(err) {
      if (err) {
          console.log(err);
          return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
  });

  Quagga.onDetected((data)=>{
    Quagga.stop()
    console.log(data.codeResult.code);
    document.querySelector('.main-container').innerHTML='';
    document.querySelector('.main-container').innerHTML+=`
    <div class="segundoPaso">
    <img src="descripcionPastaLucheti.svg" alt="Descripción de producto" class="productDescription">
    <button class="btnAgregarCarrito" onclick="window.location.href='listaDePedido';">AGREGAR AL CARRITO</button>
    </div>`;
  })

  // Quagga.onDetected((data)=>{
  //   Quagga.stop()
  //   console.log(data.codeResult.code);
  //   document.querySelector('.main-container').innerHTML='';
  //   document.querySelector('.main-container').innerHTML+=`
  //   <div class="segundoPaso">
  //   <div class="descripcionProducto">
  //   <h2>Fideo Corbata luchetti</h2>
  //   <h2>400grm </h2>
  //   </div>
  //   <button class="btnAgregarFormato">FORMATO:UNIDAD</button>
  //   <div>
  //   <p>MINIMO 5 UNIDADES<p>
  //   <p>$580 c/u<p>
  //   </div>
  //   <div class="cantidad">
  //   <p>-<p>
  //   <p>1<p>
  //   <p>+<p>
  //   </div>
  //   <img  class="imgProducto" src="https://i.imgur.com/iNO1KjH.png">
  //   <button class="btnAgregarCarrito" onclick="window.location.href='carroDeCompras';">AGREGAR AL CARRITO</button>
  //   </div>`;
  // })