export const checkImageURL = (url) => {
    if(url === null) return false;
    if (!url) return false
    else {
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp|svg)$', 'i');
        return pattern.test(url);
    }
};
