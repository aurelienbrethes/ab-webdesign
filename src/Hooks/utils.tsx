export const setIndexSlider = (
    sliderArrayLength : number | undefined,
    operation: string,
    indexSelected: number
) => {
    let indexToDisplay = 0
    if (operation === "+") {
        if (sliderArrayLength && indexSelected < sliderArrayLength -1) {
            indexToDisplay = indexSelected +1;
        } else {
            indexToDisplay = 0
        }
    } else if ( operation === "-" ) {
        if (sliderArrayLength && indexSelected > 0 ) {
            indexToDisplay = indexSelected -1;
        } else if ( sliderArrayLength ) {
         indexToDisplay = sliderArrayLength -1
        }
    }

    return indexToDisplay;
};
