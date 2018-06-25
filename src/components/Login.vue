<template>
  <div id="app">
    <div class="account-pages"></div>
        <div class="clearfix"></div>
        <div class="wrapper-page">
            <div class="text-center">
                <a href="#" class="logo"><img src="src/assets/images/logo.png" border="0" ></a>
            </div>
            <div class="m-t-40 card-box">
                <div class="text-center">
                    <h4 class="text-uppercase font-bold m-b-0">Sign In</h4>
                </div>
                <div class="panel-body">
                    <form class="form-horizontal m-t-20">
                        <div class="alert alert-danger" v-show="ErrorMsg">
                          <strong>Error! </strong> Invalid login
                        </div>
                        <div class="form-group ">
                            <div class="col-xs-12">
                                <input class="form-control" type="text" name="username" v-model="username" placeholder="Username" v-validate="'required|alpha'" autocomplete="off">
                                <span class="error" v-if="errors.has('username')">{{ errors.first('username') }}</span>

                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-xs-12">
                                <input class="form-control" type="password" name="password" v-model="password" placeholder="Password"  v-validate="'required|alpha'">
                                 <span class="error" v-if="errors.has('password')">{{ errors.first('password') }}</span>
                            </div>
                        </div>
                       
                        <div class="form-group text-center m-t-30">
                            <div class="col-xs-12">
                              <button class="btn btn-custom  btn-bordred btn-block waves-effect waves-light" type="button" @click="login()">Log In</button>
                                
                            </div>
                        </div>                       
                    </form>
                </div>
            </div>
            <!-- end card-box-->           
        </div>  
  </div>
</template>

<script>
export default {
    data () {
        return {
            username:'',
            password:'',
            ErrorMsg:false
        }
    },
    methods: { 
        
            login() {
                
                this.$validator.validateAll().then(res=>{
                    if(res) {
                        var postdata = {
                            username:this.username,
                            password:this.password
                        }
                       
                        this.$http.post("login",postdata).then(response => {
                             if(response.body.error == false) {
                                this.$auth.setToken(response.body.token, response.body.expiretime + Date.now())     
                                this.$router.push('/userlist')
                             } else {                                
                                 swal("Error !",response.body.message,"error");
                             }                                
                        })
                    } else {
                        //console.log('Please correct all error!')
                        //swal("Error !",'Please correct all error!',"error");
                    }
                })
            }
        }   
}
</script>

<style lang="scss">


</style>
