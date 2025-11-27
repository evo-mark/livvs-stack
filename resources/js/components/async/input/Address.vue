<template>
	<div class="grid grid-cols-2 gap-x-8">
		<div v-if="!props.hideNickname" class="col-span-2">
			<VTextField
				v-model="modelValue.nickname"
				label="Address Nickname"
				:error-messages="props.errors.nickname"
			/>
		</div>
		<div v-if="!props.hideContact" class="col-span-2">
			<VTextField v-model="modelValue.contact" label="Contact Name" :error-messages="props.errors.contact" />
		</div>
		<div v-if="!props.hideEmail" class="col-span-2">
			<VTextField v-model="modelValue.email" label="Email Address" :error-messages="props.errors.email" />
		</div>
		<div v-if="!props.hidePhone" class="col-span-2">
			<VTextField v-model="modelValue.phone" label="Phone Number" :error-messages="props.errors.phone" />
		</div>
		<VExpandTransition>
			<div v-if="manual" class="col-span-2">
				<VTextField
					v-model="modelValue.address"
					label="Address (Line 1)"
					clearable
					:error-messages="props.errors.address"
				/>
				<VTextField
					v-model="modelValue.address_2"
					label="Address (Line 2)"
					clearable
					:error-messages="props.errors.address_2"
				/>
				<VTextField
					v-model="modelValue.address_3"
					label="Address (Line 3)"
					clearable
					:error-messages="props.errors.address_3"
				/>
				<VTextField
					v-model="modelValue.city"
					label="Town / City"
					clearable
					:error-messages="props.errors.city"
				/>
				<VTextField
					v-model="modelValue.county"
					label="County"
					clearable
					:error-messages="props.errors.county"
				/>
				<VSelect
					v-model="modelValue.country_code"
					label="Country"
					:items="countries"
					:error-messages="props.errors.country_code"
				>
					<template #item="{ props: itemProps, item }">
						<VListItem v-bind="itemProps">
							<template #prepend>
								<span class="mr-2">{{ item.raw.flag }}</span>
							</template>
						</VListItem>
					</template>
				</VSelect>
			</div>
		</VExpandTransition>
		<div>
			<VTextField
				v-model="modelValue.postcode"
				:label="manual ? 'Postcode' : 'Search Address By Postcode'"
				clearable
				:error-messages="props.errors.postcode"
			/>
		</div>
		<div>
			<VSwitch v-model="manual" label="Enter Manually" />
		</div>
		<VExpandTransition>
			<div v-if="!manual && results.length" class="col-span-2">
				<VCard>
					<VCardText>
						<VListSubheader>Found {{ resultsCount }} addresses</VListSubheader>
						<VVirtualScroll :items="results" item-height="48" height="200">
							<template #default="{ item }">
								<VListItem :title="item.formatted_string" @click="selectAddress(item)" />
							</template>
						</VVirtualScroll>
					</VCardText>
				</VCard>
			</div>
		</VExpandTransition>
	</div>
</template>

<script setup>
import { debounce } from "es-toolkit";
import axios from "axios";

const modelValue = defineModel({
	type: Object,
	default: () => ({}),
});

const props = defineProps({
	hideNickname: {
		type: Boolean,
		default: false,
	},
	hideContact: {
		type: Boolean,
		default: false,
	},
	hideEmail: {
		type: Boolean,
		default: false,
	},
	hidePhone: {
		type: Boolean,
		default: false,
	},
	errors: {
		type: Object,
		default: () => ({}),
	},
});

const hasAddress = computed(() => ["address", "city", "county"].some((field) => !!modelValue.value[field]));

const route = useRoute();
const manual = ref(hasAddress.value);
const results = ref([]);
const resultsCount = ref(0);
const countries = useCountries();

const selectAddress = (item) => {
	modelValue.value.address = item.address;
	modelValue.value.address_2 = item.address_2;
	modelValue.value.address_3 = item.address_3;
	modelValue.value.city = item.city;
	modelValue.value.county = item.county;
	modelValue.value.country_code = item.country_code;
	manual.value = true;
};

watch(
	() => modelValue.value.postcode,
	debounce((postcode) => {
		if (manual.value || !postcode || postcode.length < 5) return;

		axios
			.get(route("address.search"), {
				params: {
					postcode,
				},
			})
			.then((res) => {
				results.value = res.data.addresses;
				resultsCount.value = res.data.count;
				modelValue.value.latitude = res.data.point?.coordinates?.latitude ?? null;
				modelValue.value.longitude = res.data.point?.coordinates?.longitude ?? null;
			});
	}, 300),
);
</script>
