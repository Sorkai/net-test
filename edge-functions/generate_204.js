// ./edge-functions/generate_204.js

export function onRequestGet() {
    return new Response(null, {
        status: 204,
        headers: {
            'Cache-Control': 'no-store',
            'Content-Length': '0',
        },
    });
}

export function onRequestHead() {
    return new Response(null, {
        status: 204,
        headers: {
            'Cache-Control': 'no-store',
            'Content-Length': '0',
        },
    });
}