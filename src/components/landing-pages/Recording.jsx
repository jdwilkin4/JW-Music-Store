import React from 'react';

import { FocusriteScarlettCard, FocusriteScarlettPackCard, Line6PodStudioCard, PresonusAudioBox96Card } from '../component-exports';
import { RodeCompletePodcasterCard, RodeStudioCard, SeElectronicsX1sStudioCard, SeElectronicsX1sVocalCard } from '../component-exports';
import { IconQconExG2Card, ShureChooseMicCard, UniversalAudioApolloCard, ZoomHandyVideoRecorderCard } from '../component-exports';

const Recording = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">Recording Gear</h1>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <FocusriteScarlettCard />
                    <FocusriteScarlettPackCard />
                    <Line6PodStudioCard />
                    <PresonusAudioBox96Card />
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <RodeCompletePodcasterCard />
                    <RodeStudioCard />
                    <SeElectronicsX1sStudioCard />
                    <SeElectronicsX1sVocalCard />
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <IconQconExG2Card />
                    <ShureChooseMicCard />
                    <UniversalAudioApolloCard />
                    <ZoomHandyVideoRecorderCard />
                </div>
            </div>
        </div>
    )
}
export default Recording 