<template>
	<div class="flex-center container h-full">
		<VCard title="Reset Your Password" max-width="448">
			<VCardText class="pt-2">
				<p class="mb-0">Please enter a new password for your account below</p>
			</VCardText>

			<VCardText>
				<VForm @submit.prevent="onResetPassword">
					<VRow>
						<!-- email -->
						<VCol cols="12">
							<VTextField
								v-model="reset.email"
								autofocus
								placeholder="johndoe@email.com"
								label="Email"
								type="email"
								:error-messages="reset.errors.email"
							/>
						</VCol>

						<!-- password -->
						<VCol cols="12">
							<EvoInputPassword v-model="reset.password" :error="reset.errors.password" />
						</VCol>
						<VCol cols="12">
							<EvoInputPassword
								v-model="reset.password_confirmation"
								:error="reset.errors.password_confirmation"
							/>
						</VCol>

						<VCol cols="12">
							<!-- login button -->
							<VBtn color="primary" block type="submit"> Reset Password </VBtn>
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
const reset = useForm({
	token: usePage().props.token,
	email: usePage().props.email,
	password: "",
	password_confirmation: "",
});

const onResetPassword = () => {
	reset.post(route("auth.reset-password.store"), {
		onSuccess() {
			reset.reset();
		},
	});
};
</script>
