<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { isLightMode } from '$lib/themeStore';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup, LightSwitch } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let lightMode = true;

	$: isLightMode.subscribe(value => {
		lightMode = value;
	});

	function updateStore() {
		isLightMode.set(lightMode);
	}

</script>

<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">HistoDuo</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="#"
					target="_blank"
					rel="noreferrer"
				>
					Order
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="#"
					target="_blank"
					rel="noreferrer"
				>
					Validation
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="#"
					target="_blank"
					rel="noreferrer"
				>
					Result
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="#"
					target="_blank"
					rel="noreferrer"
				>
					Statistic
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="#"
					target="_blank"
					rel="noreferrer"
				>
					Configuration
				</a>
				<LightSwitch on:click={() => isLightMode.update(n => !n)}/>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
