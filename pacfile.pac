function FindProxyForURL(url, host) {
    // Define the domains that should use the proxy
    if (shExpMatch(host, "youtube.com") ||
        shExpMatch(host, "*.medium.com")) {
        return "PROXY webhop.ddns.net:4443";
    }

    // Bypass the proxy for all other domains
    return "DIRECT";
}

