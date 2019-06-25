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
                                    <h2 class="heading">Event Schedule</h2>
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
                                    <!-- <li><a data-toggle="pill" href="#menu2"><h3>Agenda</h3></a></li> -->
                                </ul>
                                <div class="tab-content csi-tab-content">


                                    <div id="home" class="tab-pane fade in active">

                                        <div class="panel-group" id="accordion1" role="tablist" aria-multiselectable="true">
                                            <div  v-for="day in dayOne" :key='day.id' class="panel panel-default lgx-panel csi-panel">
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
                                                                    <h4 class="time">{{day.details.time}} - <span>{{day.details.duration}}</span></h4>
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

                                    <div id="menu1" class="tab-pane fade in ">

                                       <div class="panel-group" id="accordion2" role="tablist" aria-multiselectable="true">
                                            <div  v-for="day in dayTwo" :key='day.id' class="panel panel-default lgx-panel csi-panel">
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
                                                                    <h4 class="time">{{day.details.time}} - <span>{{day.details.duration}}</span></h4>
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

                                    <!-- <div id="menu2" class="tab-pane fade in ">

                                        <div class="panel-group" id="accordion3" role="tablist" aria-multiselectable="true">
                                            <div v-for="agenda in agendas" :key='agenda.id' :style="{ backgroundColor: agenda.details.background_color }" class="panel agendas panel-default lgx-panel csi-panel">
                                                <div class="panel-heading" role="tab" id="headingThree">
                                                    <div class="panel-title">
                                                        <div class="lgx-single-schedule csi-single-schedule">
                                                            <div class="author">
                                                                <img :src="agenda.details.iconUrl" alt="Speaker"/>
                                                               
                                                            </div>
                                                            <div :style="{ backgroundColor: agenda.details.background_color }" class="agendas schedule-info">
                                                                <h4 class="time">{{agenda.details.time}} </h4>
                                                                <h3 class="title">{{agenda.details.title}}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>

                                    </div> -->
                                    
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
                </div>
                <!-- //.CONTAINER -->
            </div>
        </div>
            <!--SCHEDULE END-->
    </section>
    </section>
</template>

<script>
    export default {
      beforeCreate: function() {
        this.$store.dispatch("getAgendas");
        this.$store.dispatch("getFirstDay");
        this.$store.dispatch("getDayTwo");
        this.$store.dispatch('getSpeakers');
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
        eventDay(){
           return process.env.VUE_APP_EVENT_READY;
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
</style>
