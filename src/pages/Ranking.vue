<template>
    <Header />
    <!-- <div class="ranking" id="rkng">
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQsp9zpKHVazafOprPk4QSAvETespyJwESBlJ-mkG9vxmTb1IdqIPaQbqbJpB_9dl-9A1pINMDoDOUs/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" align="middle"></iframe> 
    </div> -->
    <div>
        <ul class="npoints row" style="width: 60%; color: black">
            <div v-if="!data" class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <li v-else class="npoints-list row bg-dark bg-gradient" style="list-style:none; font-size: 20px;"
                v-for="item in data.values" :key="item.id">
                <p>{{ item.toString().replace(',', ' - ') + ' NPoints' }}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import Header from '../components/Header.vue';
import axios from 'axios';
// import google from 'googleapis';
export default {
    name: 'rankingNpoints',
    components: {
        Header,
    },
    data() {
        return {
            dataNick: [],
            dataPoints: [],
            data: ''
        }
    },
    mounted() {
        this.dbSheets();
    },
    methods: {
        async dbSheets() {
            const sheetId = '1Uo4dOaVJzx_6XOlagYnTQEZ97Wjgm-zjIgUK_6h0-NE'
            const range = 'NPoints'
            const apikey = 'AIzaSyAeVPJs_C8of9f9qK6dmAAzwjX9Mg6Ts-o';
            //majorDimension==ROWS&
            axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apikey}`)
                .then(e => {
                    const data = e.data;
                    this.data = data

                }).catch(err => console.log(err));
        },
    }
}

</script>
<style scoped>
/* 
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
*/
@media (min-width: 576px) {
    ul{
        width: 100%;
    }
 }
@media (min-width: 768px) {
    ul{
        width: 100%;
    }
 }
@media (min-width: 992px) {
    ul{
        width: 100%;
    }
 }
@media (min-width: 1200px) {
    ul{
        width: 100%;
    }
 }
@media (min-width: 1400px) {
    ul{
        width: 100%;
    }
 }
.npoints {
    border-radius: 10px;
    margin-top: 2vh;
    width: 30%;
    background-color: cornsilk;
    padding: 20px;
    display: inline-block;
    justify-content: center;
    align-items: center;
}

.npoints-list {
    color: white;
    margin-top: 2vh;
    padding: 10px;
    border-color: antiquewhite;
    border-radius: 10px;
    width: auto;
    filter: brightness(.7);
    transition: .9s;
}.npoints-list:hover {
    filter: brightness(1);
    transition: .9s;
}
</style>