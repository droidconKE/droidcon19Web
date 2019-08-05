<template>
    <div>
        <div class="modal  modal-feedback-1 fade  " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md" role="document">
            <div class="modal-content" style='z-index:9999999!important;'>
        
                <div class="modal-body" style="padding: 20px;">
                    <button type="button" class="close pull-right" @click='closeModal()'  aria-label="Close">
                    <span aria-hidden="true" style="color:red;">&times;</span>
                    </button>
                     <h4>Event Feedback</h4>
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
    methods: {
        submitFeedback(){
            var vm = this
            this.button = 'Sending Feedback ...'
            if(this.$data.form.message === ''){
                this.error = "Please write a message";
                this.button = 'Write Message, Try again'
                return
            }
            
            db.collection("event_feedback_2019").add({
                eventFeedback: this.$data.form.message
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
        },
          openModal(){
            const el = document.getElementsByClassName("modal-feedback-1")[0];
            if(el){
                el.classList.add('in');
                el.style.display= 'block'
            }
          },
          closeModal(){
            const el = document.getElementsByClassName("modal-feedback-1")[0];
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
