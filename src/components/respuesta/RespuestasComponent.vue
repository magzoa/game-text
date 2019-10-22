<template>
    
<div class="row">

<div class="col-sm-12">

    <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{title}}</h5>



            <div class="form-group">
             <!-- <label for="respuesta">Descripción</label>  -->
              <input type="text" class="form-control" id="respuesta" aria-describedby="respuestaHelp" placeholder="Descripción" v-model="respuesta.respuesta">
            <!--  <small id="respuestaHelp" class="form-text text-muted">Posible respuesta</small> -->
            </div>

            <div class="form-group">
             <!-- <label for="porcentaje">Porcentaje</label> -->
              <input type="text" class="form-control" id="porcentaje" aria-describedby="porcentajeHelp" placeholder="Porcentaje" v-model="respuesta.porcentaje">
            <!--  <small id="porcentajeHelp" class="form-text text-muted">Porcentaje de valides de la respuesta</small> -->
            </div>
            

           <button type="button" class="btn btn-primary" v-on:click="guardarRespuesta(respuesta)">OK</button>

            


        </div>
      </div>
      <!-- fin card formulario -->



</div>





</div>


</template>


<script>
export default {
    name: 'RespuestasComponent',
  props: ['title'],
  data(){
		return {
		respuestas: [],
        respuesta:{
        id:'',
        respuesta: '',
		porcentaje: ''
        }
        
			}
},
methods:{
  guardarRespuesta:function(respuesta){
            this.$emit('guardarRespuesta',respuesta)
        }
    }
}
</script>