<script lang="ts">
    
    let blacklist = ["Glatze", "Bastard"]

    let wordToAdd: string = ""

    function addWord() {
        blacklist.push(wordToAdd)
        blacklist = blacklist
        wordToAdd = ""
    }

    function removeWord(toRemove: string) {
        blacklist = blacklist.filter(word => word != toRemove)
        blacklist = blacklist
    }

    let commands: any = {
        'kick': true,
        'ban': false,
        'mute': true,
        'unmute': false,
        'purge': true,
        'warn': true,
        'unwarn': false,
        'warns': true,
        'lock': true,
        'unlock': false,
        'slowmode': true,
        'blacklist': true,
        'whitelist': false,
    }

    function enableAll() {
        Object.keys(commands).forEach(feature => commands[feature] = true)
    }

    function disableAll() {
        Object.keys(commands).forEach(feature => commands[feature] = false)
    }

</script>

<h1 class="headline">Moderation settings</h1>

<div class="box default-margin">
    <div class="box-title">
        <div class="content">
            <div class="title">
                <span class="material-icons icon-primary icon-small">layers</span>
                <h1 class="text-medium">Command prefix</h1>
            </div>
            <p class="text-bg">Select the prefix for all commands.</p>
        </div>
        <span class="material-icons icon-large clickable">edit</span>
    </div>
</div>

<div class="box default-margin">
    <div class="box-title">
        <div class="content">
            <div class="title">
                <span class="material-icons icon-primary icon-small">block</span>
                <h1 class="text-medium">Blacklisted words</h1>
            </div>
            <p class="text-bg">Any message containing a word from the list of blacklisted words will be deleted and logged.</p>
        </div>

        <div class="button-bar">
            <input bind:value={wordToAdd} placeholder="Any word">
            <div class="button icon-button">
                <span class="material-icons icon-small icon-primary" on:click={addWord} on:keydown={() => {}}>add</span>
            </div>
        </div>
    </div>

    {#if blacklist.length > 0}
    <div class="chips default-margin">
        {#each blacklist as word}
        <div class="chip">
            <p class="text-small">{word}</p>
            <span on:click={() => {
                removeWord(word)
            }} on:keydown class="material-icons icon-primary clickable chip-button">close</span>
        </div>
        {/each}
    </div>
    {/if}
</div>

<h1 class="headline">Command settings</h1>

<div class="box default-margin">
    <div class="box-title">
        <div class="content">
            <div class="title">
                <span class="material-icons icon-primary icon-small">keyboard_command_key</span>
                <h1 class="text-medium">Enabled commands</h1>
            </div>
            <p class="text-bg">Configure all commands that can be executed using the discord bot.</p>
        </div>
        <div class="button-bar">
            <div class="button" on:click={enableAll} on:keydown>
                <span class="material-icons icon-small icon-primary">done_all</span>
                <p class="text-small">Enable all</p>
            </div>

            <div class="button" on:click={disableAll} on:keydown>
                <span class="material-icons icon-small icon-primary">close</span>
                <p class="text-small">Disable all</p>
            </div>
        </div>
    </div>

    <div class="chips default-margin">
        {#each Object.keys(commands) as command}
        <div class="chip clickable {commands[command] ?? false ? 'chip-enabled' : ''}"
            on:click={() => commands[command] = !commands[command]} on:keydown={() => {}}
        >
            <span class="material-icons icon-small icon-primary">{commands[command] ?? false ? 'done' : 'close'}</span>
            <p class="text-small">{command}</p>
        </div>
        {/each}
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