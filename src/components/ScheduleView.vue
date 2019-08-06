<template>
    <div>
        <div class="panel-heading" role="tab" :id="'headingOne'+day.id">
            <div class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion2" :href="'#collapseOne'+day.id" aria-expanded="false" :aria-controls="'collapseOne'+day.id">
                    
                    <div class="lgx-single-schedule csi-single-schedule">
                        <div :class="['author',day.details.speaker_id.length <=1? '':'author-multi']">
                            <span v-for="spk in day.details.speaker_id" :key='spk'>
                            <img onerror='this.src="/assets/img/speakers/droid.png"' width='100' v-for="speaker in speakers" :key="speaker.id" v-if="spk == speaker.details.id" :src="[speaker.details.photoUrl != '' ? '/assets/img/speakers/'+speaker.details.name.replace(/ /g, '')+'.png' : '/assets/img/speakers/droid.png']" alt="Speaker"/>
                            </span>
                        </div>
                        <div class="schedule-info">
                            <h4 class="time">{{day.details.time}} - <span>{{day.details.duration}} </span>
                            
                            <i :class="['fa ',searchId(day.details.id, day.details.day_number) == true ? 'fa-star' : 'fa-star-o']" @click="favorite(day.details.id, day.details.day_number,day.details.notification_slug)"></i>
                            

                            </h4>
                            <h3 class="title">{{day.details.title}}</h3>
                            <h4 class="author-info">
                                <i :style="{ color: day.details.session_color != '' ? day.details.session_color : '#000'}">#{{day.details.topic != '' ? day.details.topic: 'Android'}} | </i>
                                <span class="audience" :style="{ color: day.details.session_color != '' ? day.details.session_color : '#000'}">{{day.details.session_audience}}</span> |
                                By 
                                <span v-for="(spk,key) in day.details.speaker_id" :key='key'>
                                    <span v-for="speaker in speakers" :key="speaker.id" v-if="spk == speaker.details.id" >{{speaker.details.name}} 
                                        <span v-if="key+1 != day.details.speaker_id.length">, </span>
                                    </span>
                                </span> 

                                <span v-if="day.details.start_status != 'notStarted'">
                                    <span v-if="!searchSessionReview(day.details.id, day.details.day_number)" class="pull-right" @click="openFeedbackModal(day)">
                                        feedback
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
                <h4 class="location"><strong>Room:</strong>  {{day.details.room}} , <span>iHub</span> </h4>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from './../services/Firebase.ts';
    import db from './../services/Database.ts';
    import Axios from 'axios';
export default {
    name: 'ScheduleView',
    props: ['day'],
    computed: {
         stars(){
            return this.$store.state.stars
        },
        speakers(){
            return this.$store.state.speakers
        },
        sessionReviews()
        {
            return this.$store.state.sessionReviews
        },
    },
    methods: {
          favorite(id, day, topic){
              var vm = this;
            //   console.log(topic)
              firebase.auth().onAuthStateChanged((user) => {
                if(user) {
                    // ? test the color
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
          closeFeedbackModal(){
            const el = document.getElementsByClassName("modal-feedback")[0];
            if(el){
                // console.log(el)
                el.classList.remove('in');
                el.style.display= 'none'
            }
          },
          openFeedbackModal(day){
              firebase.auth().onAuthStateChanged((user) => {
                if(user) {
                    this.$store.commit('updateSessionToEvaluate', {day})
                    const el = document.getElementsByClassName("modal-feedback")[0];
                    if(el){
                        el.classList.add('in');
                        el.style.display= 'block'
                    }
                }else{
                    this.closeFeedbackModal()
                    this.openModal()
                    return
                }
              })
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
          searchSessionReview(id, day){
            let arr = this.sessionReviews
            // console.log(arr)
            let obj = arr.find(data => data.details.session_id == id && data.details.day_number === day);
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

}
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
    .audience{
        text-transform: capitalize!important;
    }
</style>
