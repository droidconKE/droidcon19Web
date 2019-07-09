<template>
  <div id="app">
      <!--HEADER-->
<header>
    <div id="lgx-header" class="lgx-header">
        <div class="lgx-header-position lgx-header-position-white lgx-header-position-fixed "> <!--lgx-header-position-fixed lgx-header-position-white lgx-header-fixed-container lgx-header-fixed-container-gap lgx-header-position-white-->
            <div class="lgx-container-fluid"> <!--lgx-container-fluid-->
                <nav class="navbar navbar-default lgx-navbar">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <div class="lgx-logo">
                            <a href="/" class="lgx-scroll">
                                <img width='150' src="assets/img/logo.png" alt="droidconKE"/>
                            </a>
                        </div>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse lgx-collapse">
                        <ul v-if="event_ready == true" class="nav navbar-nav lgx-nav">
                            <li>
                                <a href="/" class="lgx-scroll">Home</a>
                            <li>
                            <li><router-link :class="['lgx-scroll', path === '/' ? 'active' : '']" to="/about">About</router-link></li>
                            <li><router-link class="lgx-scroll" to="/schedule">Schedule</router-link></li>
                            <li><router-link class="lgx-scroll" to="/speakers">Speakers</router-link></li>
                             <li><router-link class="lgx-scroll" to="/#lgx-sponsors">Sponsors</router-link></li>
                            <li><a class="lgx-scroll" href="#" target="_blank">Blog</a></li>
                        </ul>
                        <ul v-else class="nav navbar-nav lgx-nav">
                            <li>
                                <a href="/" :class="['lgx-scroll', path === '/' ? 'active' : '']">Home</a>
                            <li>
                                <li><router-link class="lgx-scroll" to="/about">About</router-link></li>
                            <li><a class="lgx-scroll" href="https://mookh.com/embed/event/94fd42dc-9c07-4ac5-a346-4dbdffbe4083" target="_blank">Get Your Ticket</a></li>
                            <!-- <li><a class="lgx-scroll" href="https://sessionize.com/droidconke/" target="_blank">Submit A Talk</a></li> -->
                            <li><a class="lgx-scroll" href="mailto:frank@droidcon.co.ke?Subject=sponsor%20droidconKE" target="_top">sponsor droidconKE</a></li>
                        </ul>
                        <!-- <div class="lgx-nav-right">
                            <div class="lgx-cart-area">
                                <a class="lgx-btn lgx-btn-red" href="#">Sign In</a>
                            </div>
                        </div> -->
                    </div><!--/.nav-collapse -->
                </nav>
            </div>
            <!-- //.CONTAINER -->
        </div>
    </div>
</header>
<!--HEADER END-->
   <!-- views -->
    <router-view/>

    <!-- footer -->
    <!--FOOTER-->
<footer>
    <div id="lgx-footer" class="lgx-footer lgx-footer-black"> <!--lgx-footer-black-->
        <div class="lgx-inner-footer">
            <div class="container">
                <div class="lgx-footer-area">
                    <div class="lgx-footer-single">
                        <a class="logo" href="/"><img width="200" src="assets/img/footer-logo.png" alt="Logo"></a>
                    </div> <!--//footer-area-->
                    <div class="lgx-footer-single">
                        <h3 class="footer-title">Venue Details </h3>
                        <h4 class="date">
                            8 - 9 August, 2019
                        </h4>
                        <a id="myModalLabel2" data-toggle="modal" data-target="#lgx-modal-map" class="map-link" href="#"><i class="fa fa-map-marker" aria-hidden="true"></i> Senteu Plaza, iHub, Nairobi</a>
                    </div>
                    <div class="lgx-footer-single">
                        <h3 class="footer-title">Social Connection</h3>
                        <p class="text">
                            Follow us for updates
                        </p>
                        <ul class="list-inline lgx-social-footer ">
                            <!-- <li><a target="_blank" href="https://facebook.com/droidconke"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> -->
                            <li><a target="_blank" class="twitter-link" href="https://twitter.com/droidconke"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li> &nbsp;&nbsp;&nbsp; </li>
                            <li><a target="_blank" class="insta-link" href="https://www.instagram.com/droidconke"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                             <li> &nbsp;&nbsp;&nbsp; </li>
                             <li><a target="_blank" class="tube-link" href="https://www.youtube.com/channel/UCNumwOLkQjVgNmYdG8-qHVg"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                    <!--<div class="lgx-footer-single">
                        <h2 class="footer-title">Instagram Feed</h2>
                        <div id="instafeed">
                        </div>
                    </div>-->
                </div>
                <!-- Modal-->
                <div id="lgx-modal-map" class="modal fade lgx-modal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div class="modal-body">
                                <div class="lgxmapcanvas map-canvas-default" id="map_canvas"> </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- //.Modal-->

                <!-- <div class="lgx-footer-bottom">
                    <div class="lgx-copyright">
                        <p> <span>©</span> 2019 droidconKe19 is powered by <a href="https://twitter.com/droidconke" target="_blank">Android254.</a></p>
                    </div>
                </div> -->

            </div>
            <!-- //.CONTAINER -->
        </div>
        <!-- //.footer Middle -->
    </div>
</footer>
<!--FOOTER END-->
  </div>
</template>

<script>
import Vue from 'vue';
import VueIziToast from 'vue-izitoast';

import 'izitoast/dist/css/iziToast.min.css';
import firebase from './services/Firebase'

Vue.use(VueIziToast);
export default {
    data(){
        return{
            path: '/',
            options : {
            success: {
                timeout: 3000,
            },
            error: {
                timeout: 3000,
            },
            info: {
                position: 'topCenter',
                timeout: 0,
                drag: false,
                closeOnEscape: true
            },
            position: 'bottomCenter',
            timeout: 5000,
            closeOnEscape: true
}
        }
    },
    created(){
        // Handle incoming messages. Called when:
        // - a message is received while the app has focus
        // - the user clicks on an app notification created by a service worker
        //   `messaging.setBackgroundMessageHandler` handler.
        const messaging = firebase.messaging();
        messaging.onMessage((payload) => {
        console.log('Message received. ', payload);
        this.$toast.info(payload.notification.body, payload.notification.title, this.options.info);
        
            ///
            Notification.requestPermission( permission => {
                        let notification = new Notification(payload.notification.title, {
                            body: payload.notification.body, // content for the alert
                            icon: payload.notification.icon // optional image url
                        });
                        // link to page on clicking the notification
                        notification.onclick = () => {
                            window.open(payload.notification.click_action);
                        };
                    });
        });

         window.addEventListener('offline', () => {
            this.$toast.error('Seems you\'re offline!','Offline',this.options.error);
        })
        window.addEventListener('online', () => {
            this.$toast.success('You\'re back online', 'Online',this.options.success);
        })
        // console.log(process.env.VUE_APP_EVENT_READY)
    },
    computed: {
        event_ready(){
            return process.env.VUE_APP_EVENT_READY
        }
    },
    updated() {
            // console.log(this.$router.currentRoute.path)
            this.path =  this.$router.currentRoute.path
    }
}
</script>

<style scope>
.nav a.active{
    color: #FFD54F!important;
}
.lgx-copyright{
    text-transform: none!important;
}
.twitter-link:hover{
    background-color: #1CA1F2!important;
}
.insta-link:hover{
    background-color: #A54069!important;
}
.tube-link:hover{
    background-color: red!important;
}
</style>
