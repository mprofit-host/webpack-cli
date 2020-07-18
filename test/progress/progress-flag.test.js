'use strict';

const { cyanBright } = require('colorette');
// eslint-disable-next-line node/no-unpublished-require
const { run } = require('../utils/test-utils');

describe('progress flag', () => {
    it('should show progress', () => {
        const { stderr, stdout } = run(__dirname, ['--progress']);
        expect(stderr).toBeFalsy();
        if (process.platform !== 'win32') {
            expect(stdout).toContain(`100% : ${cyanBright('Compilation completed')}`);
        }
        expect(stdout).toContain('100%');
    });
});
