<template>
	<div class="flex-center container h-full">
		<VCard :title="`Welcome to ${$page.props.app.name}`" max-width="448">
			<VCardText>
				<p>Please enter your email below and, if registered, we'll send you a link to reset your password.</p>
			</VCardText>

			<VCardText>
				<VForm @submit.prevent="onSendRequest">
					<VRow>
						<!-- email -->
						<VCol cols="12">
							<VTextField
								v-model="forgot.email"
								autofocus
								placeholder="johndoe@email.com"
								label="Email"
								type="email"
								:error-messages="forgot.errors.email"
							/>
						</VCol>

						<VCol cols="12">
							<!-- remember me checkbox -->
							<div class="flex flex-wrap items-center justify-end gap-8">
								<VBtn class="text-capitalize text-primary" variant="text" to="auth.login">
									<span class="capitalize">Return to Login</span>
								</VBtn>
							</div>
						</VCol>
						<VCol cols="12">
							<!-- login button -->
							<VBtn color="primary" block type="submit"> Send Reset Request </VBtn>
						</VCol>
					</VRow>
				</VForm>
			</VCardText>
		</VCard>
	</div>
</template>

<script setup>
import BlankLayout from "layouts/BlankLayout.vue";
defineOptions({
	layout: BlankLayout,
});

const route = useRoute();
const forgot = useForm({
	email: "",
});

const onSendRequest = () => {
	forgot.post(route("auth.forgot-password.store"), {
		onSuccess() {
			forgot.reset();
		},
	});
};
</script>
