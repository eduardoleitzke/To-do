export default function textReducer(state = [], action) {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.payload]
        case "REMOVE_ITEM":
            return state.filter((item)=>item.id !== action.payload)
        case "DONED":
            return state.map((item)=>{
                if(item.id === action.payload){
                    item.done = !item.done
                }
                return item
            })

        default:
            return state
    }

}