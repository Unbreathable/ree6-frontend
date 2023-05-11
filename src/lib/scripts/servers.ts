import { writable } from "svelte/store";
import { get } from "./constants";

interface Server {
    icon: string;
    name: string;
    setup: boolean;
    id: number;
}

export let serversLoading = writable(true);
export let servers: Map<string, Server> = new Map<string, Server>();

export function server(name: string): Server {
    return servers.get(name)!;
}

export async function loadServers() {
    serversLoading.set(true);

    const res = await get("/guilds/");
    const json = await res.json();

    if(json.success) {
        for(let server of json.guilds) {
            servers.set(server.id, {
                icon: server.iconUrl,
                name: server.name,
                setup: server.hasBot,
                id: server.id
            });
        }
    }

    console.log(json)

    serversLoading.set(false);

}