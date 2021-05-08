import React from 'react';
import { Route } from 'react-router-dom';
import { AngelicoGuitar, FenderFA135CEPage, StratocasterHSSGuitarPage, StratocasterLimitedGuitarPage } from '../components/component-exports';
import { FenderTelecaster, GlAsatGuitarPage, GuildOM240CE, RogueRd80GuitarPage } from '../components/component-exports';

const GuitarProducts = () => {
    return (
        <div>
            <Route path="/angelico" exact component={() => <AngelicoGuitar />} />
            <Route path="/fender135" exact component={() => <FenderFA135CEPage />} />
            <Route path="/HSSguitar" exact component={() => <StratocasterHSSGuitarPage />} />
            <Route path="/StratocasterLimited" exact component={() => <StratocasterLimitedGuitarPage />} />
            <Route path="/FenderTelecaster" exact component={() => <FenderTelecaster />} />
            <Route path="/glasatguitar" exact component={() => <GlAsatGuitarPage />} />
            <Route path="/GuildOM240CE" exact component={() => <GuildOM240CE />} />
            <Route path="/roguerd80" exact component={() => <RogueRd80GuitarPage />} />
        </div>
    )
}

export default GuitarProducts;