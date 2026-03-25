<template>
	<VNavigationDrawer>
		<div class="py-4 px-4">
			<EvoLogo />
		</div>
		<v-divider />
		<EvoSidebarNavigation />
		<template #append>
			<VList nav>
				<v-list-item title="Logout" :prepend-icon="mdiLogoutVariant" to="auth.logout" method="delete" />
			</VList>
		</template>
	</VNavigationDrawer>
	<VAppBar>
		<template #append>
			<EvoAppBarThemeSwitcher />
		</template>
	</VAppBar>
	<VMain>
		<slot></slot>
	</VMain>
</template>

<script setup>
import { mdiLogoutVariant } from "@mdi/js";
</script>
