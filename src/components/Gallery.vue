<template>
    <!--News-->
            <section id="lgx-about" class="lgx-about">
                <div class="lgx-inner">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="lgx-heading">
                                <h2 class="heading">Photos From droidconKE 2019</h2>
                            </div>
                        </div>

                        <div class="col-sm-12">
                            <div class="lgx-photo-gallery " id='images-wrapper'>
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery title="Memories One" src="assets/img/gallery/2020/20191.JPG" alt="Memories one"/>
                                    
                                </div> <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/2020/20192.JPG" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/2020/20193.JPG" alt="Memories Three" title="Memories Three" />
                                    
                                </div> <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/2020/20194.JPG" alt="Memories Four" title="Memories Four" />
                                    
                                </div> <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/2020/20195.JPG" alt="Memories Four" title="Memories Four" />
                                    
                                </div> <!--Single photo-->
                                <div class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/2020/20196.JPG" alt="Memories Five" title="Memories Five" />
                                    
                                </div> <!--Single photo-->
                                <div class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/2020/20197.JPG" alt="Memories Six" title="Memories Six" />
                                    
                                </div> <!--Single photo-->
                                <div class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/2020/20198.JPG" alt="Memories Five" title="Memories Five" />
                                    
                                </div> <!--Single photo-->
                                <div class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/2020/20199.JPG" alt="Memories Six" title="Memories Six" />
                                    
                                </div> <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/2020/201910.JPG" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->


                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/2020/201911.JPG" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/2020/201912.JPG" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/2020/201913.JPG" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/2020/201914.JPG" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/2020/201915.JPG" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/2020/201916.JPG" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->

                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/2020/201917.JPG" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/2020/201918.JPG" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/2020/201919.JPG" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->
                                <div  class="lgx-gallery-single">
                                    
                                        <img v-img:gallery src="assets/img/gallery/2020/201920.JPG" alt="Memories Two" title="Memories Two" />
                                    
                                </div>  <!--Single photo-->
                            </div>
                            <div class="text-center">
                                <a class="lgx-btn lgx-btn-orange" target="_blank" href="https://droidconke.pixieset.com/droidconke2019/">View More Pictures</a>
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
