import React from 'react';

import { Behringer5ChannelCard, Drdk4PieceDrumMicKitCard, Drv200VocalMicCard, HarbingerChannelMixerCard } from '../component-exports';
import { HarbingerVariCard, KustomPaCard, LivewireCableTesterCard, MusicianGearClipCard } from '../component-exports';
import { Mxl990MicCard, ShureDynamicMicCard, SterlingMeshPopFilterCard, TascamVocalProcessorCard } from '../component-exports';

const LiveSound = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">Live Sound</h1>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <Behringer5ChannelCard />
                    <Drdk4PieceDrumMicKitCard />
                    <Drv200VocalMicCard />
                    <HarbingerChannelMixerCard />
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <HarbingerVariCard />
                    <KustomPaCard />
                    <LivewireCableTesterCard />
                    <MusicianGearClipCard />
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <Mxl990MicCard />
                    <ShureDynamicMicCard />
                    <SterlingMeshPopFilterCard />
                    <TascamVocalProcessorCard />
                </div>
            </div>

        </div>
    )
}
export default LiveSound 