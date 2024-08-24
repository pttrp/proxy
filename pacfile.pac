function FindProxyForURL(url, host) {
    // Define the domains that should use the proxy
    if (shExpMatch(host, "*.example.com") ||
        shExpMatch(host, "specificdomain.com")) {
        return "PROXY your.proxy.server:port";
    }

    // Bypass the proxy for all other domains
    return "DIRECT";
}

