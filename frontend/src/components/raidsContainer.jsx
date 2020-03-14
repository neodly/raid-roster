import React, { useState, useEffect, useRef } from 'react';

import {
    Select, FormControl, InputLabel, MenuItem, ThemeProvider, AppBar, Toolbar,
} from '@material-ui/core';
import RaidPanel from './raidPanel';
import Header from './header';

const RaidsPanel = ({ raids }) => {
    const url = raids;
    return (
        <div>
            {
                raids.map((url) => (
                    <div style={{ paddingTop: 15 }}>
                        <RaidPanel url={url} />
                    </div>
                ))
            }
        </div>
    );
};

export default ({ raids }) => {
    const [selectedRaids, setSeletedRaid] = useState(raids);

    return (
        <FormControl>
            <InputLabel id="raid-select-label">Raid</InputLabel>
            <Select
              labelId="raid-select-label"
              id="raid-select"
              value={selectedRaids.length > 1 ? '' : selectedRaids[0].raid}
              onChange={(event) => {
                    setSeletedRaid(raids.filter((raid) => raid.raid === event.target.value));
                }}
            >
                {raids.map((raid) => (
                    <MenuItem value={raid.raid}>
                        {raid.raid}
                    </MenuItem>
                ))}
            </Select>
            {selectedRaids.map(({ url }) => (
                <div key={url}>
                    <div style={{ paddingTop: 15 }}>
                        <RaidPanel url={url} />
                    </div>
                </div>
            ))}
        </FormControl>
    );
};
