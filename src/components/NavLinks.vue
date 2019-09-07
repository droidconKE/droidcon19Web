<template>
     <div v-if="event_ready === 'false'" id="navbar" class="navbar-collapse collapse lgx-collapse">
        <ul v-if="year === '2020'" class="nav navbar-nav lgx-nav">
            <li><a href="/" :class="['lgx-scroll', path === '/' ? 'active' : '']">Home</a>
            <li><li><router-link class="lgx-scroll" to="/about">About</router-link></li>
            <li><a class="lgx-scroll" href="http://bit.ly/droidconKE20Tickets" target="_blank">Get Your Ticket</a></li>
            <!-- <li><a class="lgx-scroll" href="https://sessionize.com/droidconke/" target="_blank">Submit A Talk</a></li> -->
            <li><a class="lgx-scroll" href="mailto:frank@droidcon.co.ke?Subject=sponsor%20droidconKE" target="_top">sponsor droidconKE</a></li>
            <li>
                <a href="#" class="dropdown-toggle active" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{year}} <span class="caret"></span></a>
                <ul class="dropdown-menu multi-level">
                    <li><a :class="year == 2020 ? 'active' : ''" href="#" @click.prevent='changeYear(2020)'>2020</a></li>
                    <li><a :class="year == 2019 ? 'active' : ''" href="#" @click.prevent='changeYear(2019)'>2019</a></li>
                </ul>
            </li>
        </ul>
        <ul v-else class="nav navbar-nav lgx-nav">
            <li><a :href="'/'+year" :class="['lgx-scroll', path === '/' ? 'active' : '']">Home</a><li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link class="lgx-scroll" :to="'/'+year+'/schedule'">Schedule</router-link></li>
            <li><router-link class="lgx-scroll" :to="'/'+year+'/speakers'">Speakers</router-link></li>
            <li><router-link class="lgx-scroll" :to="'/'+year+'#lgx-sponsors'">Sponsors</router-link></li>
            <li><a class="lgx-scroll" href="#" @click='openModal()'>Feedback</a></li>
            <li>
                <a href="#" class="dropdown-toggle active" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{year}} <span class="caret"></span></a>
                <ul class="dropdown-menu multi-level">
                    <li><a :class="year == 2020 ? 'active' : ''" href="#" @click.prevent='changeYear(2020)'>2020</a></li>
                    <li><a :class="year == 2019 ? 'active' : ''" href="#" @click.prevent='changeYear(2019)'>2019</a></li>
                </ul>
            </li>
        </ul>
     </div>
     <div v-else id="navbar" class="navbar-collapse collapse lgx-collapse">
        <ul class="nav navbar-nav lgx-nav">
            <li><a href="/" :class="['lgx-scroll', path === '/' ? 'active' : '']">Home</a><li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link class="lgx-scroll" to="/schedule">Schedule</router-link></li>
            <li><router-link class="lgx-scroll" to="/speakers">Speakers</router-link></li>
            <li><router-link class="lgx-scroll" to="/#lgx-sponsors">Sponsors</router-link></li>
            <li><a class="lgx-scroll" href="#" @click='openModal()'>Feedback</a></li>
        </ul>
    </div><!--/.nav-collapse -->
</template>

<script>
export default {
    name : 'NavLinks',
    data() {
        return {
            path: ''
        }
    },
    computed: {
        event_ready(){
            return process.env.VUE_APP_EVENT_READY
        },
        urlBar(){
            var currentUrl = window.location.pathname;
            // console.log(currentUrl)
            return currentUrl
        },
        year(){
            return this.$store.state.year
        }
    },
    updated() {
        // console.log(this.$route.path )
        this.path =  this.$router.currentRoute.path
    },
    methods : {
        changeYear(year){
            if(year == 2020){
                // console.log('hera')
                if( this.$store.state.year == 2020){
                    window.location.href = '/'
                }else{
                    localStorage.setItem('year', 2020)
                    window.location.href = '/'
                }
            }else{
                if( this.$store.state.year === year){
                    window.location.href = '/'+year
                }else{
                    localStorage.setItem('year', year)
                    window.location.href = '/'+year
                }
            }
        }
    }
}
</script>
