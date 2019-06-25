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
                                    <h2 class="heading">About droidconKE</h2>
                                </div>
                                
                            </div>
                        </div>
                    </div><!--//.ROW-->
                </div><!-- //.CONTAINER -->
            </div><!-- //.INNER -->
        </div>
    </section> 
    <!--//.Banner Inner-->
  <main>
        <div class="lgx-page-wrapper lgx-page-wrapper-none">
 <!--ABOUT-->
            <section>
                <div id="lgx-about" class="lgx-about">
                    <div class="lgx-inner">
                        <div class="container">
                            <AboutText :text='false'></AboutText>
                            <!--//row-->
                    <div class="row ">
                        <div class="col-xs-12 " id='lgx-sponsors'>
                            <h3 class="sponsored-heading secound-heading">Organized by</h3>
                            <div class="sponsors-area sponsors-area-noshadow sponsors-area-nogap">
                                <div class="single">
                                    <a class="" href="#" target='_blank'><img class="organizers1"  src="assets/img/organizers/android-254.svg" alt="sponsor"/></a>
                                </div>
                                <div class="single">
                                    <a class="" href="#" target='_blank'><img class="organizers2"  src="assets/img/organizers/ihub.png" alt="sponsor"/></a>
                                </div>
                                <div class="single">
                                    <a class="" href="#" target='_blank'><img class="organizers3"  src="assets/img/organizers/kotlin.png" alt="sponsor"/></a>
                                </div>
                            </div>
                            <div class="sponsors-area sponsors-area-noshadow sponsors-area-nogap">
                                <div class="single">
                                    <a class="" href="#" target='_blank'><img class="organizers4"  src="assets/img/organizers/tiskos-kenya.svg" alt="sponsor"/></a>
                                </div>
                                <div class="single">
                                    <a class="" href="https://appslab.co.ke" target='_blank'><img class="organizers5"  src="assets/img/organizers/apps-lab.svg" alt="sponsor"/></a>
                                </div>
                                <div class="single">
                                    <a class="" href="#" target='_blank'><img class="organizers6"  src="assets/img/organizers/SophieBOT-LogoFinal.png" alt="sponsor"/></a>
                                </div>
                                <div class="single">
                                    <a class="" href="#" target='_blank'><img class="organizers7"  src="assets/img/organizers/early-camp.svg" alt="sponsor"/></a>
                                </div>
                            </div>
                        </div>
                        <!--//col-->
                    </div>
                        </div><!-- //.CONTAINER -->
                    </div><!-- //.INNER -->
                </div>
            </section>
            <!--ABOUT END-->

        </div>
  </main>
  </section>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import AboutText from '@/components/AboutText.vue'; // @ is an alias to /src

@Component({
  components: {
    AboutText,
  },
})
export default class About extends Vue{
    
}
</script>

<style scoped>
.sponsors-area .single{
    opacity: 1!important;
}
.heading{
    text-transform: none!important;
}
.organizers1{
    width:60px!important;
}
.organizers2{
    width: 110px!important;
}
.organizers3{
    width: 130px!important;
}
.organizers4{
    width: 100px!important;
}
.organizers5{
    width: 70px!important;
}
.organizers6{
    width: 90px!important;
}
.organizers7{
    width: 50px!important;
}
</style>

