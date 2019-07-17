import Vue from 'vue';
import Vuex from 'vuex';
import db from './services/Database';
import firebase from './services/Firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    speakers : Array(),
    agendas : Array(),
    dayOne : Array(),
    dayTwo : Array(),
    stars : Array(),
  },
  mutations: {
    getSpeakers: state => {
        let items: any[]
      db.collection('speakers').orderBy('id').onSnapshot((snapshot) => {
        items = []
        snapshot.forEach((doc) => {
          items.push({ id: doc.id, details: doc.data() })
        })
        state.speakers = items
        // var source = snapshot.metadata.fromCache ? "local cache" : "server";
        //   console.log("Data came from " + source);
      })
    },
    getAgendas: state => {
        let items: any[]
      db.collection('agenda').orderBy('id').onSnapshot((snapshot) => {
        items = []
        snapshot.forEach((doc) => {
          items.push({ id: doc.id, details: doc.data() })
        })
        state.agendas = items
      })
    },
    getFirstDay: state => {
        let items: any[]
      db.collection('day_one').orderBy('id').onSnapshot((snapshot) => {
        items = []
        snapshot.forEach((doc) => {
          items.push({ id: doc.id, details: doc.data() })
        })
        state.dayOne = items
      })
    },
    getDayTwo: state => {
        let items: any[]
      db.collection('day_two').orderBy('id').onSnapshot((snapshot) => {
        items = []
        snapshot.forEach((doc) => {
          items.push({ id: doc.id, details: doc.data() })
        })
        state.dayTwo = items
      })
    },
    getStars: state => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                let items: any[]
                db.collection('starred_sessions').where('user_id','==',user.uid).onSnapshot((snapshot) => {
                    items = []
                    snapshot.forEach((doc) => {
                    items.push({ id: doc.id, details: doc.data() })
                    })
                    state.stars = items
                })
            }
        })
    }
  },
  actions: {
    getSpeakers: context =>{
        context.commit('getSpeakers')
    },
    getAgendas: context =>{
        context.commit('getAgendas')
    },
    getFirstDay: context =>{
        context.commit('getFirstDay')
    },
    getDayTwo: context =>{
        context.commit('getDayTwo')
    },
    getStars: context =>{
        context.commit('getStars')
    }
  },
});
