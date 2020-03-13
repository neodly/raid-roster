import React from 'react';
import {
    Paper,
} from '@material-ui/core';
import RaidTable from './raiderTable';
import { Fetcher } from './fetchData';
import RaidInformation from './raidInformation';

export default ({ url }) => (
    <Fetcher url={url}>
        {(raid) => (
            <Paper key={url}>
                <RaidInformation raid={raid} />
                <div>
                    <RaidTable raid={raid} />
                </div>
            </Paper>
        )}
    </Fetcher>
);
