// src/redux/reducers/leads.js
const initialState = {
    leads: [],
    lead: {}
}
export default (state=initialState, action) => {
    switch (action.type) {
        case 'LOAD_LEADS' :
        return {
            ...state,
            leads: action.leads
        }
        case 'VIEW_LEAD':
        return {
            ...state,
            lead: action.lead
        }
        case 'CLAP_LEAD':
        let lead = Object.assign({}, state.lead)
        lead.claps++
        console.log(lead)
        return {
            ...state,
            lead: lead
        }
        default:
            return state
    }
}