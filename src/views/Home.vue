<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->


    <div class="row">

      <div class="col-sm-3">

{{oracion}}

      </div>

      <div class="col-sm-6">


         <!--   <oracion @guardarOracion="recibirOracion"></oracion>-->

          <oracion :enviarRespuestas="enviarRespuestas"></oracion>

          
      </div>


      <div class="col-sm-3">
         
 <respuesta class="respuesta" title="Respuesta 1" @guardarRespuesta="recibirRespuesta"></respuesta>
      
<respuesta class="respuesta" title="Respuesta 2" @guardarRespuesta="recibirRespuesta"></respuesta>
<respuesta class="respuesta" title="Respuesta 3" @guardarRespuesta="recibirRespuesta"></respuesta>
<respuesta class="respuesta" title="Respuesta 4" @guardarRespuesta="recibirRespuesta"></respuesta>



      </div>



    </div>


  <!-- PASAR ORACION DE HOME A ORACION ORACION   -->

    
  </div>
</template>

<script>
// @ is an alias to /src
import Oracion from '../components/oracion/OracionsComponent'

import Respuesta from '../components/respuesta/RespuestasComponent'

import TablaRespuesta from '../components/respuesta/TablaRespuestasComponent'

export default {
  name: 'home',
  data(){
   return {
     respuestas:[],
     oracion:{
        id:null,
        descripcion: null,
				texto: null,
        nivel:null,
        respuestas:[]
        },
        enviarRespuestas:[]
      
    }
  },
  components: {
   Oracion,
   Respuesta,
   TablaRespuesta
  },
  methods:{
    recibirRespuesta:function(respuesta){
      this.respuesta=respuesta
      this.respuestas.push(this.respuesta)
      this.oracion.respuestas=this.respuestas
      this.enviarRespuestas=this.respuestas
    },
     recibirOracion:function(oracion){
      this.oracion.id=oracion.id
      this.oracion.descripcion=oracion.descripcion
      this.oracion.texto=oracion.texto
      this.oracion.nivel=oracion.nivel
     
    }
  }
}
</script>


<style>

.respuesta{

  margin-bottom: 10px;

}


</style>