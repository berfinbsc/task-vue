

<template>
<div class="row">
    <h2>Users</h2>
<div class="col-sm-6 col-md-4 col-xl-3 mb-5" v-for="user in users" :key="user.id">

    <RouterLink :to="'/user/' + user.id" target="_blank" >
        <UserItem :user="user"/>
    </RouterLink>
</div>

</div>
</template>

<script>
import UserItem from '@/component/UserItem.vue';
import { createRouter } from 'vue-router';

export default{
    name:"Users",
    components:{
        UserItem,
        createRouter,
    },
    props:{
        users :{
            type :Array,
            default:()=>([])
        }
    }
}
</script>


<style>

</style>