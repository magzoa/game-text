<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->


    <div class="row">

      <div class="col-sm-3">


      </div>

      <div class="col-sm-6">


          <oracion></oracion>
      </div>


      <div class="col-sm-3">
        <respuesta class="respuesta" title="Respuesta 1"></respuesta>
      
        <respuesta class="respuesta" title="Respuesta 2"></respuesta>

        <respuesta class="respuesta" title="Respuesta 3"></respuesta>

        <respuesta class="respuesta" title="Respuesta 4"></respuesta>

      </div>



    </div>



    
  </div>
</template>

<script>
// @ is an alias to /src
import Oracion from '../components/oracion/OracionsComponent'

import Respuesta from '../components/respuesta/RespuestasComponent'

export default {
  name: 'home',
  components: {
   Oracion,
   Respuesta
  }
}
</script>


<style>

.respuesta{

  margin-bottom: 10px;

}


</style>