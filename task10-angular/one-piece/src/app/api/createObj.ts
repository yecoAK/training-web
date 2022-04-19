export function getElementPage(elementJSON: Array<any>, config: any) {
    let elements: Array<any> = [];
    elementJSON.forEach(value => {

        var copy = Object.assign({class: ''}, value);

        if (config.countElementsWeb <= 0) {
            return;
        }
        config.countElementsWeb--;

        //responsive class
        if (config.countElementsMovil <= 0) {
            copy.class = config.classMobile;
        } else {
            copy.class = config.classDesktop;
        }

        config.countElementsMovil--;
        elements.push(copy);
    })

    return elements;
}