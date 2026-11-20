(() => {
    "use strict";

    const STORAGE_KEY = "what-something-visited-links-v1";
    const visited = new Set();

    function linkKey(rawHref) {
        try {
            const url = new URL(rawHref, window.location.href);
            if (url.protocol !== "http:" && url.protocol !== "https:") return null;
            let pathname = url.pathname.replace(/\/+$/, "") || "/";
            // Treat / and /index.html as the same homepage on GitHub Pages.
            if (pathname.endsWith("/index.html")) pathname = pathname.slice(0, -"index.html".length) || "/";
            return url.origin + pathname + url.search + url.hash;
        } catch (_) {
            return null;
        }
    }

    function loadVisited() {
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
            if (Array.isArray(saved)) saved.forEach((item) => visited.add(item));
        } catch (_) {
            // If storage is unavailable, normal browser :visited styling remains available.
        }
    }

    function saveVisited() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(visited).slice(-300)));
        } catch (_) {
            // Do not block navigation if storage is unavailable or full.
        }
    }

    function applyVisitedClasses() {
        document.querySelectorAll("a[href]").forEach((link) => {
            const key = linkKey(link.href);
            if (key && visited.has(key)) link.classList.add("was-visited");
        });
    }

    loadVisited();

    // A direct visit also counts: after leaving this page, its links stay blue.
    const currentPage = new URL(window.location.href);
    const currentWithoutHash = new URL(currentPage.href);
    currentWithoutHash.hash = "";
    const currentBaseKey = linkKey(currentWithoutHash.href);
    if (currentBaseKey) visited.add(currentBaseKey);
    if (currentPage.hash) {
        const currentFullKey = linkKey(currentPage.href);
        if (currentFullKey) visited.add(currentFullKey);
    }
    saveVisited();

    applyVisitedClasses();

    document.addEventListener("click", (event) => {
        const link = event.target.closest && event.target.closest("a[href]");
        if (!link) return;
        const key = linkKey(link.href);
        if (!key) return;
        visited.add(key);
        link.classList.add("was-visited");
        saveVisited();
    }, true);

    window.addEventListener("pageshow", applyVisitedClasses);
})();
