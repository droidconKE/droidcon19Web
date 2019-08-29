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
                                                    <schedule-view  :day='day' ></schedule-view>
                                                
                                                </div>
                                            </div>
                                            <div class="col-xs-12">
                                                <div class="lgx-heading">
                                                    <br>
                                                    <p>click on the star on the session to bookmark</p>
                                                    <router-link class=" lgx-btn lgx-btn-orange" to="/schedule">Back to Schedule</router-link>
                                                </div>
                                            </div>
                                            
                                        </div>

                                    </div>

                                    <div id="menu1" class="tab-pane fade in ">

                                       <div class="panel-group" id="accordion2" role="tablist" aria-multiselectable="true">
                                            <div v-for="day in dayTwo" :key='day.id'>
                                                <div v-for="star in stars" :key='star.id' v-if="star.details.session_id == day.details.id && star.details.day === day.details.day_number && star.details.starred == true" class="panel panel-default lgx-panel csi-panel">
                                                    <schedule-view  :day='day' ></schedule-view>
                                                
                                                </div>
                                                
                                            </div>
                                            <div>
                                                <div class="col-xs-12">
                                                    <div class="lgx-heading">
                                                        <br>
                                                        <p>click on the star to bookmark</p>
                                                        <router-link class=" lgx-btn lgx-btn-orange" to="/schedule">Back to Schedule</router-link>
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
        <session-feedback-modal></session-feedback-modal>
    </section>
 
</template>

<script>
    import ScheduleView from '@/components/ScheduleView.vue';
    import SessionFeedbackModal from '@/components/SessionFeedbackModal.vue';
    import firebase from './../../services/Firebase.ts';
    export default {
        components : {
            ScheduleView, SessionFeedbackModal
        },
      beforeCreate: function() {
        this.$store.dispatch("getAgendas");
        this.$store.dispatch("getFirstDay");
        this.$store.dispatch("getDayTwo");
        this.$store.dispatch('getSpeakers');
        this.$store.dispatch('getStars');
        this.$store.dispatch('getSessionReviews');
      },
      computed: {
        agendas () {
          return this.$store.state.agendas;
        },
        dayOne () {
          return this.$store.state.dayOne;
        },
         dayTwo () {
          return this.$store.state.dayTwo;
         },
        stars (){
            return this.$store.state.stars;
        },
        eventDay (){
           return process.env.VUE_APP_EVENT_READY;
        },
      },
      methods: {
          logout (){
            firebase.auth().signOut().then(() => {
            localStorage.setItem('authenticated', false);
            this.$router.push('/schedule');
        });
          },
      },
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
