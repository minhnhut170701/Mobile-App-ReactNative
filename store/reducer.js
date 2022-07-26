import PRODUCTS from "../data/item"


const initialState = {
    products: PRODUCTS,
    favItem: [],
    cartItem: [],
    fillItem: PRODUCTS,
   
}
const reducer = (state = initialState, action) => {
    // thêm vào mục yêu thích
    // Lấy tên action và thao tác
    if(action.type === 'THEM_FAV'){
       //tìm vị trí sản phẩm trong Favitem
       const index = state.favItem.findIndex(product => product.id === action.productId)

       //nếu >= 0 có nghĩa product có trong trang
       if(index >= 0){
           // tạo bản sao cho Favitem
           // favitem là một mảng nên dấu ngoặc vuông
           const copy = [...state.favItem]
           //xóa sản phẩm 
           copy.splice(index, 1)
           //trả về trang được cập nhật, dấu ngoặc nhọn do có state là 1 object
           return {...state, favItem: copy }
       }
       else{
            // tìm sản phẩm có id giống với id được action truyền vào
            const product = state.products.find(product => product.id === action.productId)

            let copy = [...state.favItem]
            copy = copy.concat(product)
            

            //Cập nhật và trả về trang fav
            return {...state, favItem: copy}
        }
    }
    
    if(action.type == 'LOC_SAN_PHAM'){
       const fillter = action.fillters
       const productFill = state.products.filter(product => {
           if(product.isNew != fillter.isItemNew){
               return false
           }
           if(product.isSale != fillter.isItemSale){
               return false
           }
           else{
               return true
           }
       })

       return {...state, fillItem: productFill}
    }

    if(action.type === 'THEM_CART'){
        //tìm vị trí sản phẩm trong cartItem
        const index = state.cartItem.findIndex(product => product.id === action.productId)
        //nếu >= 0 có nghĩa product có trong trang
        if(index >= 0){
            // tạo bản sao cho Favitem
            // cartItem là một mảng nên dấu ngoặc vuông
            const copy = [...state.cartItem]
            //xóa sản phẩm 
            copy.splice(index, 1)
            //trả về trang được cập nhật, dấu ngoặc nhọn do có state là 1 object
            return {...state, cartItem: copy }
        }
        else{
             // tìm sản phẩm có id giống với id được action truyền vào
             const product = state.products.find(product => product.id === action.productId)
 
             let copy = [...state.cartItem]
             copy = copy.concat(product)
             
 
             //Cập nhật và trả về trang fav
             return {...state, cartItem: copy}
         }
    }


  return  state;
}

export default reducer