<template>
    <div class="login">
        <fieldset>
            <legend>
                Create New Person
            </legend>
            <div class="form-group">
                <label>Name:</label>
                <input type="text" v-model="loginForm.userName"/>
            </div>
            <div class="form-group">
                <label>password:</label>
                <input type="text" v-model="loginForm.passWord"/>
            </div>
            <div class="form-group">
                <label></label>
                <button @click="login">Sign In</button>
            </div>
        </fieldset>
    </div>
</template>
<script>
    import {myAxios} from '../network/request'
    export default {
        name: 'login',
        data(){
            return {
                loginForm: {
                    userName: 'admin',
                    passWord: '123456'
                }
            }
        },
        methods:{
            async login() {
                try {
                    myAxios.post('/login',this.loginForm).then(res=>console.log(res))
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }
</script>

<style>
</style>
