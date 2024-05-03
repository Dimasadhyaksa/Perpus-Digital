<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="text-center my-4 text-light">RIWAYAT KUNJUNGAN</h2>
          <div class="my-3">
            <input type="search" class="form-control form-control-lg rounded-5" placeholder="Filter...">
          </div>
          <div class="my-3 text-muted">menampilkan 1 dari 1</div>
          <table class="table">
            <thead>
              <tr>
                <td>#</td>
                <td>NAMA</td>
                <td>KEANGGOTAAN</td>
                <td>WAKTU</td>
                <td>KEPERLUAN</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Zul Hilmi</td>
                <td>Guru</td>
                <td>24 Februari 2024, 23.31.00</td>
                <td>Baca</td>
              </tr>
            </tbody>
          </table>
          <nuxt-link to="/menu" class="btn btn-back btn-lg rounded-5 px-5">Back to menu</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.btn-back{
  background-color: #295000;
  color: white;
  border: 2px solid white;
}

.content{
  background-color: #97cf5a;
  height: 100vh;
}
</style>