<script lang="ts">

    let servers = [
        {
            id: 1,
            name: "Server von Unbreathable",
            setup: false
        },
        {
            id: 2,
            name: "Azura",
            setup: true
        },
        {
            id: 3,
            name: "NoRules",
            setup: false
        }
    ]

</script>

<h1 class="headline-top">Servers</h1>

<div class="servers">
    {#each servers as server}
    <div class="server">
        <span class="material-icons icon-replacer icon-primary">face</span>
        <h3>{server.name}</h3>

        {#if server.setup}

        <div class="button clickable">
            <span class="material-icons icon-primary">edit</span>
            <p>Manage</p>
        </div>

        {:else}

        <div class="button clickable">
            <span class="material-icons icon-primary">launch</span>
            <p>Setup</p>
        </div>

        {/if}
    </div>
    {/each}
</div>

<style lang="scss">
    @import '$lib/default.scss';    

    .icon-replacer {
        font-size: 8rem;
    }

    .servers {
        display: flex;
        flex-wrap: wrap;
        gap: 3rem;

        .server {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 0.5rem;
            border-radius: 1rem;
            padding: 1rem 2rem;
            min-width: 150px;
            max-width: 17%;
            background-color: var(--outer-space);

            h3 {
                width: 180px;
                text-align: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .button {
                margin-top: 0.1rem;
                display: flex;
                align-items: center;
                gap: var(--button-gap);
                padding: var(--button-padding);
                border-radius: 1rem;
                background-color: var(--onyx);
                transition: 250ms ease;
            
                &:hover {
                    background-color: var(--eerie-black);
                }
            }
        }
    }

</style>