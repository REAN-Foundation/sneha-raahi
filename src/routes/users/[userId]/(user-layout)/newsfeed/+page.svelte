<script lang="ts">
	import type { PageServerData } from './$types';
	import { page } from '$app/stores';
	import Image from "$lib/components/image.svelte";
	export let data: PageServerData;
	const userId = $page.params.userId;
	// let raahiFeedItems = data.raahiFeedItems;
	let communityFeedItems = data.communityFeedItems;
	let showRaahiUpdates = true;
	// console.log(JSON.stringify(raahiFeedItems, null, 2));
	console.log(JSON.stringify(communityFeedItems, null, 2));

</script>

<!-- <div class="card card-compact card-bordered w-[375px] h-[701px] bg-base-100 border-slate-200 rounded-none rounded-t-[44px] shadow-sm"> -->
	<div class="card-body ">
		<!-- <button class="h-[5px] w-[73px] bg-[#e3e3e3] ml-[8.5rem] mt-2 rounded" /> -->
		<h2 class=" text-[#5b7aa3] flex  justify-center uppercase tracking-widest font-bold text-base ">
			Newsfeed
		</h2>
		<div class="flex flex-row max-[425px]:w-full w-[340px] h-[34px] justify-center ">
			<!-- <button
				disabled={showRaahiUpdates}
				class="disabled:bg-[#5b7aa3] disabled:text-[#dfe7fd] rounded-2xl max-[425px]:w-full w-[170px] text-[#5b7aa3] h-[34px] text-center bg-[#dfe7fd] text-[13px] tracking-wider mr-3"
				on:click|preventDefault={() => (showRaahiUpdates = true)}>
				Raahi Updates
			</button> -->
			<button
			class="rounded-2xl max-[425px]:w-full w-[170px] text-[#5b7aa3] h-[34px] text-center bg-[#dfe7fd] text-[13px] tracking-wider mr-3">
			Community Updates
		</button>
			<!-- <button
				disabled={!showRaahiUpdates}
				class="disabled:bg-[#5b7aa3] disabled:text-[#dfe7fd] rounded-2xl max-[425px]:w-full w-[170px] text-[#5b7aa3] h-[34px] text-center bg-[#dfe7fd] text-[13px] tracking-wider max-[375px]:tracking-wide"
				on:click|preventDefault={() => (showRaahiUpdates = false)}>
				Community Updates
			</button> -->
		</div>
		<!-- {#if showRaahiUpdates} -->
			<!-- <div class=" h-[550px] overflow-auto scrollbar-medium ">
				{#each Object.values(raahiFeedItems) as news}
					<div class="mb-6 ">
						<a href={`/users/${userId}/newsfeed/${news.id}`}>
							<h4 class="text-right  text-[13px] font-semibold mb-1">{news.pubDate}</h4>
							<div class="w-[340px] max-[425px]:w-full h-[280px]  rounded-lg bg-[#f2e2da]">
								<div class="flex flex-row p-1">
									<div class="w-[70px] mt-2 ml-2 h-[40px] rounded-lg bg-[#fff]">
										<img
											src="/assets/images/newsfeed/png/logo.png"
											alt=""
											class="ml-1.5 mt-3 w-[28.8px] h-[14.3px]"
										/>
									</div>
									<div class="ml-4 ">
										<h2 class="text-left text-[15px] mt-2">
											{news.title?.length > 30
												? news.title?.substring(0, 30) + '...'
												: news.title}
										</h2>
										<p>
											{news.content?.length > 50
												? news.content?.substring(0, 50) + '...'
												: news.content}
										</p>
									</div>
								</div>
								<Image cls="w-[324px] max-[425px]:w-full max-[320px]:h-[150px] max-[425px]:mx-[0px] mx-2 px-2 mt-4 h-[170px] rounded-lg" source={news.image + "?disposition=inline"} w=162 h=162 />
							</div></a
						>
					</div>
				{/each}
			</div> -->
		<!-- {:else} -->
			<!-- <div class=" h-[590px] overflow-auto scrollbar-medium ">
				{#each newsFeeds as news}
					<a href="/newsfeed-details">
						<h4 class="text-right pr-1 mt-3 mb-2 text-[13px] font-semibold">{news.pubDate}</h4>
						<div class="w-[340px] h-[125px]  rounded-lg bg-[#d7eaf7]">
							<a class="flex justify-center p-2 mb-5 font-semibold text-left text-[#5b7aa3] hover:underline " href={news.link}
								>{news.title}</a
							>
						</div>
					</a>
				{/each}
			</div> -->

			<div class="h-[550px] overflow-auto scrollbar-medium">
				{#each Object.values(communityFeedItems) as news}
					<div class="mb-6">
						<a href={`/users/${userId}/newsfeed/${news.id}`}>
							<h4 class="text-right  text-[13px] font-semibold mb-1">{news.pubDate ? news.pubDate : ''}</h4>
							<div class="flex flex-col items-center justify-center w-[340px] max-[425px]:w-full h-[280px]  rounded-lg bg-[#d7eaf7]">
								<div class="flex flex-row p-1">
									<div class="w-[70px] mt-2 ml-2 h-[40px] rounded-lg bg-[#fff]">
										<img
											src="/assets/images/newsfeed/png/logo.png"
											alt=""
											class="ml-1.5 mt-3 w-[28.8px] h-[14.3px]"
										/>
									</div>
									<div class="ml-4 ">
										<h2 class="text-left text-[15px] mt-2">
											{news.title?.length > 30
												? news.title?.substring(0, 30) + '...'
												: news.title}
										</h2>
										<p>
											{news.content?.length > 50
												? news.content?.substring(0, 50) + '...'
												: news.content}
										</p>
									</div>
								</div>
								<div class="m-4">
									<Image cls="w-[324px] h-[170px] rounded-lg" source={news.image + "?disposition=inline"} w=162 h=162 />
								</div>
							</div>
						</a>
					</div>
				{/each}
			</div>
		<!-- {/if} -->
	</div>
<!-- </div> -->
