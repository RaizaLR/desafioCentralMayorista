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
    <h2 class="confirmIdentity">Confirma tu identidad</h2>
    <img  class="imgCredencial" src="credencialSocio.png" alt="credencial">
    <button class="btnEliminarCredencial">Cancelar</button><button class="btnConfirmarCredencial" onclick="window.location.href='carroDeCompras';">Confirmar</button>
    </div>`;
  })