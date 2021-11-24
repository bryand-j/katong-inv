<script>
export default {
	props:{
		title: {
			type:String,default:'Dialog'
		},
		size:{ type:String,default:''}
	}
}
</script>

<template>
	<div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" id="myModal" >
		<div :class="'modal-dialog modal-dialog-centered modal-dialog-scrollable modal-'+size">
			<div class="modal-content">
				<div class="modal-header border-0">
					<h5 class="modal-title">{{title}}</h5>
					<div class="btn btn-icon btn-sm btn-active-light-danger ms-2" data-bs-dismiss="modal">
						<span class="svg-icon svg-icon-2x">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
								<g transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)" fill="#000000">
									<rect fill="#000000" x="0" y="7" width="16" height="2" rx="1"></rect>
									<rect fill="#000000" opacity="0.5" transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)" x="0" y="7" width="16" height="2" rx="1"></rect>
								</g>
							</svg>
						</span>
					</div>
				</div>

				<div class="modal-body">
					<slot name="content"/>
				</div>

				<div class="modal-footer border-0">
					<slot name="footer"/>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	
</style>
