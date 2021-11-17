<script>
	import Modal from '../../components/Modal.vue'
	export default {
		data(){
			return {
				nama:'Bryand'
			}
		},
		methods: {
			ubahNama(nama){
				this.nama = nama
			}
		}
	}
	

</script>

<template>
<div class="row g-5 gx-xxl-8 mb-xxl-3">
	<div class="col-xxl-4">
		<div class="card card-xxl-stretch">
			<!--begin::Card body-->
			<div class="card-body d-flex flex-column justify-content-between h-100">
				<!--begin::Section-->
				<div class="pt-12">
					<!--begin::Title-->
					<h3 class="text-dark text-center fs-1 fw-boldest line-height-lg">{{nama}}</h3>
					<!--end::Title-->
					<!--begin::Text-->
					<div class="text-center text-gray-600 fs-5 fw-bold pt-4">
						Mulai Membaut Project Undangan Pernikahan
					</div>
					<!--end::Text-->
					<!--begin::Action-->
					<div class="text-center py-7 mb-18">
						<a href="#" class="btn btn-primary fs-6 px-6" @click="ubahNama('bry')">Buat</a>
					</div>
					<!--end::Action-->
				</div>
				<!--end::Section-->
				<!--begin::Image-->
				<div class="flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom card-rounded-bottom h-150px" id="img"></div>
				<!--end::Image-->
			</div>
			<!--end::Card body-->

		</div>
	</div>
	
</div>

</template>

<style>
	#img{
		background-image: url('../../assets/media/illustrations/user-welcome.png');
	}
</style>