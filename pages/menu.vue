<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row pt-5">
        <div class="col-lg-6">
          <nuxt-link to="/pengunjung/riwayat" class="text-decoration-none">
            <div class="card bg-pengunjung rounded-5">
              <div class="card-body text-light">
                <h2 >Pengunjung</h2>
              </div>
            </div>
          </nuxt-link>
        </div>
  
        <div class="col-lg-6">
          <nuxt-link to="/buku" class="text-decoration-none">
            <div class="card bg-buku rounded-5">
              <div class="card-body text-light">
                <h2>Cari Buku</h2>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.card-body{
  text-align: center;
  padding-top: 100px;

}
.card {
  height: 250px;
  border: 3px solid #2667A3;
  
}

.card.bg-pengunjung {
  background-image: url("../assets/img/bg-home-kunjungan.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.card.bg-buku {
  background: url("../assets/img/bg-home-cari-buku.jpg") no-repeat center center;
  background-size: cover;
}

.content{
  background-color: #97cf5a;
  height: 100vh;
}

</style>