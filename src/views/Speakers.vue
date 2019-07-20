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
                    <div v-if="eventDay" class="row">
                        <div v-for="speaker in speakers" :key="speaker.id" class="col-xs-12 col-sm-6 col-md-4">
                            <div class=" csi-single-speaker">
                                <figure>
                                    <div class="thumb">
                                    <img class=" imaged" width="360"  :src="[speaker.details.photoUrl != '' ? speaker.details.photoUrl : 'assets/img/speakers/speaker3.jpg']" alt="speaker"/>
                                    </div>
                                    <figcaption>
                                        <div class="social-group">
                                            <a class="sp-tw" target="_blank" :href="'https://twitter.com/'+speaker.details.twitterHandle"><i class="fa fa-twitter"></i></a>
                                            <!-- <a class="sp-fb" href="##"><i class="fa fa-facebook"></i></a>
                                            <a class="sp-insta" href="##"><i class="fa fa-instagram"></i></a>
                                            <a class="sp-in" href="##"><i class="fa fa-linkedin"></i></a> -->
                                        </div>
                                        <div class="speaker-info">
                                            <h3 class="title"><a href="#">{{speaker.details.name}}</a></h3>
                                            <h4 class="subtitle company">{{speaker.details.bio != '' ? speaker.details.bio : 'We don\'t know you'}} </h4>
                                             <h4 class="subtitle company">{{speaker.details.company != '' ? speaker.details.company : 'Android254'}} </h4>
                                            <h4 class="subtitle twitter"><a target="_blank" class="twitter" :href="'https://twitter.com/'+speaker.details.twitterHandle"><i class="fa fa-twitter"></i>{{speaker.details.twitterHandle}}</a> </h4>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
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
.speaker-info{
    height: 160px;
}
.company{
    text-transform: none!important;
    font-size: 18px!important;
}
.thumb{
    height: 350px;
}
</style>
