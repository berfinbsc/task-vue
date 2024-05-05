
      <template>
        <div>
          <h1>User Page</h1>
            <Users :users="users"/>

        </div>
      </template>
    
    <script>
        import {getAllUsers} from '@/api/Http.js';
        import Users from '@/component/Users.vue';

        export default {
name:"UsersPage",
components:{
  Users
}
,


  data(){
            return {
              users:[]
            };
          },
        
          created(){
            this.getUsersFromApi();
          },

          methods : {
            async getUsersFromApi(){
              try {
                const data = await getAllUsers();
              console.log(data);
              this.users=data;
              } catch (error) {
                console.log(error);
              }
            }

          }

          
        
}
        

        


    </script>
    
    
    <style>
    
    </style>