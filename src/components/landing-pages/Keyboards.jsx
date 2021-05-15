import React from 'react';
import { KorgB2spKeyboardCard, NordStageKeyboardCard, RolandDp603KeyboardCard, SuzukiCtpKeyboardCard } from '../component-exports';
import { SuzukiMdg330KeyboardCard, WilliamsOvertureKeyboardCard, WilliamsSymphonyKeyboardCard, YamahaAriusKeyboardCard } from '../component-exports';
import { YamahaClavinovaKeyboardCard, YamahaCp73KeyboardCard, YamahaP45KeyboardCard, YamahaP45WithStandCard } from '../component-exports';

const Keyboards = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">Keyboards</h1>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <KorgB2spKeyboardCard />
                    <NordStageKeyboardCard />
                    <RolandDp603KeyboardCard />
                    <SuzukiCtpKeyboardCard />
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <SuzukiMdg330KeyboardCard />
                    <WilliamsOvertureKeyboardCard />
                    <WilliamsSymphonyKeyboardCard />
                    <YamahaAriusKeyboardCard />
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <YamahaClavinovaKeyboardCard />
                    <YamahaCp73KeyboardCard />
                    <YamahaP45KeyboardCard />
                    <YamahaP45WithStandCard />
                </div>
            </div>
        </div>
    )
}
export default Keyboards