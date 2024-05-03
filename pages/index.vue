<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row d-flex justify-content-center align-items-center pt-5">
        <div class="col-6 text-light text-center">
          <h2>ISI DAFTAR</h2>
          <h2>PENGUNJUNG</h2>
        </div>
        <div class="col-6">

          <form>
            <div class="mb-3">
              <input type="text" class="form-control form-control-lg rounded-5" placeholder="NAMA...">
            </div>
            <div class="mb-3">
              <select class="form-control form-control-lg from-select rounded-5">
                <option value="">KEANGGOTAAN</option>
                <option value="Siswa">Siswa</option>
                <option value="Guru">Guru</option>
                <option value="Staf">Staf</option>
                <option value="Umum">Umum</option>
              </select>
            </div>
            <div class="mb-3">
              <div class="row">
                <div class="col-md-4">
                  <select class="form-control form-control-lg from-select rounded-5 mb-2">
                    <option value="">TINGKAT</option>
                    <option value="X">X</option>
                    <option value="XI">XI</option>
                    <option value="XII">XII</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <select class="form-control form-control-lg from-select rounded-5 mb-2">
                    <option value="">JURUSAN</option>
                    <option value="PPLG">PPLG</option>
                    <option value="TJKT">TJKT</option>
                    <option value="TSM">TSM</option>
                    <option value="DKV">DKV</option>
                    <option value="TOI">TOI</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <select class="form-control form-control-lg from-select rounded-5 mb-2">
                    <option value="">KELAS</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
            </div>
          </div>
          <div class="mb-3">
            <select class="form-control form-control-lg from-select rounded-5">
              <option value="">KEPERLUAN</option>
              <option value="Baca">Baca Buku</option>
              <option value="Pinjam">Pinjam Buku</option>
              <option value="Kembalikan">Kembalikan Buku</option>
            </select>
          </div>
          <nuxt-link to="/menu" class="btn btn-kirim btn-lg rounded-5 px-5">Kirim</nuxt-link>
        </form>
        </div>
      </div>
  </div>
</div>
</template>

<style scoped>
form{
  width: 400px;
  background-color: #c6fc8c;
  padding: 1rem;
  border-radius: 20px;
  
  
}
.btn-kirim{
  background-color: #295000;
  color: white;
  border: 2px solid white;
}
.content{
  background-color: #97cf5a;
  height: 100vh;
  /* z-index: ; */
}

</style>