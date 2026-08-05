(() => {
    if (typeof GM_info != 'object' || GM_info.scriptHandler != 'Tampermonkey' || GM_info.version != '4.14') return;

    const u_getValue = typeof GM_getValue == 'function' ? GM_getValue : undefined;
    const d_getValue = typeof GM == 'object' ? GM.getValue : undefined;

    if (u_getValue) {
        GM_getValue = this.GM_getValue = (...args) => {
            const v = u_getValue(...args);
            return JSON.parse(JSON.stringify(v));
        }
    }

    if (d_getValue) {
        const opd = Object.getOwnPropertyDescriptors(GM);
        this.GM = GM = {};

        Object.keys(opd).forEach(k => {
            if (k == 'getValue') {
                GM.getValue = (...args) => {
                    return d_getValue(...args).then(v => JSON.parse(JSON.stringify(v)));
                }
            } else {
                Object.defineProperty(GM, k, opd[k]);
            }
        });
    }
})();