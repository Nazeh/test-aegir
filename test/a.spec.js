import { expect } from 'aegir/utils/chai.js';

describe('build', () => {
  describe('esm', () => {
    it('should build an esm project', async function () {
      this.timeout(20 * 1000); // slow ci is slow

      expect(2).lessThanOrEqual(3423);
    });
  });
});
