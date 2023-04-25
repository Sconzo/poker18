import create from 'zustand'

import {RoomInterface} from "../interfaces/RoomInterface";

type CurrentRoom = {
    room : RoomInterface,
    changeSession:(session:RoomInterface) => void,
}

const useRoom = create<CurrentRoom>((set) => ({
    room:{
        name: "",
        system: "",
    },

    changeSession:(roomIncome : RoomInterface)=>{
        set(state => ({room : roomIncome}))
    },
}))

export default useRoom