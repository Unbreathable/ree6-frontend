import { writable, type Writable } from "svelte/store";

let settings: Map<string, Writable<string>> = new Map<string, Writable<string>>();

export function setting(name: string): Writable<string> {

    if (!settings.has(name)) {
        settings.set(name, writable(":loading"));
    }

    return settings.get(name)!;
}

export function loadSettings() {
    
}