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
                                <img width='150' src="/assets/img/logo.png" alt="droidconKE"/>
                            </a>
                        </div>
                    </div>
                   <nav-links></nav-links>
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
                        <a class="logo" href="/"><img width="200" src="/assets/img/footer-logo.png" alt="Logo"></a>
                    </div> <!--//footer-area-->
                    <div class="lgx-footer-single">
                        <h3 class="footer-title">Venue Details </h3>
                        <h4 v-if="urlBar === '/2019'" class="date">
                            8 - 9 August, 2019
                        </h4>
                        <h4 v-else class="date">
                            6 - 8 August, 2020
                        </h4>
                        <a v-if="urlBar === '/2019'" id="myModalLabel2" data-toggle="modal" data-target="#lgx-modal-map" class="map-link" href="#"><i class="fa fa-map-marker" aria-hidden="true"></i> Senteu Plaza, iHub, Nairobi</a>
                        <a v-else id="myModalLabel2" data-toggle="modal" data-target="#lgx-modal-map" class="map-link" href="#"><i class="fa fa-map-marker" aria-hidden="true"></i>  Nairobi</a>
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
<login-modal></login-modal>
<event-feedback></event-feedback>
  </div>
</template>

<script>
import Vue from 'vue';
import VueIziToast from 'vue-izitoast';

import 'izitoast/dist/css/iziToast.min.css';
import firebase from './services/Firebase';
import LoginModal from '@/components/LoginModal.vue';
import EventFeedback from '@/components/EventFeedback.vue';
import NavLinks from '@/components/NavLinks.vue';

Vue.use(VueIziToast);
export default {
    components: {
        LoginModal, EventFeedback, NavLinks,
    },
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
                closeOnEscape: true,
                question: {
                    timeout: 0,
                    close: false,
                    overlay: true,
                    toastOnce: true,
                    id: 'question',
                    zindex: 999,
                    position: 'bottomCenter',
                    buttons: [
                        ['<button><b>Allow</b></button>', function (instance, toast) {
                            instance.hide({ transitionOut: 'fadeOut' }, toast, 'yes');
                        }, true],
                        ['<button>Deny</button>', function (instance, toast) {
                            instance.hide({ transitionOut: 'fadeOut' }, toast, 'no');
                        }]
                    ],
                    onClosing: function(instance, toast, closedBy){
                        // console.log(instance)
                        // console.log(toast)
                        // console.info('Closing | closedBy: ' + closedBy);
                    },
                    onClosed: function(instance, toast, closedBy){
                        this.installer = () => {
                            installPrompt.prompt();
                            installPrompt.userChoice.then(result => {
                                if (result.outcome === "accepted") {
                                console.log("Install accepted!")
                                } else {
                                console.log("Install denied!")
                                }
                            });
                        };
                        // console.log(instance)
                        // console.log(toast)
                        // console.info('Closed | closedBy: ' + closedBy);
                    }
                }
            }
        }
    },
    created(){
        // Handle incoming messages. Called when:
        // - a message is received while the app has focus
        // - the user clicks on an app notification created by a service worker
        //   `messaging.setBackgroundMessageHandler` handler.
        if(firebase.messaging.isSupported()) {
            const messaging = firebase.messaging();
            messaging.onMessage((payload) => {
                // console.log('Message received. ', payload);
                this.$toast.info(payload.notification.body, payload.notification.title, this.options.info);

                ///
                // Notification.requestPermission(permission => {
                //     let notification = new Notification(payload.notification.title, {
                //         body: payload.notification.body, // content for the alert
                //         icon: payload.notification.icon // optional image url
                //     });
                //     // link to page on clicking the notification
                //     notification.onclick = () => {
                //         window.open(payload.notification.click_action);
                //     };
                // });
            });

            if (Notification.permission === "blocked" || Notification.permission === "denied"){
                this.$toast.info('Kindly allow push notifications to get the latest updates from droidconKE, Go to site settings and Allow', 'Allow Notifications', this.options.info);
            }

        }
         window.addEventListener('offline', () => {
            this.$toast.error('Seems you\'re offline!','Offline',this.options.error);
        })
        window.addEventListener('online', () => {
            this.$toast.success('You\'re back online', 'Online',this.options.success);
        })
        // console.log(process.env.VUE_APP_EVENT_READY)

        //  ? Add prompt to allow nofitications
        let installPrompt;
        window.addEventListener("beforeinstallprompt", e => {
            e.preventDefault();
            installPrompt = e;
            // this.installBtn = "block";
            // this.$toast.success('Allow push notifications','Notifications',this.options.question);
        });
    },
    computed: {
        event_ready(){
            return process.env.VUE_APP_EVENT_READY
        },
        urlBar(){
            var currentUrl = window.location.pathname;
            console.log(currentUrl)
            return currentUrl
        }
    },
    updated() {
            // console.log(this.$route.path )
            this.path =  this.$router.currentRoute.path
    },

    methods : {
        openModal(){
            const el = document.getElementsByClassName("modal-feedback-1")[0];
            if(el){
                el.classList.add('in');
                el.style.display= 'block'
            }
          },
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
