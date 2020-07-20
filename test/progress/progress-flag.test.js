'use strict';

// eslint-disable-next-line node/no-unpublished-require
const { run } = require('../utils/test-utils');

describe('progress flag', () => {
    it('should show progress', () => {
        const { stderr, stdout } = run(__dirname, ['--progress']);

        //for windows CI
        if (process.platform !== 'win32') {
            expect(stdout).toContain('100% : Compilation completed');
        } else {
            expect(stdout).toContain('100%');
        }
        expect(stderr).toBeFalsy();
    });
});
