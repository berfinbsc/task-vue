

<template>
    <div >
        <div>
            
            <div class="card" v-for="post in posts" :key="post.id">
                <h3>post :</h3>
                {{ post }}
            </div>
        </div>
    <div>
        <div class="card" v-for="album in albums" :key="album.id">
            <h3>album :</h3>
            {{ album }}
        </div> 
    </div>

     <div>
        <div class="card" v-for="todo in todos" :key="todo.id">
            <h3>todo :</h3>
            {{ todo }}
        </div>
     </div>
  

    </div>
    </template>
    


    <script>
    import { useRoute } from 'vue-router';
    import {getUserDetails} from '@/api/Http.js';

    export default{
        name:"UserDetail",
        created(){
                
this.getUserFromApi();
        },
        methods:{
            async getUserFromApi(){
           try {
            
            const route = useRoute();
            const userId = route.params.id;
            const detail = await getUserDetails(userId);
           //console.log(detail);
            const {post,album,todos} =detail;   
            this.posts=post;
            this.albums=album;
            this.todos=todos;
           // console.log(posts);
            //console.log(albums);
            //console.log(todos);

           } catch (error) {
            console.log(error);
           }
            }
              
        },
        data(){
            return{
                props:[],
                albums:[],
                todos:[],   
            };
           
        }

        
       
    }
    </script>
    
    
    <style>
    
    </style>