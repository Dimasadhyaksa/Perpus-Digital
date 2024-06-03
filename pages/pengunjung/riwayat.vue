<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="text-center my-4 text-light">RIWAYAT KUNJUNGAN</h2>
          <div class="my-3">
            <form @submit.prevent="getPengunjung">
              <input v-model="keyword" type="search" class="form-control form-control-lg rounded-5" placeholder="cari nama..." @input="getPengunjung" />
            </form>
          </div>
          <div class="my-3">menampilkan {{ visitors.length }} dari {{ visitors.length}} riwayat</div>
          <table class="table">
            <thead>
              <tr class="text-center">
                <td>ID</td>
                <td>NAMA</td>
                <td>KEANGGOTAAN</td>
                <td>KELAS</td>
                <td>KEPERLUAN</td>
                <td>TANGGAL</td>
                <td>JAM</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(visitors,i) in visitors" :key="i" class="text-center">
                <td>{{ i+1 }}.</td>
                <td>{{ visitors.nama }}</td>
                <td>{{ visitors.keanggotaan.nama }}</td>
                <td>{{ visitors.tingkat}}-{{ visitors.jurusan }}{{ visitors.kelas }}</td>
                <td>{{ visitors.keperluan.nama }}</td>
                <td>{{ visitors.tanggal }}</td>
                <td>{{ visitors.jam.split(".")[0] }} </td>
              </tr>
            </tbody>
          </table>
          <nuxt-link to="/pengunjung/menu">
          <button type="button" class="btn btn-back mt-4 btn-lg">kembali ke menu</button></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const supabase= useSupabaseClient()

const keyword = ref('')
const visitors = ref([])

const getPengunjung =async () => {
  const { data, error } = await supabase
  .from('pengunjung')
  .select(`*, keanggotaan(*), keperluan(*)`)
  .ilike("nama",`%${keyword.value}%`)
  if(data) visitors.value = data
}

onMounted(() =>{
  getPengunjung()
})

</script>


<style scoped>
.btn-back{
  background-color: #295000;
  color: white;
  border: 2px solid white;
}

.content{
  background-color: #97cf5a;
  
}
</style>