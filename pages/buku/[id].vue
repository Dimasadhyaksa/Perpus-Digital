<template>
  <div class="content">
      <div class="container-fluid">
          <nuxt-link to="/buku">
              <button type="button" class="btn btn-back btn-lg mt-4">KEMBALI</button></nuxt-link>
                  <h2 class="text-center my-4 text-light">RINCIAN BUKU</h2>
          <div class="row d-flex justify-content-center flex-md-wrap" style="padding-top: 190px;">
              <div class="col-3 ">
                  <img :src="buku?.cover"  class="cover row img-fluid" alt="cover buku"   style="width: 250px;">
                  <div class="row">
                  </div>
              </div>
              <div class="col-8">
                  <div class="row">
                      <h1 class="text start text-center my-4">{{ buku?.judul }}</h1>
                  </div>
                  <div class="row detile">
                      <h2 class="list-group-item">Penulis: {{ buku.penulis }}</h2>
                      <h2 class="list-group-item">Penerbit: {{ buku.penerbit }}</h2>        
                      <h2 class="list-group-item">Tahun Terbit: {{ buku.tahun_terbit }}</h2>
                      <h2 class="list-group-item">Rak: {{ buku.rak }}</h2>
                      <h2 class="list-group-item">Kategori: {{ buku.kategori?.nama }}</h2>
                      <h2 class="list-group-item">Deskripsi: {{ buku.deskripsi }}</h2>
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
}

.detile{
    color: black;
    background: #c6fc8c;
    border-radius: 20px;
    padding: 1rem;
}

.btn-back{
    color: white;
    background: #295000;
    border: 2px solid white;
}
</style>