import mockData from './mock-data.json'
import mockProduct from './product.json'
// giả lập API vì chưa có API :D
import mockApi from '../mock-api/mock-product-api'

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
// hàm get list product cũ, a bôi đen nó đi để e so sánh nhé, hàm mới support phân trang chỉ cần thêm 2 tham số pageIndex(vị trí page đang đứng) và pageSize (số lượng sản phẩm hiển thị)
// export const getProduct = () => {
//     return {
//         type: actions.GET_PRODUCT,
//         dataOfProduct: mockProduct
//     }
// }
// ham moi ho tro phân trang, pageIndex mặc định là 1, kích thước page (pageSize) mặc định là 10
export const getProduct = (pageIndex=1,pageSize=10) => {
    return {
        type: actions.GET_PRODUCT,
        dataOfProduct: mockApi.getProducts(pageIndex,pageSize)
        // dữ liệu data trả về từ api có chút thay đổi so với file product.json, px vào thư mục mock-api/mock-product-api.json để coi nhé, nó dạng
        /* {
            data:[], // list products
            total: 100, // số lượng tất cả product mình có
            pageIndex:1 // page index
            }
        */
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