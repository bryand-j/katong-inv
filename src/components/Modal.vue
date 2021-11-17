<script >
	defineProps({
	  title: String,
	})

</script>

<template>
	<div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="1000" >
		<div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">{{title}}</h5>

					<!--begin::Close-->
					<div class="btn btn-icon btn-sm btn-active-light-primary ms-2" @click="closeModal">
						<span class="svg-icon svg-icon-2x"></span>
					</div>
					<!--end::Close-->
				</div>

				<div class="modal-body">
					<p>Modal body text goes here.</p>
				</div>

				<div class="modal-footer">
					<button type="button" class="btn btn-light" @click="closeModal" >Close</button>
					<button type="button" class="btn btn-primary">Save changes</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	
</style>
