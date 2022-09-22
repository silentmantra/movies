
export async function api(path) {
    const response = await fetch('/' + path + '.json');
    return await response.json();
}