<script lang="ts">
    export let size: string = "30";
</script>

<div class="loading">
    <span class="material-icons icon-primary spinner" style="font-size: {size}px;">hourglass_empty</span>
</div>

<style lang="scss">

    .loading {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .spinner {
        animation: loading 2s cubic-bezier(.57,-0.48,.29,1.43) infinite;
    }

    @keyframes loading {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

</style>
