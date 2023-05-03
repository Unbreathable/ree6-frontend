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

<style lang="scss">
    @import '$lib/default.scss';

    .box {
        gap: 1rem;
        padding: 1rem;
        border-radius: 1rem;
        background-color: var(--outer-space);

        .box-title {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .content {
                display: flex;
                flex-direction: column;
                gap: 0.4rem;

                .title {
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                }
            }

            .clickable {
                cursor: pointer;
                transition: 250ms ease;

                &:hover {
                    color: var(--primary);
                }
            }

            .button-bar {
                display: flex;
                align-items: center;
                gap: 0.5rem;

                .button {
                    display: flex;
                    align-items: center;
                    gap: var(--button-gap);
                    padding: var(--button-padding);
                    background-color: var(--onyx);
                    border-radius: 1rem;
                    transition: 250ms all ease;
                    cursor: pointer;
                }

                .button:hover {
                    background-color: var(--eerie-black);
                }
            }
        }
    }

    .chips {
        display: flex;
        flex-wrap: wrap;
        gap: calc(var(--button-gap) * 1.5);

        .chip {
            display: flex;
            align-items: center;
            gap: var(--button-gap);
            padding: var(--button-padding);
            border-radius: 10rem;
            border: 2px solid var(--onyx);
            background-color: var(--onyx);
            transition: 250ms ease;
        }

        .chip-enabled {
            border-color: var(--slate-gray);
            background-color: var(--onyx);
        }
    }

</style>