import React from 'react';
import { CremonaSb3BassCard, FenderFretlessBassCard, IbanezBassCard, IbanezGsrm20BassCard } from '../component-exports';
import { RogueLx205BassCard, SchecterGuitarResearchBassCard, SchecterGuitarStudioBassCard, SilverCreekBassCard } from '../component-exports'
import { SterlingStingRayBassCard, SterlingRay4BassCard, YamahaTrbx305BassCard, YamahaTrbx504BassCard } from '../component-exports';

const Basses = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">Basses</h1>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <CremonaSb3BassCard />
                    <FenderFretlessBassCard />
                    <IbanezBassCard />
                    <IbanezGsrm20BassCard />
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <RogueLx205BassCard />
                    <SchecterGuitarResearchBassCard />
                    <SchecterGuitarStudioBassCard />
                    <SilverCreekBassCard />
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <SterlingStingRayBassCard />
                    <SterlingRay4BassCard />
                    <YamahaTrbx305BassCard />
                    <YamahaTrbx504BassCard />
                </div>
            </div>
        </div>
    )
}
export default Basses 