<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageServerData } from './$types';
	import { LocalStorageUtils } from '$lib/utils/local.storage.utils';
	import {
		personRolesStore,
		genderTypesStore,
		splashCarouselImage
	} from '$lib/store/general.store';
	import Carousel from 'svelte-carousel';
	export let data: PageServerData;
	personRolesStore.set(data.roles);
	genderTypesStore.set(data.genderTypes);
	LocalStorageUtils.setItem('personRoles', JSON.stringify(data.roles));
	LocalStorageUtils.setItem('genderTypes', JSON.stringify(data.genderTypes));
	let showSplash = true;
	const show = LocalStorageUtils.getItem('showSplash');
	if (!show) {
		showSplash = true;
	} else {
		showSplash = show === 'true' ? true : false;
	}

	onMount(() => {
		setTimeout(() => {
			showSplash = false;
			LocalStorageUtils.setItem('showSplash', 'false');
		}, 3000);
	});
</script>

{#if showSplash}
	<div class="flex items-center justify-center lg:mt-16 md:mt-16 sm:mt-16 mt-0">
		<div
			class="card card-compact rounded-none card-bordered border-slate-400 w-[375px]
        h-[812px] bg-base-100  shadow-none "
		>
			<div class="card-body ">
				<img
					class="mt-[17.6rem] mx-4 w-[300px] h-[170px]"
					src="/assets/images/splash-screen/svg/logo.svg"
					alt=""
				/>
			</div>
			<img src="/assets/images/sign-in/svg/color-strip.svg" alt="" />
		</div>
	</div>
{:else}
	<div class="flex items-center justify-center lg:mt-16 md:mt-16 sm:mt-16 mt-0">
		<div class="card card-compact w-[375px] h-[812px] bg-base-100 border-2 rounded-none">
			<div class="card-body">
				<div class="flex flex-col items-center justify-center h">
					<img
						src="/assets/images/about-raahi/png/logo.png"
						alt=""
						class="w-[110px] h-[50px] mt-[10px] object-contain  "
					/>
				</div>
				
				<Carousel autoplay autoplayDuration={3000} arrows={false} dots={false} pauseOnFocus>
					{#each Object.values($splashCarouselImage) as item}
						<div>
							<div class="flex flex-col text-center justify-center">
								<img src={item.Image} alt="" class="mt-[50px]  h-[250px] " />
								<h2 class=" text-[#5b7aa3] font-bold w-[335px] h-[44px] mt-4 leading-[23px]">
									{item.Title}
								</h2>
								<p class=" font-normal overflow-auto h-[60px] text-[#000]">
									{item.Description}
								</p>
							</div>
						</div>
					{/each}
				</Carousel>
				
				<div class="flex flex-col text-center- justify-center mt-4">
					<a href="/join-raahi">
						<button
							class="w-[340px] h-[52px] rounded-[10px] bg-[#5b7aa3] uppercase text-[#fff] tracking-[3px] text-[17px]"
						>
							join raahi
						</button></a
					>
					<a href="/sign-in">
						<button
							class="w-[340px] h-[52px] rounded-[10px] mt-[40px] bg-[#d05591] uppercase text-[#fff] tracking-[3px] text-[17px]"
						>
							sign to raahi
						</button>
					</a>
				</div>
			</div>
			<img
				src="/assets/images/about-raahi/png/colors-strip.png"
				alt=""
				class="w-[375px] h-[10px] object-contain"
			/>
		</div>
	</div>
{/if}
