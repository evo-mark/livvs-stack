<template>
	<div class="auth-wrapper d-flex align-center justify-center pa-4">
		<VCard class="auth-card pa-4 pt-7" max-width="448">
			<VCardItem class="justify-center">
				<template #prepend>
					<div class="d-flex">
						<div class="d-flex text-primary" v-html="logo" />
					</div>
				</template>

				<VCardTitle class="text-2xl font-weight-bold"> sneat </VCardTitle>
			</VCardItem>

			<VCardText class="pt-2">
				<p class="mb-0">Please sign-in to your account</p>
			</VCardText>

			<VCardText>
				<VForm @submit.prevent="onLogin">
					<VRow>
						<!-- email -->
						<VCol cols="12">
							<VTextField
								v-model="login.email"
								autofocus
								placeholder="johndoe@email.com"
								label="Email"
								type="email"
								:error-messages="login.errors.email"
							/>
						</VCol>

						<!-- password -->
						<VCol cols="12">
							<VTextField
								v-model="login.password"
								label="Password"
								placeholder="············"
								:type="isPasswordVisible ? 'text' : 'password'"
								:append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
								:error-messages="login.errors.password"
								@click:append-inner="isPasswordVisible = !isPasswordVisible"
							/>

							<!-- remember me checkbox -->
							<div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
								<VCheckbox v-model="login.remember" label="Remember me?" />

								<VBtn
									class="text-primary text-capitalize ms-2 mb-1"
									variant="text"
									to="auth.forgot-password"
								>
									Forgot Password?
								</VBtn>
							</div>

							<!-- login button -->
							<VBtn block type="submit"> Login </VBtn>
						</VCol>
					</VRow>
				</VForm>
			</VCardText>
		</VCard>
	</div>
</template>

<script setup>
import BlankLayout from "../../layouts/BlankLayout.vue";
defineOptions({
	layout: BlankLayout,
});

const route = useRoute();
const login = useForm({
	email: "",
	password: "",
	remember: false,
});

const isPasswordVisible = ref(false);
const onLogin = () => {
	login.post(route("auth.login.store"), {
		onSuccess() {
			console.log("Done");
		},
	});
};
</script>
