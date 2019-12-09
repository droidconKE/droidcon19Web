<template>
  <div class="home">
    <!--BANNER-->
    <section>
        <div id="lgx-parallax-banner" class="lgx-banner lgx-banner-parallax"> <!--lgx-about-bottom-->
            <div class="lgx-section">
                <div id="layer-wrapper" class="lgx-item-parallax-banner">

                    <div id="object1" class="bglayer1 hidden-sm hidden-xs">
                        <img src="assets/img/parallax/3.png" alt="">
                    </div>
                    <div id="object5" class="rightlayer1 hidden-sm hidden-xs">
                        <img src="assets/img/parallax/4.png" alt="">
                    </div>
                    <div id="object2" class="bglayer2 hidden-sm hidden-xs">
                        <img src="assets/img/parallax/5.png" alt="">
                    </div>
                    <div id="object6" class="rightlayer2shade hidden-sm hidden-xs">
                        <img src="assets/img/parallax/7.png" alt="">
                    </div>
                    <div id="object7" class="rightlayer2 hidden-sm hidden-xs">
                        <img src="assets/img/parallax/6.png" alt="">
                    </div>

                    <div class="banner-content">
                        <div class="lgx-hover-link">
                            <div class="lgx-vertical">
                                <div class="lgx-banner-info lgx-banner-info-center"> <!--lgx-banner-info-center lgx-banner-info-black lgx-banner-info-big lgx-banner-info-bg--> <!--banner-info-margin-->
                                    <div class="lgx-countdown-area">
                                        <!-- Date Format :"Y/m/d" || For Example: 1017/10/5  -->
                                        <div id="lgx-countdown" data-date="2019/08/8"></div>
                                    </div>
                                    <h2 class="title">droidcon<i>KE </i> <span><b> 2</b><b>0</b><b>1</b><b>9</b></span></h2>
                                    <h3 class="location"><i class="fa fa-map-marker"></i> Senteu Plaza, iHub , Nairobi </h3>
                                    <h3 class="date"><i class="fa fa-calendar"></i> 8-9 August, 2019</h3>
                                    <div class="action-area">
                                        <!-- <div class="lgx-video-area"> -->
                                            <div class="lgx-video-area">
                                                <!-- <a class="lgx-btn lgx-btn-red" href="mailto:frank@droidcon.co.ke?Subject=sponsor%20droidconKE" target="_top">sponsor droidconKE</a> -->
                                                <a class="lgx-btn lgx-btn-orange" target="_blank" href="http://bit.ly/droidconKE20">Get Your Ticket</a>
                                            </div>
                                           <div class="lgx-video-area">
                                               
                                                <br>
                                                <div class="clearfix"></div>
                                                <p class="video-area"><a id="myModalLabel" class="icon" href="#" data-toggle="modal" data-target="#lgx-modal">
                                                <i class="fa fa-play " aria-hidden="true"></i>
                                            </a> Watch Promo Video</p>
                                            <!-- Modal-->
                                            <div id="lgx-modal" class="modal lgx-modal-md fade lgx-modal">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <iframe id="modalvideo" src="https://www.youtube.com/embed/RAFPumniBqg" allowfullscreen></iframe>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> <!-- //.Modal-->
                                        <!-- </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!-- //.INNER -->
        </div>
    </section>
    <!--BANNER END-->
    <section>
        <!-- about -->
         <div id="lgx-travelinfo" class="lgx-travelinfo">
            <div class="lgx-inner">
                <div class="container">
                    <AboutText :text='true'></AboutText>
                </div>
            </div>
         </div>
    </section>
     <!--TRAVEL INFO-->
    <TravelInfo></TravelInfo>
    <!--TRAVEL INFO END-->

    <!-- Gallery -->
    <Gallery></Gallery>


     <!--TRAVEL INFO-->
    <section>
        <div id="lgx-travelinfo" class="lgx-travelinfo">
            <div class="lgx-inner">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="lgx-heading">
                                <h2 class="heading">Event Information</h2>
                            </div>
                        </div>
                        <!--//main COL-->
                    </div>

                    <div class="row">
                        <div class="col-xs-12">
                            <div class="lgx-travelinfo-content">
                                <div class="lgx-travelinfo-single">
                                    <!-- <img src="assets/img/info-icon1.png" alt="location"/> -->
                                    <h3 class="title">Venue</h3>
                                    <p class="info">iHub, Santeu Plaza, Nairobi</p>
                                     <a id="myModalLabel2" data-toggle="modal" data-target="#lgx-modal-map" class="map-link" href="#"><i class="fa fa-map-marker" aria-hidden="true"></i> View Map location</a>
                                </div>
                                <div class="lgx-travelinfo-single">
                                    <!-- <img src="assets/img/info-icon2.png" alt="Transport"/> -->
                                    <h3 class="title">Transport</h3>
                                    <p class="info">Public transit do not go directly to iHub. You can share ride on famous using famous taxi services</p>
                                   
                                </div>
                                <div class="lgx-travelinfo-single">
                                    <!-- <img src="assets/img/info-icon3.png" alt="Hotel & Restaurant"/> -->
                                    <h3 class="title">Parking</h3>
                                    <p class="info">Parking is very limited and available only in iHub designated slots located in Santeu Plaza</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--//.ROW-->
                </div>
                <!-- //.CONTAINER -->
            </div>
        </div>
    </section>
    <!--TRAVEL INFO END-->
    
    <!--SPONSORED-->
<section>
    <div id="lgx-sponsors" class="lgx-sponsors">
        <div class="lgx-inner-bg">
            <div class="lgx-inner">
                <div class="container">
                     <div class="col-xs-12">
                            <div class="lgx-heading">
                                <h2 class="heading">Event Sponsors</h2>
                            </div>
                        </div>
                    <!--//main row-->
                    <div class="row">
                        <div class="col-xs-12">
                            <h3 class="sponsored-heading first-heading">Platinum Sponsor</h3>
                            <div class="sponsors-area sponsors-area-nogap sponsors-area-noshadow sponsors-area-col3"> <!--sponsors-area-col3 sponsors-area-noshadow sponsors-area-nogap sponsors-area-colorfull sponsors-area-colorfull-border sponsors-area-border-->
                                <!-- <div class="single">
                                    <a class="" href="index.html#"><img src="assets/img/sponsors/sponsor-sp3.png" alt="sponsor"/></a>
                                </div>
                                <div class="single">
                                    <a class="" href="index.html#"><img src="assets/img/sponsors/sponsor-sp2.png" alt="sponsor"/></a>
                                </div> -->
                                <div class="single google">
                                    <a class="" target="_blank" href="https://www.google.com/"><img src="assets/img/sponsors/1920px-Google_2015_logo.svg.png" alt="sponsor"/></a>
                                </div>
                            </div>
                        </div>
                        <!--//col-->
                    </div>
                    <!--//row-->
                    <div class="row">
                        <div class="col-xs-12">
                            <h3 class="sponsored-heading secound-heading">Sponsors</h3>
                            <div class="sponsors-area sponsors-area-noshadow sponsors-area-nogap">
                                <div class="single">
                                    <a class="" target="_blank" href="https://andela.com/"><img src="assets/img/sponsors/Andela-logo-landscape-blue.png" alt="sponsor"/></a>
                                </div>
                                <div class="single">
                                    <a class="kid" target="_blank" href="#"><img src="assets/img/sponsors/flag.png" alt="sponsor"/></a>
                                </div>
                                <div class="single">
                                    <a class="" target="_blank" href="https://www.usehover.com/"><img src="assets/img/sponsors/hover_logo.png" alt="sponsor"/></a>
                                </div>
                                <div class="single">
                                    <a class="jet pull-right" target="_blank" href="https://www.jetbrains.com/"><img src="assets/img/sponsors/jetbrains.png" alt="sponsor"/></a>
                                </div>
                            </div>
                        </div>
                        <!--//col-->
                    </div>
                </div>
                <!--//container-->
            </div>
        </div>
        <!--//lgx-inner-->
    </div>
</section>
<!--SPONSORED END-->

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TravelInfo from '@/components/TravelInfo.vue'; // @ is an alias to /src
import AboutText from '@/components/AboutText.vue';
import Gallery from '@/components/gallery/Gallery18.vue';

@Component({
  components: {
    TravelInfo,
    AboutText,
    Gallery,
  },
})
export default class Home extends Vue {
    mounted(){
        // console.log(process.env.VUE_APP_APP_NAME)
    }

    get event_ready(){
        // console.log(process.env.VUE_APP_EVENT_READY)
        return process.env.VUE_APP_EVENT_READY
    }
}
</script>

<style scope>
.title{
    text-transform: none!important;
}
.title>i{
color: #774789;
}
.lgx-btn-orange{
    background-color: #FDD64A!important;
    color: #1E2841!important;
}
.lgx-btn-red {
    background: #79c89c!important;
}
@media only screen and (min-width:768px) {
.lgx-banner-info-center {
    margin-top: 90px!important;
}
}
.google{
    width: 450px!important;
}
@media only screen and (max-width:768px) {
    .google{
        width: 300px!important;
    }
}
.kid{
    width: 100px;
}
.jet{
    width: 100px;
}
</style>

