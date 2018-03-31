export const checkBox = (currentValue) => {
    if(!currentValue)
        currentValue = true;
    else
        currentValue = false;
    return{
        type:'CHECKBOX_CLICKED',
        payload:currentValue
    }
};

export const permissionFieldsChanged = (value, type) => {
    return{
        type,
        payload:value
    }
};