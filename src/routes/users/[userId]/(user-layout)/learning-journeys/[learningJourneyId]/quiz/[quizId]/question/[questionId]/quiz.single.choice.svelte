<script lang="ts">
  	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher();
	export let options;
	export let correctSequence;
	export let answerSubmitted = false;
	const unselected = "h-[65px] w-[340px] bg-[#e3e3e3] hover:bg-[#fcaf58] mt-3 first:mt-0 text-lg text-left font-normal pl-3 border tracking-normal rounded-lg";
	const selected = "h-[65px] w-[340px] bg-[#fcaf58] mt-3 first:mt-0 text-lg text-left font-normal pl-3 border tracking-normal rounded-lg";

	const handleSingleChoiceClick = async (e, sequence: number) => {
		answerSubmitted = true;
		console.log(e.currentTarget);
		const optionId = e.currentTarget.id;
		console.log(`Option id = ${optionId}`);
		const idx = options.findIndex(x => x.Sequence === sequence);
		if(idx > -1) {
			options[idx].Selected = !options[idx].Selected;
		}
		console.log(`answerSubmitted: ${answerSubmitted}`);
		dispatch('answerSelected');
	};

</script>

<div class=" flex flex-col items-center">
	{#each options as option}
		<button
			on:click|once={(e) => handleSingleChoiceClick(e, option.Sequence)}
			id={option.id}
			name={option.id}
			disabled ={answerSubmitted}
			class={option.Selected ? selected : unselected}
		>
			<div class="flex relative font-normal">
				<div class = "mr-4 space-y-2">
				{option.Text}
			</div>
				{#if answerSubmitted}
					{#if option.Sequence == correctSequence}
						<img 
							class=" absolute right-0 pt-1 pr-3"
							src="/assets/images/quiz-wrong/svg/correct.svg"
							alt=""
						/>
					{:else}
						<img
							class="absolute right-0 pt-1 pr-3 "
							src="/assets/images/quiz-wrong/svg/wrong.svg"
							alt=""
						/>

					{/if}
				{/if}
			</div>
		</button>
	{/each}
</div>

