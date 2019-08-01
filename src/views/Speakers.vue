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
                                        <h2 class="heading">Who’s Speaking</h2>
                                    </div>
                                    
                                </div>
                            </div>
                        </div><!--//.ROW-->
                    </div><!-- //.CONTAINER -->
                </div><!-- //.INNER -->
            </div>
        </section> <!--//.Banner Inner-->
        <main>
        <div class="">
            <!--News-->
            <section>
                 <div id="csi-speakers" class="csi-speakers">
                <div class="csi-inner">
                <div class="container">
                    <div v-if="eventDay" class="col-xs-12">
                            <div v-for="speaker in speakers" :key="speaker.id" class="lgx-col4 lgx-single-speaker2">
                                <figure>
                                    <img class=" imaged"  :src="[speaker.details.photoUrl != '' ? '/assets/img/speakers/'+speaker.details.name.replace(/ /g, '')+'.png' : 'assets/img/speakers/speaker3.jpg']" alt="speaker"/>
                                    <figcaption>
                                        <div class="social-group">
                                             <a class="sp-tw" target="_blank" :href="'https://twitter.com/'+speaker.details.twitterHandle"><i class="fa fa-twitter"></i></a>
                                              <a class="sp-fb" href="#" @click.prevent="openModal(speaker.id)"><i class="fa fa-info-circle"></i></a>
                                        </div>
                                        <div class="speaker-info">
                                            <h4 class="title"><a href="#">{{speaker.details.name}}</a></h4>
                                            <h5 class="subtitle company">{{speaker.details.company != '' ? speaker.details.company : 'Android254'}}</h5>
                                        </div>
                                        <modal :name="speaker.id" height='auto' :scrollable="true">
                                            <div class='row'>
                                                <div class='col-md-10 col-xs-10 col-xs-offset-1 col-md-offset-1'>
                                                    
                                                        <h3>Speaker Details</h3>
                                                        <h4>{{speaker.details.name}}</h4>
                                                        <h5 class="subtitle twitter"><a target="_blank" class="twitter" :href="'https://twitter.com/'+speaker.details.twitterHandle"><i class="fa fa-twitter"></i>{{speaker.details.twitterHandle}}</a> </h5>
                                                    <h4>Speaker Bio</h4>
                                                    <p>
                                                        {{speaker.details.bio}}
                                                    </p>
                                                    <br>
                                                </div>
                                            </div>
                                        </modal>
                                    </figcaption>
                                </figure>
                            </div>
                           
                        </div>
                    <!-- <div v-if="eventDay == 'true'" class="row">
                        <div v-for="speaker in speakers" :key="speaker.id" class="col-xs-12 col-sm-6 col-md-3">
                            <div class=" csi-single-speaker">
                                <figure>
                                    <div class="thumb">
                                    <img class=" imaged"  :src="[speaker.details.photoUrl != '' ? '/assets/img/speakers/'+speaker.details.name.replace(/ /g, '')+'.png' : 'assets/img/speakers/speaker3.jpg']" alt="speaker"/>
                                    </div>
                                    <figcaption>
                                   
                                        <div class="social-group">
                                            <a class="sp-tw" target="_blank" :href="'https://twitter.com/'+speaker.details.twitterHandle"><i class="fa fa-twitter"></i></a>
                                            
                                        </div>
                                        <div class="speaker-info">
                                            <h4 class="title"><a href="#">{{speaker.details.name}}</a></h4>
                                            
                                             <h5 class="subtitle company">{{speaker.details.company != '' ? speaker.details.company : 'Android254'}} </h5>
                                             <h5 class="subtitle company">
                                                 <a href="#" class="bio" @click="openModal(speaker.id)">See Bio</a>
                                             </h5>
                                            <h5 class="subtitle twitter"><a target="_blank" class="twitter" :href="'https://twitter.com/'+speaker.details.twitterHandle"><i class="fa fa-twitter"></i>{{speaker.details.twitterHandle}}</a> </h5>

                                            <modal :name="speaker.id" height='auto' :scrollable="true">
                                                <div class='row'>
                                                    <div class='col-md-10 col-md-offset-1'>
                                                         <h3>{{speaker.details.name}}</h3>
                                                         <h5 class="subtitle twitter"><a target="_blank" class="twitter" :href="'https://twitter.com/'+speaker.details.twitterHandle"><i class="fa fa-twitter"></i>{{speaker.details.twitterHandle}}</a> </h5>
                                                        <h4>Speaker Bio</h4>
                                                        <p>
                                                            {{speaker.details.bio}}
                                                        </p>
                                                        <br>
                                                    </div>
                                                </div>
                                            </modal>

                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div> -->
                    <div v-else class="row">
                        <div class="col-xs-12">
                            <div class="lgx-heading">
                                <h2 class="heading">The Speakers list will come out on July 17th! </h2>
                            </div>
                        </div>
                    </div>
                    <!--//.ROW-->
                </div><!-- //.CONTAINER -->
                </div>
                 </div>
            </section>
            <!--News END-->
        </div>
    </main>
    </section>
</template>

<script>
export default {
    beforeCreate: function () {
        this.$store.dispatch('getSpeakers')
    },
    computed: {
        speakers(){
            return this.$store.state.speakers
        },
         eventDay(){
            return process.env.VUE_APP_EVENT_READY;
        }
    }, methods: {
        openModal(name){
            this.$modal.show(name);
        }
    }
}
</script>
<style scoped>
.lgx-single-speaker2{
    margin-bottom: 50px;
}
.twitter{
    text-transform: lowercase!important;
    font-size: 15px!important;
}
/* .speaker-info{
    height: 160px;
} */
.company{
    text-transform: none!important;
    font-size: 16px!important;
}
.thumb{
    height: 260px;
}
.bio{
    font-size: 18px;
}
.title{
    font-size: 18px!important;
}
</style>
