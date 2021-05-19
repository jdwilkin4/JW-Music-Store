import React from 'react';

import { ArtDjPreampCard, ArtUsbPhonoCard, BbeFjb200XCard, DenonDjSc5000Card } from '../component-exports';
import { DenonDjX1800Card, GeminiCdmp1500PlayerCard, NumarkNv2DjCard, NumarkPartyControllerCard } from '../component-exports';
import { NumarkScratchDjMixerCard, Pioneer4ChannelMixerCard, PioneerPlx1000Card, RolandDj202SeratoControllerCard } from '../component-exports';

const DJ = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">DJ Gear</h1>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <ArtDjPreampCard />
                    <ArtUsbPhonoCard />
                    <BbeFjb200XCard />
                    <DenonDjSc5000Card />
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <DenonDjX1800Card />
                    <GeminiCdmp1500PlayerCard />
                    <NumarkNv2DjCard />
                    <NumarkPartyControllerCard />
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <NumarkScratchDjMixerCard />
                    <Pioneer4ChannelMixerCard />
                    <PioneerPlx1000Card />
                    <RolandDj202SeratoControllerCard />
                </div>
            </div>

        </div>
    )
}
export default DJ