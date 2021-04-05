import React from 'react';
import { DAngelicoCard, FenderFa135Card, StratocasterHSSCard, StratocasterLimitedCard } from '../component-exports';
import { TelecasterCard, GLLimitedCard, GuildOM240CECard, RogueRd80Card } from '../component-exports';
import { RogueRocketeerCard, SquierAffinityCard, SquierBulletCard, SquierBulletTelecasterCard } from '../component-exports';
const Guitars = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">Guitars</h1>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <DAngelicoCard />
                    <FenderFa135Card />
                    <StratocasterHSSCard />
                    <StratocasterLimitedCard />
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <TelecasterCard />
                    <GLLimitedCard />
                    <GuildOM240CECard />
                    <RogueRd80Card />
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <RogueRocketeerCard />
                    <SquierAffinityCard />
                    <SquierBulletCard />
                    <SquierBulletTelecasterCard />
                </div>
            </div>
        </div>
    )
}
export default Guitars 