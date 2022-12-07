export const filterReducer = (filterState, {type, payload}) => {
    switch (type){
        case "LTH":
            return {
                ...filterState,
                sort: payload
            }
        case "HTL":
            return {
                ...filterState,
                sort: payload
            }
        
        case "PLANT_TIPE":
            return {
                ...filterState,
                plantTipe: payload.check ? [...filterState.plantTipe, payload.option] : (filterState.plantTipe.length > 0 ? filterState.plantTipe.filter(item => item !== payload.option) : [])
            }
        case "ENVIRONMENT":
            return {
                ...filterState,
                plantEnvironment: payload.check ? [...filterState.plantEnvironment, payload.option] : (filterState.plantEnvironment.length > 0 ? filterState.plantEnvironment.filter(item => item !== payload.option) : [])
            }
        case "PLANT_HEIGHT":
            return {
                ...filterState,
                plantSize: payload.check ? [...filterState.plantSize, payload.option] : (filterState.plantSize.length > 0 ? filterState.plantSize.filter(item => item !== payload.option) : [])
            }
        case "BENEFIT":
            return {
                ...filterState,
                plantBenefit: payload.check ? [...filterState.plantBenefit, payload.option] : (filterState.plantBenefit.length > 0 ? filterState.plantBenefit.filter(item => item !== payload.option) : [])
            }
        case "PRODUCT_TIPE":
            return {
                ...filterState,
                productTipe: payload.check ? [...filterState.productTipe, payload.option] : (filterState.productTipe.length > 0 ? filterState.productTipe.filter(item => item !== payload.option) : [])
            }
        case "PRICE":
            return {
                ...filterState,
                price: payload.check ? [...filterState.price, payload.option] : (filterState.price.length > 0 ? filterState.price.filter(item => item !== payload.option) : [])
            }
        case "SALE":
            return {
                ...filterState,
                sale: payload.check ? [...filterState.sale, payload.option] : (filterState.sale.length > 0 ? filterState.sale.filter(item => item !== payload.option) : [])
            }
        
        case "CLEAR":
            return {
                ...filterState,
                sort: "",
                plantTipe: [],
                plantEnvironment: [],
                plantSize: [],
                plantBenefit: [],
                productTipe: [],
                price: [],
                sale: []
            }

        default:
            return filterState

    }
}