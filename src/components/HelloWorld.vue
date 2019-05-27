<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-container>
    <v-layout

      wrap
    >
      <!--<v-flex xs12>
        <v-img
          :src="require('../assets/f-logo.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>-->

      <v-flex mb-4>
        <!--<h2 class="display-0 mb-3">
          Поиск ботов в социальной сети Вконтакте
        </h2>-->
        <p class="subheading font-weight-regular">
          Программа для поиска ботов в соц. сети Вконтакте


        </p>
        <v-list
          style="background-color: #fafafa"
          flat

          three-line

        >
          <!--<v-subheader>Как работате?
            <v-spacer>

            </v-spacer>

              <v-icon v-if="up" @click="up=!up">keyboard_arrow_down</v-icon>
              <v-icon v-else @click="up=!up">keyboard_arrow_up</v-icon>

          </v-subheader>-->
          <v-list-group key
          >
            <template v-slot:activator >
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>Как работате?</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
            <v-list-tile>df</v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Content filtering</v-list-tile-title>
                <v-list-tile-sub-title>Set the content filtering level to restrict appts that can be downloaded</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Password</v-list-tile-title>
                <v-list-tile-sub-title>Require password for purchase or use password to restrict purchase</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>


        </v-list>
      </v-flex>

      <!--<v-flex
        mb-5
        xs12
      >
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>

        <v-layout justify-center>
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-layout>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>

        <v-layout justify-center>
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-layout>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

        <v-layout justify-center>
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-layout>
      </v-flex>-->
    </v-layout>
    <v-layout row wrap>
    <v-flex>

      <v-text-field v-model="ids"
        label="Введите идентификаторы пользователей через запятую"
                    outline
      ></v-text-field>
    </v-flex>
      <v-btn :disabled="!enable" color="info" flat @click="load" >Начать</v-btn>
      </v-layout>
    <v-layout row wrap class="pb-4 pl-3">
      <v-flex >
        Или

      </v-flex>

    </v-layout>
    <v-layout row wrap>
      <v-flex >

        <v-text-field v-model="groupId"
                      label="Введите идентификатор группы"
                      outline
        ></v-text-field>
      </v-flex>
      <v-btn :disabled="!enable" color="info" flat @click="loadGroup">Начать</v-btn>
    </v-layout>

    <v-toolbar color="white">
      <v-toolbar-title>Таблица проверенных пользователей</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-flex>
        Проверено : {{data.length}}
      </v-flex>
      <v-flex>
        Найдено ботов: {{data.filter(p=>p.totalpoints>75).length}}
      </v-flex>
      <v-flex>
        Очки ботов : {{data.map(u=>u.totalpoints).reduce((a,b) => a + b, 0)}}
      </v-flex>




    </v-toolbar>



    <v-data-table
      disable-initial-sort
      :headers="headers"
      :items="data"
      :loading=progress
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      class="elevation-1"
    >
      <v-progress-linear color="blue"></v-progress-linear>
      <template v-slot:items="props" >
        <td ><v-avatar><v-img :src="props.item.id"></v-img></v-avatar></td>
        <td  class="text-xs-right">{{ props.item.name }}</td>
        <td class="text-xs-right"><a :href="'//' + props.item.link" target="_blank">
        {{ props.item.link}}</a></td>
        <td v-if="!bot(props.item)" class="text-xs-right">{{ props.item.totalpoints }}</td>
        <td v-else style="background-color: #ffd4da" class="text-xs-right">{{ props.item.totalpoints }}</td>
        <td class="text-xs-right"><div v-for="cat in props.item.categ">
          {{cat}}
        </div></td>

      </template>
    </v-data-table>

  </v-container>
</template>

<script>
  function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
  }
  export default {
    data: () => ({
      progress:false,
      ids:"",
      up:true,
      groupId:"",
      rowsPerPageItems: [10, 20, 30, 40,{"text":"$vuetify.dataIterator.rowsPerPageAll","value":-1}],
      pagination: {
        rowsPerPage: 20
      },
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader'
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify'
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify'
        }
      ],
      headers: [
        {
          align: 'left',
          sortable: false,
        },
        { text: "Имя", value: 'name',align: 'right'},
        { text: 'Ссылка', value: 'id',align: 'right' },
        { text: 'Очки бота', value: 'totalpoints' ,align: 'right'},
        { text: 'Категории', value: 'categ' ,align: 'right'}
      ],
      data: [],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com'
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com'
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuetifyjs.com'
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs'
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify'
        }
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer'
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/layout/pre-defined'
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
        }

      ]
    }),
    computed:{
      enable(){
        return localStorage.getItem("code")!==null
      }

    },
    methods:{
      bot(item){
        return item.totalpoints > 75
      },
      loadGroup(){
        this.progress=true
        let vm = this
        this.$http.post("/api/getmembers",{
          "code":localStorage.getItem("code"),
          "groupId":this.groupId
        }).then(res=>{
          var chain = new Promise(function(resolve, reject) {
            resolve(console.log("+"))
          })
          for (let post of res.data) {
            chain = chain.then(function() {
              vm.progress=true
              return vm.$http.post("/api/analysisuser",{
                "code":localStorage.getItem("code"),
                "userId":post
              }).then(res=>{
                vm.data.push(
                  {
                    link: res.data.id,
                    name: res.data.name,
                    id: res.data.icon,
                    totalpoints: res.data.total,
                    categ: res.data.categ

                  }
                )
              })
            }).then(()=>{
              this.progress=false
            })
          }
        })
      },
      load(){
        this.progress=true
        let vm = this
        console.log(this.ids)
        let listIds = this.ids.split(',')
        console.log(listIds)
        var chain = new Promise(function(resolve, reject) {
          resolve(console.log("+"))
        })
        for (let post of listIds) {
          chain = chain.then(function() {
            vm.progress=true
            return vm.$http.post("/api/analysisuser",{
              "code":localStorage.getItem("code"),
              "userId":post
            }).then(res=>{
              vm.data.push(
                {
                  link: res.data.id,
                  name: res.data.name,
                  id: res.data.icon,
                  totalpoints: res.data.total,
                  categ: res.data.categ

                }
              )
            })
          }).then(()=>{
            this.progress=false
          })
        }
        /*var i =0
        async function insertPosts(listIds) {
          for (let post of listIds) {
            const res = await vm.$http.post("/api/analysisuser",{
              "code":localStorage.getItem("code"),
              "userId":post
            });
            console.log(res)
            sleep(500)
          }
        }
        insertPosts(listIds)*/



      }
    }
  }
</script>

<style>

</style>
