export const BASE_PATH = "http://localhost:8888"

export function get(path: string) {

    return fetch(BASE_PATH + path, {
        method: "GET",
        headers: {
            'X-Session-Authenticator': localStorage.getItem("token")!
        },
    })
}

export function post(path: string, body: string) {

    return fetch(BASE_PATH + path, {
        method: "POST",
        body: body,
        headers: {
            'X-Session-Authenticator': localStorage.getItem("token")!
        },
    })
}