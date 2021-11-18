<script>
	import Btn from '../../components/Btn.vue'
	import Modal from '../../components/Modal.vue'

	export default {

		components: {
		    Btn,
		    Modal
		},
		data(){
			return {
				nama:'Buat Project'
			}
		},
		methods: {
			ubahNama(nama){
				this.nama = nama
			},
			show(){
				var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
				  keyboard: false
				})
				myModal.show()
			}
		}
	}
	

</script>

<template>
<div class="row g-5 gx-xxl-8 mb-xxl-3">
	<div class="col-xxl-4">
		<div class="card card-xxl-stretch">
			<div class="card-body d-flex flex-column justify-content-between h-100">
				<div class="pt-12">
					<h3 class="text-dark text-center fs-1 fw-boldest line-height-lg">{{nama}}</h3>
					<div class="text-center text-gray-600 fs-5 fw-bold pt-4">
						Mulai Membaut Project Undangan Pernikahan
					</div>
					<div class="text-center py-7 mb-18">
						<btn title="klik" type="primary" @click="show()">
						<i class="bi bi-circle-square fs-4 me-2"></i> Buat Project
						</btn>
						<modal  size="lg" title="Project Baru">

						</modal>
					</div>
				</div>
				<div class="flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom card-rounded-bottom h-150px" id="img"></div>
			</div>
		</div>
	</div>
	
</div>

</template>

<style>
	#img{
		background-image: url('../../assets/media/illustrations/user-welcome.png');
	}
</style>