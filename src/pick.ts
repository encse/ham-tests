
export function pickInt(max: number): number {
    return Math.floor(Math.random() * max);
}

export function pick<T>(options: T[]): T {
    return options[Math.floor(Math.random() * options.length)];
}

export function pickN<T>(options: T[], n: number): T[] {
    let res = [];
    while (res.length < n && options.length > 0) {
        const picked = pick(options);
        res.push(picked);
        options = options.filter(x => x != picked);
    }
    return res;
}