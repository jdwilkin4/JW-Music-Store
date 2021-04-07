import React from 'react';
import { AmpegSVT4Card, DigitechTrioCard, FenderRUMBLECard, GatorGPTPWRCard } from '../component-exports';
import { HeadRushPedalboardCard, Line6HelixCard, LRBaggsPreampCard, LRBaggsVenueCard } from '../component-exports';
import { MusiciansGearPedalCard, PedaltrainNanoPedalCard, RogueG10AmpCard, TCElectronicLoopCard } from '../component-exports';

const Amps = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">Amps &amp; Effects</h1>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <AmpegSVT4Card />
                    <DigitechTrioCard />
                    <FenderRUMBLECard />
                    <GatorGPTPWRCard />
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <HeadRushPedalboardCard />
                    <Line6HelixCard />
                    <LRBaggsPreampCard />
                    <LRBaggsVenueCard />
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <MusiciansGearPedalCard />
                    <PedaltrainNanoPedalCard />
                    <RogueG10AmpCard />
                    <TCElectronicLoopCard />
                </div>
            </div>
        </div>
    )
}
export default Amps 