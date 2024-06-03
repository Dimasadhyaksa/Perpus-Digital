<template>
    <div class="content">
        <div class="container-fluid py-4">
            <h2 class="text-center text-light">RINCIAN BUKU</h2>
            <div class="row d-flex justify-content-center flex-md-wrap" style="padding-top: 50px;">
                <div class="col-3 ">
                    <img :src="buku?.cover"  class="cover row img-fluid" alt="cover buku"   style="width: 250px;">
                    <div class="row">
                        <nuxt-link to="/buku"><button type="button" class="btn btn-dark btn-lg mt-4">KEMBALI</button></nuxt-link>
                    </div>
                </div>
                <div class="col-8">
                    <div class="row">
                        <h1 class="text start text-center my-4">{{ buku?.judul }}</h1>
                    </div>
                    <div class="row">
                        <h2>PENULIS: {{ buku?.penulis }}</h2>
                        <h2>PENERBIT: {{ buku?.penerbit }}</h2>
                        <h2>TAHUN TERBIT: {{ buku?.tahun_terbit }}</h2>
                        <h2>RAK: {{ buku?.rak }}</h2>
                        <h2>KATEGORI: {{ buku.kategori?.nama }}</h2>
                        <h2>DESKRIPSI: {{ buku?.deskripsi }}</h2>                    
                    </div>
                    <div class="row">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';

const supabase = useSupabaseClient()
const route = useRoute()
const buku = ref([])

const getBookByid = async () => {
    const { data, error } = await supabase
    .from('buku')
    .select(`*, kategori(*)`)
    .eq('id', route.params.id)
    .single()
    if(data) buku.value = data
}

onMounted(() => {
    getBookByid()
})

</script>
<style scoped>
.content {
    background:#97cf5a;
    background-size: cover;
    width: 100%;
    font-family: '';
    color: black;
}
.btn-dark{
    background-color:#295000;
    border:solid 2px white  ;
}
</style>