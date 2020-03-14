import React, { useState, useEffect } from 'react';

import {
    Select, FormControl, InputLabel, MenuItem,
} from '@material-ui/core';

export default ({ raids }) => {
    const [raid, setRaid] = React.useState('');

    const handleChange = (event) => {
        setRaid(event.target.value);
    };

    return (
        <FormControl>
            <InputLabel id="demo-simple-select-label">Raid</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={raid}
              onChange={handleChange}
            >
                {raids.map((raid) => (
                    <MenuItem value={raid.url}>
                        {raid.raid}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
