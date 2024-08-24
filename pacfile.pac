function FindProxyForURL(url, host) {
    // Define the domains that should use the proxy
    if (
      dnsDomainIs(host, ".youtube.com") ||
      dnsDomainIs(host, ".ytimg.com") ||
      dnsDomainIs(host, ".ggpht.com") ||
      dnsDomainIs(host, ".googlevideo.com")
      dnsDomainIs(host, ".medium.com")) {
      return "PROXY https://webhop.ddns.net:4443";
    }

    // Bypass the proxy for all other domains
    return "DIRECT";
}

