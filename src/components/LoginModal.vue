<template>
    <!-- Modal -->
        <div class="modal  modal-login fade  " @click='closeModal()' id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
            <div class="modal-body">
                <button type="button" class="close" @click='closeModal()'  aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                <div id="firebaseui-auth-container"></div>
            </div>
            </div>
        </div>
        </div>
</template>
<script>
    import firebase from './../services/Firebase.ts';
    var firebaseui = require('firebaseui');
    import "../../node_modules/firebaseui/dist/firebaseui.css"

    import Vue from 'vue';
    import VueIziToast from 'vue-izitoast';
    Vue.use(VueIziToast);
    
export default {
    mounted() {
        let self = this
        let uiConfig = {
            signInOptions: [{
                provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID
            }],
            callbacks: {
                signInSuccessWithAuthResult() {
                    localStorage.setItem('authenticated', true)
                    self.$toast.success('Login Successful', 'Login',{position: 'topCenter'});
                }
            }
        }
        var ui = new firebaseui.auth.AuthUI(firebase.auth())
        ui.start("#firebaseui-auth-container", uiConfig)
    },
    methods: {
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
                el.classList.remove('in');
                el.style.display= 'none'
            }
          }
    }
}
</script>

