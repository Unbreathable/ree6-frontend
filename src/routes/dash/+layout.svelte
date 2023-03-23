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
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        background-color: var(--onyx);
    }
</style>