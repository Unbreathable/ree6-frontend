<script lang="ts">
    import { page } from "$app/stores";
    import ChannelPicker from "$lib/components/channelPicker.svelte";
    import LoadingIndicator from "$lib/components/loadingIndicator.svelte";
    import RolePicker from "$lib/components/rolePicker.svelte";
    import ChannelSelector from "$lib/components/settings/channelSelector.svelte";
    import MassBoolean from "$lib/components/settings/massBoolean.svelte";
    import { currentServer } from "$lib/scripts/servers";
    import { setting } from "$lib/scripts/settings";
    import type { Writable } from "svelte/store";

    // Channels
    let channelPicker = false;
    let pickerMessage = ""
    let currentSetting: Writable<string>;

    let loggingChannel = setting("loggingChannel")
    let loggingChannelStore = loggingChannel.value;
    let welcomeChannel = setting("welcomeChannel")

    // Roles
    let rolePicker = false;
    let rolePickerMessage = ""

    let autoRoles = "Guest"

</script>

{#if rolePicker}
<RolePicker message={rolePickerMessage} callback={(name) => {
    rolePicker = false
    if(name == "") return;
    //if($autoRoles.includes(name)) return;

    // Add new role
    //if($autoRoles == "") autoRoles.set(name)
    //else autoRoles.set($autoRoles + "," + name)
}} current="" />
{/if}

<h1 class="headline-top">Logging</h1>

<ChannelSelector icon="tag" title="Logging channel" description="Select the channel for all log messages." endpoint={"/guilds/" + $page.params.serverId + "/log"} />

<MassBoolean title="Logging features" description="Configure all events that should be logged." prefix="logging_" icon="dynamic_feed" />

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

        <div class="loading">
            <LoadingIndicator size="45" />
        </div>
        <div class="button-bar">
            <div on:keydown class="button icon-button">
                <span class="material-icons icon-small icon-primary">add</span>
            </div>
        </div>
    </div>

    <div class="chips default-margin">
        {#each (autoRoles).split(",") as role}
        <div class="chip">
            <p class="text-small">{role}</p>
            <span on:click={() => {
                let roles = autoRoles.split(",").filter(r => r != role)
                autoRoles = roles.join(",")
            }} on:keydown class="material-icons icon-primary clickable chip-button">close</span>
        </div>
        {/each}
    </div>
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