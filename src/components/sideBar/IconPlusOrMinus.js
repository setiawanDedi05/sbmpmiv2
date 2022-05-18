import { useAtom } from "jotai"
import * as FaIcons  from "react-icons/fa"
import { selectedAtom, toggleCollapsed, toggleOpen } from "../../pages/_app"

export default function PlusOrMinus({parent}){
    const [open] = useAtom(toggleOpen)
    const [selected] =useAtom(selectedAtom)
    const [collapsed] = useAtom(toggleCollapsed)
    if(collapsed){
        if(open & parent === selected) return <FaIcons.FaMinus size={10} style={{marginRight: '0px'}} />
        return <FaIcons.FaPlus size={10} style={{marginRight: '0px'}} />
    }
    return <></>
}   