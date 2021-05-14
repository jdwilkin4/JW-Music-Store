import React from 'react';

import { AlesisCompactKitDrumCard, AlesisCrimsonDrumCard, BossDr01SDrumCard, DwPerformanceDrumCard } from '../component-exports';
import { KatPercussionDrumCard, MusicianGearDrumStickCard, PorkPieSnareCard, Rogue5PieceDrumCard } from '../component-exports';
import { RolandKd120DrumCard, SimmonsSd600DrumCard, TrapsDrumCard, YamahaStageDrumCard } from "../component-exports";

const Drums = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">Drums</h1>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <AlesisCompactKitDrumCard />
                    <AlesisCrimsonDrumCard />
                    <BossDr01SDrumCard />
                    <DwPerformanceDrumCard />
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <KatPercussionDrumCard />
                    <MusicianGearDrumStickCard />
                    <PorkPieSnareCard />
                    <Rogue5PieceDrumCard />
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <RolandKd120DrumCard />
                    <SimmonsSd600DrumCard />
                    <TrapsDrumCard />
                    <YamahaStageDrumCard />
                </div>
            </div>
        </div>
    )
}
export default Drums 