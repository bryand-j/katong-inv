<script>
import Modal from "../../components/Modal.vue";
import Choose from './Choose.vue';
import Steper from './Steper.vue';

export default {
  components: {
    Modal,
    Steper,
    Choose,
  },
  data() {
    return {
      nama: "Buat Project",
			template:false
			
    };
  },
  methods: {
		myModal(){
			return new bootstrap.Modal(document.getElementById("myModal"))
		},
    ubahNama(nama) {
      this.nama = nama;
    },
    
		
  },
};
</script>

<template>
  <div class="row g-5 gx-xxl-8 mb-xxl-3">
    <div class="col-xxl-4">
      <div class="card card-xxl-stretch">
        <div class="card-body d-flex flex-column justify-content-between h-100">
          <div class="pt-12">
            <h3 class="text-dark text-center fs-1 fw-boldest line-height-lg">
              {{ nama }}
            </h3>
            <div class="text-center text-gray-600 fs-5 fw-bold pt-4">
              Mulai Membaut Project Undangan Pernikahan
            </div>
            <div class="text-center py-7 mb-18">
              <btn title="klik" type="primary" @click="myModal().show()">
                <i class="bi bi-circle-square fs-4 me-2"></i> Buat Project
              </btn>
              
            </div>
						<modal size="lg" title="Project Baru">
							<template v-slot:content>

								<steper v-if="template"/>
								<div class=""  v-if="!template">
									<choose @click-next="template=true"/>
								</div>
							</template>
						</modal>
          </div>
          <div
            class="
              flex-grow-1
              bgi-no-repeat
              bgi-size-contain
              bgi-position-x-center
              bgi-position-y-bottom
              card-rounded-bottom
              h-150px
            "
            id="img"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#img {
  background-image: url("../../assets/media/illustrations/user-welcome.png");
}
</style>