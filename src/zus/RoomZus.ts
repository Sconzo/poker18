import create from 'zustand'

import {RoomInterface} from "../interfaces/RoomInterface";

type CurrentRoom = {
    room : RoomInterface,
    changeRoom:(session:RoomInterface) => void,
}

const useRoom = create<CurrentRoom>((set) => ({
    room:{
        roomName: "",
        roomSystem: {
            id : 0,
            name: "",
            values: [],
            coffee: false
        }
    },

    changeRoom:(roomIncome : RoomInterface)=>{
        set(state => ({room : roomIncome}))
    },
}))

export default useRoom