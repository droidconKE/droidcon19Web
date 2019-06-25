<template>
    <!--News-->
            <section id="lgx-about" class="lgx-about">
                <div class="lgx-inner">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="lgx-heading">
                                <h2 class="heading">Photos From droidconKE 2018</h2>
                            </div>
                        </div>

                        <div class="col-sm-12">
                            <div class="lgx-photo-gallery " id='images-wrapper'>
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery title="Memories One" src="assets/img/gallery/DroidconKenya-Day2-5October2018(353).jpg" alt="Memories one"/>
                                    
                                </div> <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/DroidconKenya-Day2-5October2018(129).jpg" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/DroidconKenya-Day1-4October2018-196.jpg" alt="Memories Three" title="Memories Three" />
                                    
                                </div> <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/DroidconKenya-Day2-5October2018(179).jpg" alt="Memories Four" title="Memories Four" />
                                    
                                </div> <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/DroidconKenya-Day1-4October2018-119.jpg" alt="Memories Four" title="Memories Four" />
                                    
                                </div> <!--Single photo-->
                                <div class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/DroidconKenya-Day2-5October2018(186).jpg" alt="Memories Five" title="Memories Five" />
                                    
                                </div> <!--Single photo-->
                                <div class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/DroidconKenya-Day2-5October2018(224).jpg" alt="Memories Six" title="Memories Six" />
                                    
                                </div> <!--Single photo-->
                                <div class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/DroidconKenya-Day2-5October2018(261).jpg" alt="Memories Five" title="Memories Five" />
                                    
                                </div> <!--Single photo-->
                                <div class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/DroidconKenya-Day2-5October2018(267).jpg" alt="Memories Six" title="Memories Six" />
                                    
                                </div> <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/DroidconKenya-Day2-5October2018(343).jpg" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->


                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/DroidconKenya-Day2-5October2018(285).jpg" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/DroidconKenya-Day2-5October2018(226).jpg" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/DroidconKenya-Day2-5October2018(352).jpg" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/DroidconKenya-Day2-5October2018(379).jpg" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/DroidconKenya-Day2-5October2018(230).jpg" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/DroidconKenya-Day1-4October2018-233.jpg" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->

                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/DroidconKenya-Day1-4October2018-94.jpg" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/DroidconKenya-Day1-4October2018-104.jpg" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/DroidconKenya-Day1-4October2018-75.jpg" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/DroidconKenya-Day2-5October2018(352).jpg" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->
                            </div>
                            <div class="text-center">
                                <a class="lgx-btn lgx-btn-orange" target="_blank" href="https://droidconke.pixieset.com/droidconke2018/">View More Pictures</a>
                            </div>
                        </div> <!--//.COL-->
                    </div>
                </div><!-- //.CONTAINER -->
                </div>
            </section>
            <!--News END-->
</template>

<script>
import Vue from 'vue';
import VueImg from 'v-img';

const vueImgConfig = {
  // Use `alt` attribute as gallery slide title
  altAsTitle: false,
  // Display 'download' button near 'close' that opens source image in new tab
  sourceButton: true,
  // Event listener to open gallery will be applied to <img> element
  openOn: 'click',
  // Show thumbnails for all groups with more than 1 image
  thumbnails: false,
}
Vue.use(VueImg, vueImgConfig);
export default {
    
}
</script>


<style scoped>
#lgx-about{
    background-color: #fff!important;
}
#images-wrapper {    
    width: 100%!important;
   line-height: 0;       
    -webkit-column-count: 4;    
    -webkit-column-gap: 0px;    
    -moz-column-count: 4;
    -moz-column-gap: 0px;
     column-count: 4;    
     column-gap: 0px;    
     margin-bottom: 10px;
}  
#images-wrapper img {    
   width: 100% !important;    
   height: auto !important;  
   padding: 4px;
}  
#images-wrapper{    
   display:inline-block;    
   margin-right: auto;    
   margin-left: auto;  
}
@media (max-width: 1000px) {
   #images-wrapper {
   -moz-column-count:    3;
   -webkit-column-count: 3;
   column-count:         3;
   }
  }  
@media (max-width: 800px) {
   #images-wrapper {
   -moz-column-count:    2;
   -webkit-column-count: 2;
   column-count:         2;
   }
  }  
@media (max-width: 400px) {
   #images-wrapper {
   -moz-column-count:    1;
   -webkit-column-count: 1;
    column-count:        1;
   }
  }
  .lgx-btn-orange{
      margin-top: 20px!important;
  }
</style>
