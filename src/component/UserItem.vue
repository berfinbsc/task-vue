

<template>
    <div class="card">
    <h3>
        User
    </h3>    
{{user}}
       



    </div>
    </template>
    
    <script>
    export default{
        name:"UserItem",
        props:{
            user:{
                type:Object,
                default:()=>({}),
            },
        },
    }
    </script>
    
    
    <style>
    
    </style>