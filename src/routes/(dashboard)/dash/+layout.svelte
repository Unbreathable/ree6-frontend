<script lang="ts">

  import Sidebar from "./sidebar.svelte";

</script>
<div class="body">
    <Sidebar />

    <div class="content">
        <slot />
    </div>
</div>

<style lang="scss">
    .body {
        padding: 0;
        margin: 0;
        display: flex;
        height: 100vh;
        width: 100vw;
        background-color: var(--onyx);
    }

    .content {
        width: 100%;
        height: calc(100% - 4rem);
        padding: 2rem;
    }
</style>