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
          <v-list-group
          >
            <template v-slot:activator >
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>Как работает?</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
            <v-list-tile><b>Страницы проверяемых пользователей фильтруются по следующим характеристикам:</b></v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Аккаунт забанен</v-list-tile-title>
                <v-list-tile-sub-title>Живой человек, пользующийся соцсетью восстановит доступ. Спамеру или
                  ботоводу с тысячей аккаунтов легче завести новый аккаунт после бана. Да и крутить рекламу
                  по забаненным живым пользователям все равно невозможно.</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Подписан на 1000 и более сообществ</v-list-tile-title>
                <v-list-tile-sub-title>Основная статья заработка на ботах — это вступление в различные группы
                  (ну да, еще лайки и репосты). И вряд ли владельцы ботоферм смогут скрыть это.</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Состоит во множестве сообществ о разных городах</v-list-tile-title>
                <v-list-tile-sub-title>Признаться, не нашел ни единой причины, по которой обычному человеку может быть
                  интересно одновременно следить за новостями групп «ремонт стиральных машин казань», «наружная
                  реклама омск», «дизайн интерьера калуга» и еще десятке коммерческих сообществ разных городов.
                  Особенно учитывая качество контента в 95% таких сообществ. Зато боту, зарабатывающему
                  на вступлении в сообщества это очень выгодно.
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Состоит в сообществе о взаимораскрутке</v-list-tile-title>
                <v-list-tile-sub-title>Таких стоит оставлять, только если ваша ЦА — школьники с дефицитом внимания,
                  отсутствием интересов и кучей свободного времени. Лично я считаю такую аудиторию не просто мусорной,
                  а ярко сигнализирующей о том, что они ненастоящие.
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>


            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>80% фотографий, постов и видео выложены в один день</v-list-tile-title>
                <v-list-tile-sub-title>Чаще всего страницы ботов заполняются единожды, для имитации активности пользователя.
                  Фильтр не рассматривает крайние случаи, когда у человека мало постов и фотографий на страницы
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>На странице имеются слова-триггеры</v-list-tile-title>
                <v-list-tile-sub-title>Чаще всего на страниц ботов можно найти следующие слова и словосочетания:
                  "Раскрутк","Продвижение","Взаимные лайки","Пиар","Добавь","Курсов","Диплом","Экзамен","Реферат","Сесси"
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Состоит в сообществе о взаимораскрутке</v-list-tile-title>
                <v-list-tile-sub-title>Таких стоит оставлять, только если ваша ЦА — школьники с дефицитом внимания,
                  отсутствием интересов и кучей свободного времени. Лично я считаю такую аудиторию не просто мусорной,
                  а ярко сигнализирующей о том, что они ненастоящие.
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Нет ссылок на другие соц. сети</v-list-tile-title>
                <v-list-tile-sub-title>Я не нашел способа установить ссылку на фейсбук/инстаграм через апи.
                  Может быть плохо искал, а может его и нет. Но поставить ссылку для бота сложнее: надо как минимум
                  завести этот аккаунт в соцсети и привязать его в интерфейсе вконтакте.
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Посты пользователя никто не смотрит</v-list-tile-title>
                <v-list-tile-sub-title>Этот признак куда более прост. Обычно если пользователь имеет кучу друзей, н
                  о при этом у него почти нет просмотров записей на стене, значит его друзья — имитация. А для чего
                  нужна имитация друзей, как ни для того, чтобы придать реальности фейковому аккаунту?
                </v-list-tile-sub-title>
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
        <td class="text-xs-right"><a :href="'//' + props.item.link" target="_blank">
          {{ props.item.link}}</a></td>
        <td  class="text-xs-right"><v-avatar><v-img :src="props.item.icon"></v-img></v-avatar></td>
        <td  class="text-xs-left">{{ props.item.name }}</td>

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
          text: "Ссылка",
          value: 'link',
          align: 'right',
        },
        { sortable: false,align: 'left',value:"icon" },
        { text: "Имя", value: 'name',align: 'left'},

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
        this.data=[]
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
                    icon: res.data.icon,
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
        this.data=[]
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
                  icon: res.data.icon,
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
