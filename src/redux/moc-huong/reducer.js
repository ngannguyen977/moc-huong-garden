import mockData from './mock-data.json'
import mockProduct from './product.json'

//______________________ACTION NAME____________________________
const actions = {
    GET_DETAIL: 'GET_DETAIL',
    GET_DATA: 'LAY_DU_LIEU',
    // define your action name here
    GET_PRODUCT: 'GET_PRODUCT'
}

//______________________ACTION CREATOR____________________________
export const getPageDetail = () => {
    return {
        type: actions.GET_DETAIL,
        data: mockData
    }
}
export const getProduct = () => {
    return {
        type: actions.GET_PRODUCT,
        dataOfProduct: mockProduct
    }
}

export const getData = () => {
    return {
        type: 'GET_DATA',
        dulieu: mockData
    }
}

//______________________INITIAL STATE____________________________
const initialState = {
        dulieu: {},
        products: []
    }
    //______________________REDUCER____________________________
    // 
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_DETAIL:
            return {...state, dataFromStore: action.data }
        case 'GET_DATA':
            return {...state, dulieu: action.dulieu }
            // update new state here
        case actions.GET_PRODUCT:
            console.log('store data', state, action)
            return {...state, dataProducts: action.dataOfProduct }
        default:
            return state
    }
}

// hien thi data tren view => object {}
// get object { } from STORE