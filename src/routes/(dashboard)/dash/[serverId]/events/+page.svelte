<script lang="ts">
    import ChannelPicker from "$lib/components/channelPicker.svelte";
    import LoadingIndicator from "$lib/components/loadingIndicator.svelte";
    import RolePicker from "$lib/components/rolePicker.svelte";
    import { setting } from "$lib/scripts/settings";
    import type { Writable } from "svelte/store";

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

    // Channels
    let channelPicker = false;
    let pickerMessage = ""
    let currentSetting: Writable<string>;

    let loggingChannel = setting("loggingChannel")
    let welcomeChannel = setting("welcomeChannel")

    // Roles
    let rolePicker = false;
    let rolePickerMessage = ""

    let autoRoles = setting("autoRoles")

    setTimeout(() => {
        loggingChannel.set("hi")
        autoRoles.set("Guest")
    }, 500);

    function enableAll() {
        Object.keys(loggingFeatures).forEach(feature => loggingFeatures[feature] = true)
    }

    function disableAll() {
        Object.keys(loggingFeatures).forEach(feature => loggingFeatures[feature] = false)
    }

    function selectChannel(message: string, setting: Writable<string>) {
        channelPicker = true
        pickerMessage = message;
        currentSetting = loggingChannel;
    }

    function addRole(message: string) {
        rolePicker = true
        rolePickerMessage = message;
        currentSetting = autoRoles;
    }

</script>

{#if channelPicker}
<ChannelPicker message={pickerMessage} callback={(id, name) => {
    channelPicker = false
    currentSetting.set(name)
}} current={$loggingChannel} />
{/if}

{#if rolePicker}
<RolePicker message={rolePickerMessage} callback={(name) => {
    rolePicker = false
    if(name == "") return;
    if($autoRoles.includes(name)) return;

    // Add new role
    if($autoRoles == "") autoRoles.set(name)
    else autoRoles.set($autoRoles + "," + name)
}} current="" />
{/if}

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

        {#if $loggingChannel == ":loading"}
        <div class="loading">
            <LoadingIndicator size="45" />
        </div>
        {:else}
        <div class="button-bar">
            <div class="text">
                <span class="material-icons icon-primary icon-small">tag</span>
                <p>{$loggingChannel}</p>
            </div>
            <div on:click={() => selectChannel("Select a channel for logs.", loggingChannel)} on:keydown class="button icon-button">
                <span class="material-icons icon-small icon-primary">edit</span>
            </div>
        </div>
        {/if}
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

        {#if $autoRoles == ":loading"}
        <div class="loading">
            <LoadingIndicator size="45" />
        </div>
        {:else}
        <div class="button-bar">
            <div on:click={() => addRole("Add role to auto roles.")} on:keydown class="button icon-button">
                <span class="material-icons icon-small icon-primary">add</span>
            </div>
        </div>
        {/if}
    </div>

    {#if $autoRoles != ":loading" && $autoRoles != ""}
    <div class="chips default-margin">
        {#each ($autoRoles).split(",") as role}
        <div class="chip">
            <p class="text-small">{role}</p>
            <span on:click={() => {
                let roles = $autoRoles.split(",").filter(r => r != role)
                autoRoles.set(roles.join(","))
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