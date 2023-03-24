<div class="server-profile">
    <span class="material-icons icon-primary">face</span>
    <h1>REE6 Community</h1>
</div>

<div class="stats">
    <div class="stat">
        <span class="material-icons icon-primary icon-medium">group</span>
        <p class="text-medium">300 server members</p>
    </div>

    <div class="stat">
        <span class="material-icons icon-primary icon-medium">key</span>
        <p class="text-medium">100 server invites</p>
    </div>

    {#each [1,2] as command}
    <div class="stat">
        <span class="material-icons icon-primary icon-medium">keyboard_command_key</span>
        <p class="text-medium">2255 /help usages</p>
    </div>
    {/each}
</div>

<h2 class="headline">Bot settings</h2>

<div class="actions">
    <div class="action">
        <span class="material-icons icon-primary icon-large">dynamic_feed</span>
        <div class="content">
            <h1 class="text-medium">Logging</h1>
            <p class="text-bg">Logs, Logging settings</p>
        </div>
    </div>

    <div class="action">
        <span class="material-icons icon-primary icon-large">chat</span>
        <div class="content">
            <h1 class="text-medium">Moderation</h1>
            <p class="text-bg">Moderation features, Command prefix</p>
        </div>
    </div>


    <div class="action">
        <span class="material-icons icon-primary icon-large">movie</span>
        <div class="content">
            <h1 class="text-medium">Social media</h1>
            <p class="text-bg">Social media alerts, Welcome messages</p>
        </div>
    </div>

    <div class="action">
        <span class="material-icons icon-primary icon-large">leaderboard</span>
        <div class="content">
            <h1 class="text-medium">Leaderboard</h1>
            <p class="text-bg">Chat leaderboard, Voice leaderboard</p>
        </div>
    </div>
</div>

<style lang="scss">

    .server-profile {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        h1 {
            font-size: 5rem;
        }

        span {
            font-size: 10rem;
        }
    }
    
    .headline {
        margin-top: 1.5rem;
        margin-bottom: 0.8rem;
    }

    .stats {
        display: flex;
        justify-content: center;
        padding: 0.5rem;
        gap: 0.5rem;
        flex-wrap: wrap;

        .stat {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            padding: 0.6rem;
            border-radius: 1rem;
            background-color: var(--outer-space);
        }
    }

    .actions {
        display: flex;
        gap: 1.3rem;
        flex-wrap: wrap;
        
        .action {
            display: flex;
            gap: 0.7rem;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            border-radius: 1rem;
            background-color: var(--outer-space);
            
            .content {
                display: flex;
                flex-direction: column;
                gap: 0.3rem;
            }
        }
    }

</style>