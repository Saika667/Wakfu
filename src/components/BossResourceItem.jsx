import { useTheme } from "styled-components";
import { selectMissionByRange, setActiveBossResource } from "../feature/missions.slice";
import { useDispatch, useSelector } from "react-redux";

function BossResourceItem({ range, item }) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const isFocused = useSelector(selectMissionByRange(range))
        .activeBossResource === item.name;


    return (
        <div className={`m-1 ${isFocused ? theme.focusColor : theme.foldingTitleContainer} p-1 rounded-sm border-[1px] cursor-pointer ${theme.borderColor}`}
            onClick={() => dispatch(setActiveBossResource({ range, item: item.name}))}
        >
            <img src={item.img} alt={item.name}/>
        </div>
    )
}

export default BossResourceItem;