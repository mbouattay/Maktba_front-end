import {proxy, useSnapshot} from 'valtio'
const globalState=proxy({
    loding:false
})

function useAtoms(){
    return[
        globalState,
        useSnapshot(globalState)
    ]
}

export{useAtoms}