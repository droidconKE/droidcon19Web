<template>
    <div>
        <div class="modal  modal-feedback fade  " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md" role="document">
            <div class="modal-content" style='z-index:9999999!important;'>
        
                <div class="modal-body" style="padding: 20px;">
                    <button type="button" class="close pull-right" @click='closeModal()'  aria-label="Close">
                    <span aria-hidden="true" style="color:red;">&times;</span>
                    </button>
                     <h4 v-if="session != ''">Feedback for {{session.day.details.title}} session</h4>
                    <div>
                        <form method="POST" class="lgx-contactfor" @submit.prevent="submitFeedback()">
                                <div class="form-group">
                                    <textarea class="form-control lgxmessage" v-model="form.message" id="lgxmessage" rows="5" placeholder="give feedback" required></textarea>
                                </div>

                                <button type="submit" name="submit" value="contact-form" class="lgx-btn hvr-glow hvr-radial-out lgxsend lgx-send"><span>{{button}}</span></button>
                            </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal" @click='closeModal()' style="height: 500px!important;">

            </div>
        </div>
    </div>
</template>

<script>
    import db from './../services/Database.ts';
    import Axios from 'axios';
    import firebase from './../services/Firebase.ts';
    import Vue from 'vue';
    import VueIziToast from 'vue-izitoast';
    Vue.use(VueIziToast);
export default {
    data(){
        return{
            form : {
                message: ''
            },
            error : '',
            button: "Send Feedback"
        }
    },
    computed: {
        session(){
            return this.$store.state.sessionToEvaluate; 
        }
    },
    methods: {
        submitFeedback(){
            var vm = this
            this.button = 'Sending Feedback ...'
            if(this.$data.form.message === ''){
                this.error = "Please write a message";
                this.button = 'Write Message, Try again'
                return
            }
            firebase.auth().onAuthStateChanged((user) => {
                if(user){
                    db.collection("session_feedback_2019").add({
                        day_number: this.session.day.details.day_number,
                        session_id: this.session.day.details.id,
                        session_feedback: this.$data.form.message,
                        session_title: this.session.day.details.title,
                        user_id: user.uid
                    }).then(function(docRef) {
                        vm.button = 'Feedback Sent'
                        vm.$data.form.message = ''
                        vm.closeModal()
                        vm.$toast.success('Feedback sent', 'Feedback',{position: 'topCenter'});
                        console.log("Feedback sent");
                    })
                    .catch(function(error) {
                        vm.button = 'Error, Try again'
                        console.error("Error sending feedback");
                    });
                }else{
                    this.closeModal()
                    this.openModal()
                    return
                }
            })
        },
          openModal(){
            const el = document.getElementsByClassName("modal-feedback")[0];
            if(el){
                el.classList.add('in');
                el.style.display= 'block'
            }
          },
          closeModal(){
            const el = document.getElementsByClassName("modal-feedback")[0];
            if(el){
                el.classList.remove('in');
                el.style.display= 'none'
            }
          }
      }
}
</script>
<style scoped>
.modal-content{
    background-color: #F2F2F2;
}
</style>
