<template>
	<div class="flex-center container h-full">
		<VCard :title="`Welcome to ${$page.props.app.name}`" max-width="448">
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
							<EvoInputPassword v-model="login.password" :error="login.errors.password" />
						</VCol>
						<VCol cols="12">
							<!-- remember me checkbox -->
							<div class="flex flex-wrap items-center justify-between gap-8">
								<VCheckbox
									v-model="login.remember"
									label="Remember me?"
									hide-details
									density="compact"
								/>

								<VBtn class="text-capitalize text-primary" variant="text" to="auth.forgot-password">
									<span class="capitalize">Forgot Password?</span>
								</VBtn>
							</div>
						</VCol>
						<VCol cols="12">
							<!-- login button -->
							<VBtn color="primary" block type="submit"> Login </VBtn>
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
const login = useForm({
	email: "",
	password: "",
	remember: true,
});

const onLogin = () => {
	login.post(route("auth.login.store"), {
		onSuccess() {
			console.log("Done");
		},
	});
};
</script>
