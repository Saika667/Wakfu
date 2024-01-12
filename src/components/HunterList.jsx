function HunterList({ dailyHunter, mission, setDailyHunter, type }) {
    function handleCheck(range, resourceType, item) {
        const dailyHunter = JSON.parse(localStorage.getItem('dailyHunter'));
        const mission = dailyHunter.missions.find(mission => mission.range === range);
        const resource = mission[resourceType].find(resource => resource.name === item);
        resource.checked = !resource.checked;
        localStorage.setItem('dailyHunter', JSON.stringify(dailyHunter));
        setDailyHunter(dailyHunter);
    }

    return (
        <div className="mb-4 p-1.5">
            <p className="mb-3">Progression : {dailyHunter.missions.find(dailyMission => dailyMission.range === mission.range)[type].filter(resource => resource.checked === true).length} / {mission.resources.items.length}</p>
            <div>
                { mission[type].items.map((item, index) => (
                    <div className={
                        `mb-1 w-fit cursor-pointer relative
                        ${dailyHunter.missions.find(dailyMission => dailyMission.range === mission.range)
                            [type].find(resource => resource.name === item)
                            .checked ? 'after:absolute after:top-1/2 after:left-0 after:w-100 after:h-0.5 after:bg-pink-800 after:animate-[strike_.5s_ease-in-out_forwards]' : ''
                        }`}
                        key={index}
                        onClick={() => handleCheck(mission.range, type, item)
                    }>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HunterList;