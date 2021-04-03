import React from 'react';
import { DrBeatCard, DJStandCard, ElixerGuitarStringsCard, FenderGuitarStandCard } from '../component-exports';
import { FingereaseGuitarStringCard, KorgTunerCard, BraidedCableCard, DeluxeCaseCard } from '../component-exports';
import { KeyboardStandCard, RapcoMicCableCard, RoadRunnerBagCard, ClipOnTunerCard } from '../component-exports';

const Accessories = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">Accessories</h1>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <DrBeatCard />
                    <DJStandCard />
                    <ElixerGuitarStringsCard />
                    <FenderGuitarStandCard />
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <FingereaseGuitarStringCard />
                    <KorgTunerCard />
                    <BraidedCableCard />
                    <DeluxeCaseCard />
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <KeyboardStandCard />
                    <RapcoMicCableCard />
                    <RoadRunnerBagCard />
                    <ClipOnTunerCard />
                </div>
            </div>
        </div>
    )
}
export default Accessories  