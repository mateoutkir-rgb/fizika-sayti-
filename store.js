const results = [];

export function addResult(result) {
    results.push(result);
}

export function getResults() {
    return results.slice();
}
