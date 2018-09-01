let taskApp = new Vue({
    el: '#taskApp',
    data: {
        tasks: [
            {name: "Nota 1", done:false},
            {name: "Nota 2", done:false} ,
            {name: "Nota 3", done:false},
        ]
    },
    methods: {
        deleteTask: function(task){
            this.tasks.splice(this.tasks.indexOf(task), 1);
        } 
    }
});