<script lang="ts">
    import { slide } from "svelte/transition";

    let selected = 0;
    let expanded = false;
</script>

<div class="sidebar">
    <div class="server-selector">
        <span class="material-icons icon-large icon-primary middle">face</span>
        <div class="server-current">
            <div class="up">
                <div class="title">
                    <span class="material-icons icon-medium icon-primary">dns</span>
                    <p class="server-current-name text-medium">Server 123</p>
                </div>
    
                <span class="material-icons icon-medium expand {expanded ? "expand-rotated" : ""}" on:click={() => {
                    expanded = !expanded;
                }} on:keydown>expand_more</span>
            </div>

            {#if expanded}
            <div in:slide out:slide class="list">
                {#each [1, 2, 3, 4, 5] as server}
                <div class="server" on:click={() => {
                    expanded = false;
                }} on:keydown>
                    <span class="material-icons icon-medium icon-primary">dns</span>
                    <p class="server-name text-medium">Server {server}</p>
                </div>
                {/each}
            </div>
            {/if}
        </div>
    </div>

    <div class="element-list">
        <div class="element element-selected">
            <span class="material-icons icon-medium icon-primary">insights</span>
            <p class="text-medium">Server statistics</p>
        </div>

        <div class="element">
            <span class="material-icons icon-medium icon-primary">dynamic_feed</span>
            <p class="text-medium">Logging</p>
        </div>

        <div class="element">
            <span class="material-icons icon-medium icon-primary">chat</span>
            <p class="text-medium">Moderation</p>
        </div>

        <div class="element">
            <span class="material-icons icon-medium icon-primary">public</span>
            <p class="text-medium">Server details</p>
        </div>

        <div class="element">
            <span class="material-icons icon-medium icon-primary">leaderboard</span>
            <p class="text-medium">Leaderboards</p>
        </div>
    </div>
</div>

<style lang="scss">
    .sidebar {
        background-color: var(--eerie-black);
        width: 100%;
        height: 100%;
        max-width: 350px;
    }

    .server-selector {
        display: flex;
        gap: 0.6rem;
        padding: 0.6rem;
        
        .middle {
            margin-top: 0.25rem;
        }
    }

    .server-current {
        user-select: none;
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0.4rem;
        border-radius: 1rem;
        gap: 0.1rem;
        background-color: var(--outer-space);

        .up {
            display: flex;
            width: 100%;
            padding: 0.1rem;
            align-items: center;
            justify-content: space-between;
            border-radius: 1rem;
            background-color: var(--outer-space);

            .title {
                display: flex;
                align-items: center;
                gap: 0.3rem;
            }
        }

        .server {
            cursor: pointer;
            display: flex;
            margin-top: 0.2rem;
            padding: 0.4rem;
            align-items: center;
            gap: 0.3rem;
            border-radius: 1rem;
            background-color: var(--outer-space);
            transition: 250ms all ease;

            &:hover {
                background-color: var(--onyx);
            }
        }
    }

    .expand {
        user-select: none;
        cursor: pointer;
        transition: 250ms all ease;
    
        &:hover {
            transform: translateY(3px);
        }
    }

    .expand-rotated {
        transform: rotate(180deg);
        
        &:hover {
            transform: rotate(180deg) translateY(3px);
        }
    }

    .element-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0rem 0.6rem 0.6rem 0.6rem;
    }

    .element {
        cursor: pointer;
        display: flex;
        gap: 0.4rem;
        align-items: center;
        padding: 0.5rem;
        border-radius: 0.5rem;
        transition: 250ms all ease;

        &:hover {
            background-color: var(--outer-space);
        }
    }

    .element-selected {
        background-color: var(--outer-space);
    }
</style>