const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Vue Task',
        tareas: [],
        nuevaTarea: ''
    },
    methods:{
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            })
            this.nuevaTarea = '';
        },
        editarTarea: function(index){
            this.tareas[index].estado = true;
        },
        eliminar: function(index){
            this.tareas.splice(index, 1)
        }
    }
})

