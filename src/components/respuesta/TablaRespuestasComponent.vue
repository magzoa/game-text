<template>

    <div>

<table class="table">
  <thead class="thead-light">
    <tr>
     
      <th scope="col">Descripción</th>
      <th scope="col">Porcentaje</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input type="text" v-model="respuesta.respuesta"> </td>
      <td><input type="text" v-model="respuesta.porcentaje"></td>
      <td><button type="button" class="btn btn-primary" v-on:click="guardarRespuesta(respuesta)">OK</button></td>
    </tr>

    

  
    
  </tbody>
</table>



    </div>


</template>


<script>
export default {
    name: 'TablaRespuestasComponent',
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