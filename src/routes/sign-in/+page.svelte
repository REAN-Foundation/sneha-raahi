<script lang="ts">
	import { browser } from '$app/environment';
	import { LocalStorageUtils } from '$lib/utils/local.storage.utils';
	import { enhance } from "$app/forms";
	import { selectedLanguage } from '$lib/store/general.store';
	import english from '$lib/localization/english.json';
  import hinglish from '$lib/localization/hinglish.json'

	/////////////////////////////////////////////////////////////////

	let localizedContent = $selectedLanguage === 'hinglish' ? hinglish : english;
	let personRoles = [], loginRoleId = 2;

	if (browser) {
		const tmp = LocalStorageUtils.getItem('personRoles');
		personRoles = JSON.parse(tmp);
		const patientRole = personRoles?.find(x => x.RoleName === 'Patient');
		if (patientRole) {
			loginRoleId = patientRole.id;
		}
		LocalStorageUtils.removeItem('prevUrl');
	}
</script>

<div class="flex items-center justify-center lg:mt-16 md:mt-16 sm:mt-16 mt-0">
	<div
		class="card card-compact rounded-none card-bordered max-[425px]:border-none border-slate-400 max-[425px]:w-full w-[375px]
	h-[812px] max-[812px]:h-screen bg-white shadow-none "
	>
		<div class="flex flex-col items-center justify-center">
			<img class="mt-12" src="/assets/images/sign-in/svg/logo.svg" alt="" />
			<div class="text-center leading-tight text-xs font-semibold">Built on REAN Foundation's HealthGuru Platform</div>
		</div>
		<div class="card-body bg-white">
			<h2 class="max-[425px]:mt-10 mt-30 text-center text-[#d05591] text-xl font-bold">
				{localizedContent.EnterPhoneNumber}
			</h2>
			<p class=" leading-tight text-base text-center">
				{localizedContent.LogInDescription}
			</p>
			<form method="post"  use:enhance>
			<input
				placeholder="Phone Number"
				type="number"
				name="phone"
				class=" h-[52px] w-[340px] max-[425px]:w-full py-2 px-3 border rounded-lg bg-[#fde2e4] mt-5 text-lg "
			/>
			<input name="loginRoleId" class="hidden" value="{loginRoleId}">

			<!-- <a href="/sign-in-otp"> -->
				<button
					class=" h-[52px] w-[340px] max-[425px]:w-full py-2 mt-8 max-h-[425px]:mb-auto mb-[180px] text-[#fff] text-xl font-bold rounded-lg bg-[#d05591] "
					>SEND OTP</button
				>
			<!-- </a> -->
		</form>
			<div class="flex justify-center">
				<a href="/"> <span class=" text-xl tracking-widest font-bold"> BACK TO HOME </span></a>
			</div>
		</div>
		<img src="/assets/images/sign-in/svg/color-strip.svg" alt="" />
	</div>
</div>
