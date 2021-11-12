export const formatDate = ( theDate ) => {
    const date = new Date( theDate );

    return date.toLocaleDateString();
}