export const getImageUrl = (path) =>{
    console.log('Received path:', path);
    return new URL(`./assets/${path}`, import.meta.url).href;
};