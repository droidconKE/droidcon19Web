<template>
    <div class="row">
                                <div class="col-sm-12 col-md-5">
                                    <div class="lgx-about-img text-center">
                                        <img width="300" src="/assets/img/about-logo.png" alt="about">
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-7">
                                    <div class="lgx-about-content-area text-area text-center1">
                                        <div v-if="text" class="lgx-heading">
                                            <h2 class="heading text-center1">About droidconKE</h2>
                                        </div>
                                        <div class="lgx-about-content">
                                            <p class="text text-center1">
                                                Droidcon is a global conference focused on the engineering of Android applications. Droidcon provides a forum for developers to network with other developers, share techniques, announce apps and products, and to learn and teach.
                                                <br> <br>
                                                This two-day developer focused gathering will be held in Nairobi Kenya on August 6th to 8th 2020 and will be the largest of its kind in Africa. <br> <br>
                                                <span v-if="!text">
                                                It will have workshops and codelabs focused on the building of Android applications and will give participants an excellent chance to learn about the local Android development ecosystem, opportunities and services as well as meet the engineers and companies who work on them.
                                                </span>
                                                <span v-else>
                                                    <router-link class="lgx-btn lgx-btn-red" to="/about">Read More</router-link>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
</template>
<script>
export default {
    props: ['text']
}
</script>

<style>
.heading{
    text-transform: none!important;
}
.organizers{
    width:100px!important;
}
@media only screen and (max-width:768px) {
    .text-center1{
    text-align: center!important;
} 
}
</style>
