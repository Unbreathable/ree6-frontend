<script lang="ts">
    import { fade, scale } from "svelte/transition";


    let channels = [
        {
            name: 'general',
            id: '123'
        },
        {
            name: 'test-channel',
            id: '123'
        },
        {
            name: 'support',
            id: '123'
        }
    ]

    export let message: string;

</script>

<div out:fade in:fade class="dialog-outer">
    <div out:scale={{start: 0.8}} in:scale={{start: 0.8}} class="dialog">

        <div class="header">
            <h2>{message}</h2>
            <span class="material-icons icon-medium">close</span>
        </div>

        <div class="content">
            <div class="channels">
                {#each channels as channel}
                <div class="channel">
                    <span class="material-icons icon-primary icon-small">tag</span>
                    <div class="name">{channel.name}</div>
                </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    @import '$lib/default.scss';

    .dialog-outer {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .dialog {
        width: 100%;
        max-width: 500px;
        max-height: 600px;
        background-color: var(--eerie-black);
        border-radius: 1rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }

        .content {
            overflow: scroll;
            border-radius: 0.5rem;
        }
    }

    .channels {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .channel {
            padding: 0.2rem;
            background-color: var(--onyx);
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
        }
    }

</style>
