<template>
  <v-app>
    <v-toolbar app>
      <router-link to="/" class="toolbar-title">
        <v-toolbar-title class="headline text-uppercase">
          <span>Find</span>
          <span class="font-weight-light">BOT</span>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <div v-if=enable>
        <v-avatar style="border: 2px solid #42A5F5;">
          <v-img :src=avatar></v-img>
        </v-avatar>
        <span  class="font-weight-light">
          {{fullName}}
        </span>
      </div>
      <v-spacer>
      </v-spacer>
      <v-btn v-if=!enable
             @click="oauth"
             flat>
        Войти
      </v-btn>
      <div v-if=enable>
        <v-btn  flat color="error" @click="clear">
          Выйти
        </v-btn>
      </div>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      refCount: 0,
      isLoading: false
      //
    }
  },
  created() {
    let vm = this
    this.$http.interceptors.request.use((config) => {
      vm.setLoading(true)
      return config;
    }, (error) => {
      vm.setLoading(false)
      return Promise.reject(error);
    });

    this.$http.interceptors.response.use((response) => {
      vm.setLoading(false)
      return response;
    }, (error) => {
      vm.setLoading(false)
      return Promise.reject(error);
    });
  },
  computed:{
    enable(){
      return localStorage.getItem("code")!==null
    },
    avatar(){
      return localStorage.getItem("avatar")
    },
    fullName(){
      return localStorage.getItem("name")
    }
  },
  methods:{
    setLoading(isLoading) {
      if (isLoading) {
        this.refCount++;
        this.isLoading = true;
      } else if (this.refCount > 0) {
        this.refCount--;
        this.isLoading = (this.refCount > 0);
      }
    },
    oauth(){
      let vm = this

      let redirWin = window.open("https://oauth.vk.com/authorize?client_id=6996710&display=page&redirect_uri=http://localhost:8080/redirect&scope=friends,video,photos,groups&response_type=code&v=5.95",'_blank', 'height=355,width=660,scrollbars=yes,status=1')

      var timer = setInterval(function() {
        console.log("timer work")
        if(redirWin.closed) {
          clearInterval(timer);
          console.log(localStorage.getItem("123"))
          vm.$http.post("/api/oauth",{
            "code": localStorage.getItem("code"),
            "str":"str"
          }).then(res=>{
            localStorage.setItem("avatar",res.data.img)
            localStorage.setItem("name",res.data.name)
            location.reload()

          },err=>{
            console.log(err)
          })
        }
      }, 500);
      /*this.$http.get("/login")
        .then(res=>{
          console.log(res)
      },
      err=>{
          console.log(err)
      })*/
    },
    closeRedir(){
      console.log("closed")
    },
    clear(){
      localStorage.clear()
      location.reload()
    }
  }
}
</script>

<style>
  .toolbar-title {
    color: inherit;
    text-decoration: inherit;
  }
</style>
