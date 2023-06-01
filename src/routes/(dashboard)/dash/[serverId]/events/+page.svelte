<script lang="ts">
    import { page } from "$app/stores";
    import ChannelPicker from "$lib/components/channelPicker.svelte";
    import LoadingIndicator from "$lib/components/loadingIndicator.svelte";
    import RolePicker from "$lib/components/rolePicker.svelte";
    import ChannelSelector from "$lib/components/settings/channelSelector.svelte";
    import MassBoolean from "$lib/components/settings/massBoolean.svelte";
    import MassRoleSelector from "$lib/components/settings/massRoleSelector.svelte";
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

<h1 class="headline">Logging</h1>

<ChannelSelector icon="tag" title="Logging channel" description="Select the channel for all log messages." endpoint={"/guilds/" + $page.params.serverId + "/log"} />

<MassBoolean title="Logging features" description="Configure all events that should be logged." prefix="logging_" icon="dynamic_feed" />

<h1 class="headline">Join settings</h1>

<MassRoleSelector title="Automatic roles" description="Configure all roles that should be given to users when joining the guild." icon="military_tech"
    endpoint={"/guilds/" + $page.params.serverId + "/autorole"}  />

<div class="default-margin"></div>

<ChannelSelector icon="rocket_launch" title="Welcome channel" description="Select the channel for welcoming people." endpoint={"/guilds/" + $page.params.serverId + "/welcome"} />


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