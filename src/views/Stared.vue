<template>
    <section>
        <!--Banner Inner-->
    <section>
        <div class="lgx-banner lgx-banner-inner">
            <div class="lgx-page-inner">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="lgx-heading-area">
                                <div class="lgx-heading lgx-heading-white">
                                    <h2 class="heading">Stared Sessions</h2>
                                    <a class="" href="#" @click='logout()'>Logout</a>
                                </div>
                        
                            </div>
                        </div>
                    </div><!--//.ROW-->
                </div><!-- //.CONTAINER -->
            </div><!-- //.INNER -->
        </div>
    </section>
     <!--//.Banner Inner-->

    <section>
       
        <!--SCHEDULE-->
        <div id="csi-schedule" class=" csi-schedule csi-schedule2">
            <div class=" csi-inner">
                <div class="container">
                    <div v-if="eventDay" class="row">
                        <div class="col-xs-12">
                            <div class="csi-tab csi-tab2">
                                <ul class="nav nav-pills csi-nav">
                                    <li class="active"><a data-toggle="pill" href="#home"><h3>First <span>Day</span></h3> <p><span>8 </span>Aug, 2019</p></a></li>
                                    <li><a data-toggle="pill" href="#menu1"><h3>Second <span>Day</span></h3> <p><span>9 </span>Aug, 2019</p></a></li>
                                   
                                </ul>
                                <div class="tab-content csi-tab-content">


                                    <div id="home" class="tab-pane fade in active">

                                        <div class="panel-group" id="accordion1" role="tablist" aria-multiselectable="true">
                                            <div v-for="day in dayOne" :key='day.id' >
                                                <div v-for="star in stars" :key='star.id' v-if="star.details.session_id == day.details.id && star.details.day === day.details.day_number && star.details.starred == true" class="panel panel-default lgx-panel csi-panel">
                                                <div class="panel-heading" role="tab" :id="'headingOne'+day.id">
                                                    <div class="panel-title">
                                                        <a role="button" data-toggle="collapse" data-parent="#accordion1" :href="'#collapseOne'+day.id" aria-expanded="false" :aria-controls="'collapseOne'+day.id">
                                                            
                                                            <div class="lgx-single-schedule csi-single-schedule">
                                                                <div :class="['author',day.details.speaker_id.length <=1? '':'author-multi']">
                                                                    <span v-for="spk in day.details.speaker_id" :key='spk'>
                                                                    <img width='100' v-for="speaker in speakers" :key="speaker.id" v-if="spk == speaker.details.id" :src="speaker.details.photoUrl != '' ? speaker.details.photoUrl : 'assets/img/schedule/speaker1.jpg'" alt="Speaker"/>
                                                                    </span>
                                                                </div>
                                                                <div class="schedule-info">
                                                                    <h4 class="time">{{day.details.time}} - <span>{{day.details.duration}} </span>

                                                                    <i :class="['fa ',searchId(day.details.id, day.details.day_number) == true ? 'fa-star' : 'fa-star-o']" @click="favorite(day.details.id, day.details.day_number,day.details.notification_slug)"></i>
                                                                    
                                                                    </h4>
                                                                    <h3 class="title">{{day.details.title}}</h3>
                                                                    <h4 class="author-info">
                                                                        <i :style="{ color: day.details.session_color != '' ? day.details.session_color : '#000'}">#{{day.details.topic != '' ? day.details.topic: 'Android'}} |</i>
                                                                        By 
                                                                        <span v-for="(spk,key) in day.details.speaker_id" :key='key'>
                                                                    <span v-for="speaker in speakers" :key="speaker.id" v-if="spk == speaker.details.id" >{{speaker.details.name}} 
                                                                        <span v-if="key+1 != day.details.speaker_id.length">, </span>
                                                                         </span>
                                                                    </span>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div :id="'collapseOne'+day.id" class="panel-collapse collapse " role="tabpanel" :aria-labelledby="'headingOne'+day.id">
                                                    <div class="panel-body">
                                                        <p class="text">
                                                           {{day.details.description}}
                                                        </p>
                                                        <h4 class="location"><strong>Location:</strong>  {{day.details.room}} , <span>iHub</span> </h4>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            
                                        </div>

                                    </div>

                                    <div id="menu1" class="tab-pane fade in ">

                                       <div class="panel-group" id="accordion2" role="tablist" aria-multiselectable="true">
                                            <div v-for="day in dayTwo" :key='day.id'>
                                                <div v-for="star in stars" :key='star.id' v-if="star.details.session_id == day.details.id && star.details.day === day.details.day_number && star.details.starred == true" class="panel panel-default lgx-panel csi-panel">
                                                <div class="panel-heading" role="tab" :id="'headingOne'+day.id">
                                                    <div class="panel-title">
                                                        <a role="button" data-toggle="collapse" data-parent="#accordion2" :href="'#collapseOne'+day.id" aria-expanded="false" :aria-controls="'collapseOne'+day.id">
                                                            
                                                            <div class="lgx-single-schedule csi-single-schedule">
                                                                <div :class="['author',day.details.speaker_id.length <=1? '':'author-multi']">
                                                                    <span v-for="spk in day.details.speaker_id" :key='spk'>
                                                                    <img width='100' v-for="speaker in speakers" :key="speaker.id" v-if="spk == speaker.details.id" :src="speaker.details.photoUrl != '' ? speaker.details.photoUrl : 'assets/img/schedule/speaker1.jpg'" alt="Speaker"/>
                                                                    </span>
                                                                </div>
                                                                <div class="schedule-info">
                                                                    <h4 class="time">{{day.details.time}} - <span>{{day.details.duration}}</span>
                                                                    
                                                                    <i :class="['fa ',searchId(day.details.id, day.details.day_number) == true ? 'fa-star' : 'fa-star-o']" @click="favorite(day.details.id, day.details.day_number,day.details.notification_slug)"></i>

                                                                    </h4>
                                                                    <h3 class="title">{{day.details.title}}</h3>
                                                                    <h4 class="author-info">
                                                                        <i :style="{ color: day.details.session_color != '' ? day.details.session_color : '#000'}">#{{day.details.topic != '' ? day.details.topic: 'Android'}} |</i>
                                                                        By 
                                                                        <span v-for="(spk,key) in day.details.speaker_id" :key='key'>
                                                                    <span v-for="speaker in speakers" :key="speaker.id" v-if="spk == speaker.details.id" >{{speaker.details.name}} 
                                                                        <span v-if="key+1 != day.details.speaker_id.length">, </span>
                                                                         </span>
                                                                    </span>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div :id="'collapseOne'+day.id" class="panel-collapse collapse " role="tabpanel" :aria-labelledby="'headingOne'+day.id">
                                                    <div class="panel-body">
                                                        <p class="text">
                                                           {{day.details.description}}
                                                        </p>
                                                        <h4 class="location"><strong>Location:</strong>  {{day.details.room}} , <span>iHub</span> </h4>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            
                                        </div>

                                    </div>

                                   
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                   <div v-else class="row">
                        <div class="col-xs-12">
                            <div class="lgx-heading">
                                <h2 class="heading">The schedule will come out on July 17th! </h2>
                            </div>
                        </div>
                    </div>
                </div>
                    <!--//.ROW-->
                <!-- //.CONTAINER -->
            </div>
        </div>
            <!--SCHEDULE END-->
    </section>
    </section>
 
</template>

<script>
    import firebase from './../services/Firebase.ts';
    import db from './../services/Database.ts';
    import Axios from 'axios';
    export default {
      beforeCreate: function() {
        this.$store.dispatch("getAgendas");
        this.$store.dispatch("getFirstDay");
        this.$store.dispatch("getDayTwo");
        this.$store.dispatch('getSpeakers');
        this.$store.dispatch('getStars');
      },
      computed: {
        agendas() {
          return this.$store.state.agendas;
        },
        dayOne() {
          return this.$store.state.dayOne;
        },
         dayTwo() {
          return this.$store.state.dayTwo;
         },
        speakers(){
            return this.$store.state.speakers
        },
        stars(){
            return this.$store.state.stars
        },
        eventDay(){
           return process.env.VUE_APP_EVENT_READY;
        }
      },
      methods: {
          favorite(id, day, topic){
              var vm = this;
              console.log(topic)
              firebase.auth().onAuthStateChanged((user) => {
                if(user) {
                    // console.log(user)
                    // console.log(id)
                    // console.log(day)
                    var staredSessions = db.collection("starred_sessions").where('user_id','==',user.uid).where('day','==',day).where('session_id','==',id);
                    staredSessions.get().then(function(querySnapshot) {
                        if (querySnapshot.empty) {
                            db.collection("starred_sessions").add({
                                day: day,
                                session_id: id,
                                starred: true,
                                user_id: user.uid
                            }).then(function(docRef) {
                                console.log("Starred");
                                vm.notification(topic,'subscribed')
                            })
                            .catch(function(error) {
                                console.error("Error staring");
                            });
                        } else {
                            querySnapshot.forEach((doc) => {
                                db.collection("starred_sessions").doc(doc.id).update({starred: doc.data().starred == true ? false : true})
                                .then(function(docRef) {
                                    doc.data().starred == true ? vm.notification(topic,'unsubscribed') : vm.notification(topic,'subscribed')

                                    console.log(doc.data().starred == true ? 'Removed again' : 'Readded star');
                                })
                                .catch(function(error) {
                                    console.error("Error in this"+ error);
                                });
                            })
                        }
                    });
                } else {
                    return this.openModal() 
                }
            })
          },
          openModal(){
            const el = document.getElementsByClassName("modal-login")[0];
            if(el){
                el.classList.add('in');
                el.style.display= 'block'
            }
          },
          closeModal(){
            const el = document.getElementsByClassName("modal-login")[0];
            if(el){
                // console.log(el)
                el.classList.remove('in');
                el.style.display= 'none'
            }
          },
          searchId(id, day){
            let arr = this.stars
            // console.log(day)

            let obj = arr.find(data => data.details.session_id == id && data.details.day === day && data.details.starred == true);
            // console.log(obj)
            if(obj){
                return true
            }else{
                return false
            }
          },
          notification(topic, type){
              const messaging = firebase.messaging();
              messaging.getToken().then((token) => {
                  type === 'subscribed' ? 
                  this.setTokenToTopic(token, topic) :
                  this.removeTokenToTopic(token, topic)
                })
        
            },
            setTokenToTopic(token, topic)
            {
                // console.log(topic)
                const headers = {
                    'Authorization': 'key='+process.env.VUE_APP_SERVER_KEY,
                    'Content-Type' : 'application/json'
                };

                Axios.post('https://iid.googleapis.com/iid/v1/'+token+'/rel/topics/'+topic,null,{headers})
                .then(response => {
                    //   console.log('Subscribed to "'+topic+'"');
                    console.log('Subscribed to session.');
                    //   console.log(response)
                }).catch((err) => {
                    console.log('Unable to subscribe ', err);
                    // console.log(err.response.data)
                    });
            },
            removeTokenToTopic(token, topic)
            {
                // console.log(process.env.VUE_APP_SERVER_KEY)
                const headers = {
                    'Authorization': 'key='+process.env.VUE_APP_SERVER_KEY,
                    'Content-Type' : 'application/json'
                };

                Axios.post('https://iid.googleapis.com/iid/v1:batchRemove',{
                    "to": "/topics/"+topic,
                    "registration_tokens": [token]
                    },{headers})
                .then(response => {
                    //   console.log('Subscribed to "'+topic+'"');
                    console.log('unsubscribed from session.');
                    //   console.log(response)
                }).catch((err) => {
                    console.log('Unable to subscribe ', err);
                    // console.log(err.response.data)
                    });
            }
        }
    };
</script>
<style scoped>
    .panel-group,
    .panel-default,
    .panel-heading {
      padding: 0px !important;
    }
    /* .agendas{
        background-color: red!important;
    } */
    .time{
        text-transform: none!important;
    }
    .styled{
        z-index: 99999;
    }
</style>
