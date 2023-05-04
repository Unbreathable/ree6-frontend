<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
    import { slide } from "svelte/transition";

    let expanded = false;

    let server = "";

    onMount(() => {
        server = $page.params["serverId"] ?? "Select a server..";
        console.log($page.url.pathname)
    })

    let elements = [
        {
            icon: "insights",
            name: "Overview",
            link: "/stats",
        },
        {
            icon: "dynamic_feed",
            name: "Events & logging",
            link: "/events",
        },
        {
            icon: "gavel",
            name: "Moderation",
            link: "/moderation",
        },
        {
            icon: "movie",
            name: "Social media",
            link: "/media",
        },
        {
            icon: "leaderboard",
            name: "Leaderboards",
            link: "/leaderboards",
        },
    ];

    let servers = [
         {
            id: 1,
            name: "REE6 Community",
        },
        {
            id: 2,
            name: "Azura",
        },
        {
            id: 3,
            name: "NoRules",
        }
    ]

    function selectServer(serverId: number) {
        goto("/dash/" + serverId + "/stats")
        server = "" + serverId;
        expanded = false;
    }

</script>

<div class="sidebar">
    <div class="server-selector">
        <span on:click={() => {
            goto("/dash")
        }} on:keydown class="material-icons icon-large icon-primary middle clickable">face</span>
        <div class="server-current">
            <div class="up" on:click={() => {
                expanded = !expanded;
            }} on:keydown>
                <div class="title">
                    <span class="material-icons icon-medium icon-primary">{server == "Select a server.." ? "ads_click" : "dns"}</span>
                    <p class="server-current-name text-medium">{server}</p>
                </div>
    
                <span class="material-icons icon-medium expand {expanded ? "expand-rotated" : ""}">expand_more</span>
            </div>

            {#if expanded}
            <div in:slide out:slide class="list">
                {#each servers as server}
                <div class="server" on:click={() => selectServer(server.id)} on:keydown>
                    <span class="material-icons icon-medium icon-primary">dns</span>
                    <p class="server-name text-medium">{server.name}</p>
                </div>
                {/each}
            </div>
            {/if}
        </div>
    </div>

    {#if $page.url.pathname.startsWith("/dash/" + server)}
    <div class="element-list">

        {#each elements as element}
        <div class="element {$page.url.pathname.startsWith("/dash/" + server + element.link) ? "element-selected" : ""}" on:click={() => {
            goto("/dash/" + server + element.link)
        }} on:keydown>
            <span class="material-icons icon-medium icon-primary">{element.icon}</span>
            <p class="text-medium">{element.name}</p>
        </div>
        {/each}
    </div>
    {/if}
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
            cursor: pointer;
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