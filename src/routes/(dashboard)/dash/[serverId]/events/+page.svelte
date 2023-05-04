<script lang="ts">
    
    let loggingFeatures: any = {
        'messageDelete': true,
        'messageEdit': false,
        'messagePurge': true,
        'messageBulkDelete': false,
        'messagePin': true,
        'messageUnpin': false,
        'messageReactionAdd': true,
        'messageReactionRemove': true,
        'messageReactionRemoveAll': false,
        'messageReactionRemoveEmoji': false,
        'messageReactionRemoveAllEmoji': false,
        'messageDeleteBulk': false,
    }

    let roles = ["Guest"]

    function enableAll() {
        Object.keys(loggingFeatures).forEach(feature => loggingFeatures[feature] = true)
    }

    function disableAll() {
        Object.keys(loggingFeatures).forEach(feature => loggingFeatures[feature] = false)
    }

</script>

<h1 class="headline-top">Logging</h1>

<div class="box default-margin">
    <div class="box-title">
        <div class="content">
            <div class="title">
                <span class="material-icons icon-primary icon-small">tag</span>
                <h1 class="text-medium">Logging channel</h1>
            </div>
            <p class="text-bg">Select the channel for all log messages.</p>
        </div>
        <span class="material-icons icon-large clickable">edit</span>
    </div>
</div>

<div class="box default-margin">
    <div class="box-title">
        <div class="content">
            <div class="title">
                <span class="material-icons icon-primary icon-small">dynamic_feed</span>
                <h1 class="text-medium">Logging features</h1>
            </div>
            <p class="text-bg">Configure all events that should be logged.</p>
        </div>
        <div class="button-bar">
            <div class="button" on:click={enableAll} on:keydown={() => {}}>
                <span class="material-icons icon-small icon-primary">done_all</span>
                <p class="text-small">Enable all</p>
            </div>

            <div class="button" on:click={disableAll} on:keydown={() => {}}>
                <span class="material-icons icon-small icon-primary">close</span>
                <p class="text-small">Disable all</p>
            </div>
        </div>
    </div>

    <div class="chips default-margin">
        {#each Object.keys(loggingFeatures) as feature}
        <div class="chip clickable {loggingFeatures[feature] ?? false ? 'chip-enabled' : ''}"
            on:click={() => loggingFeatures[feature] = !loggingFeatures[feature]} on:keydown={() => {}}
        >
            <span class="material-icons icon-small icon-primary">{loggingFeatures[feature] ?? false ? 'done' : 'close'}</span>
            <p class="text-small">{feature}</p>
        </div>
        {/each}
    </div>
</div>

<h1 class="headline">Join settings</h1>

<div class="box default-margin">
    <div class="box-title">
        <div class="content">
            <div class="title">
                <span class="material-icons icon-primary icon-small">military_tech</span>
                <h1 class="text-medium">Automatic roles</h1>
            </div>
            <p class="text-bg">Configure all roles that should be given to users when joining the guild.</p>
        </div>
        <div class="button-bar">
            <div class="button icon-button">
                <span class="material-icons icon-small icon-primary">add</span>
            </div>
        </div>
    </div>

    {#if roles.length > 0}
    <div class="chips default-margin">
        {#each roles as role}
        <div class="chip">
            <p class="text-small">{role}</p>
            <span on:click={() => {
            }} on:keydown class="material-icons icon-primary clickable chip-button">close</span>
        </div>
        {/each}
    </div>
    {/if}
</div>

<div class="box default-margin">
    <div class="box-title">
        <div class="content">
            <div class="title">
                <span class="material-icons icon-primary icon-small">tag</span>
                <h1 class="text-medium">Welcome channel</h1>
            </div>
            <p class="text-bg">Select the channel for all welcome messages.</p>
        </div>
        <span class="material-icons icon-large clickable">edit</span>
    </div>
</div>

<div class="box default-margin">
    <div class="box-title">
        <div class="content">
            <div class="title">
                <span class="material-icons icon-primary icon-small">mail</span>
                <h1 class="text-medium">Welcome message</h1>
            </div>
            <p class="text-bg">Configure the welcome message.</p>
        </div>
        <span class="material-icons icon-large clickable">edit</span>
    </div>
</div>


<style lang="scss">
    @import '$lib/default.scss';
    @import '$lib/styles/box.scss';
    @import '$lib/styles/chips.scss';

    .chip-button {
        margin-left: 0.1rem;
        color: var(--seasalt);
        transition: 250ms ease;

        &:hover {
            color: var(--primary);
        }
    }

</style>