<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    let loading = true;
    let correct = false;

    onMount(() => {
        correct = $page.url.searchParams.has("token");
        loading = false;
    })

</script>

<div class="box">
    {#if loading}
    <h2>Loading..</h2>

    {:else if correct}
    <h2>Processing your request..</h2>
    {:else}
    <h2>Invalid request.</h2>
    {/if}
</div>

<style lang="scss">

    .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: var(--eerie-black);
    }

</style>
