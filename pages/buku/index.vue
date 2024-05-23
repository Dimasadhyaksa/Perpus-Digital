<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <nuxt-link to="/pengunjung/menu">
          <button type="button" class="btn btn-kembali mt-4 btn-lg">kembali ke menu</button></nuxt-link>
          <h2 class="text-center my-4 text-light">RAK BUKU</h2>
          <form @submit.prevent="getBooks">
            <input v-model="keyword" type="search" class="form-control form-control-lg rounded-5" placeholder="cari buku.." aria-label="Search" @input="getbooks" />
          </form>
        <div class="my-3 text-muted">menampilkan {{ books.length }} buku dari {{ books.length }}</div>
          <div class="row">
              <div v-for="(book,i) in books" :key="i" class="col-lg-2">
                  <div  class="card mb-3">
                    <nuxt-link :to="`/buku/${book.id}`">
                      <div class="card-body">
                        <img :src="book.cover" class="cover" alt="cover">
                      </div>
                    </nuxt-link>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const supabase= useSupabaseClient ()

const books = ref([])
const getbooks = async () => {
  const { data ,error } = await supabase
  .from('buku')
  .select(`*, kategori(*)`)
  .ilike("judul", `%${keyword.value}`)
  .order('id')
  if(data) books.value = data
}

onMounted(() =>{
  getbooks()
})
const keyword = ref('')
</script>
<style scoped>
.content{
  background:#97cf5a;
  font-family: "";
}
.card-body {
  width: 100%;
  padding: 0;
}
.cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 30;
}

.btn-kembali{
  background: #295000;
  color: white;
  border: 2px solid white;

}

</style>