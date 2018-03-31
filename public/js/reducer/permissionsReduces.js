export default function permissionFieldsChanged(state={checkBoxClicked:false, page_name:'', page_id:'', page_url:''}, actions){
    switch (actions.type)
    {
        case 'CHECKBOX_CLICKED':
            return Object.assign({}, state, {
                checkBoxClicked: actions.payload
            })
        case 'NAME_CHANGED':
            return Object.assign({}, state, {
                page_name: actions.payload
            })
        case 'PAGE_ID_CHANGED':
            return Object.assign({}, state, {
                page_id: actions.payload
            })
        case 'PAGE_URL_CHANGED':
            return Object.assign({}, state, {
                page_url: actions.payload
            })
        default:
            return state
    }
};