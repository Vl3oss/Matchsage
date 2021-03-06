import {customerConstants} from '../constants/CustomerConstants';
const initialState = {
	services:[]
}
export function service(state=initialState,action){
	switch(action.type){
		case(customerConstants.CUSTOMER_FETCH_SERVICES):
		
			const services = action.payload.data.services;
			return {...state,services};
		case(customerConstants.CUSTOMER_SEARCH_SERVICE):
			const updatedServices = action.payload.keyword;	
			// return {...state,services:updatedServices}
			return state;
		default:
			return state;
	}
}