import { handler } from "../src";

describe('My First CDK App Tests', () => {

    it('returns name and test', async () => {
        const output = await handler({ name: 'Victor' });
        expect(output).toStrictEqual('Good Job Victor!')
    })

    it('returns no name and test', async () => {
        const output = await handler({ name: '' });
        expect(output).toStrictEqual('Good Job')
    })
});