import { updateContent } from './updateContent';
import { MessageType, CommandName } from './../../../../types';

describe('updateContent', () => {
    it('runs for single element', () => {
        const state = {

        };
        const message = {
            content: 'blah',
            source: CommandName.anyCommand,
            type: MessageType.OUT
        };

        expect(updateContent(state, message)).toEqual({
            [CommandName.anyCommand]: [message]
        });
    });

    it('runs for multiple elements', () => {
        const message_1 = {
            content: 'blah',
            source: CommandName.anyCommand,
            type: MessageType.OUT
        };

        const state = {
            [CommandName.anyCommand]: [message_1]
        };

        const message_2 = {
            content: 'blah2',
            source: CommandName.anyCommand,
            type: MessageType.END
        };

        expect(updateContent(state, message_2)).toEqual(
            {
                [CommandName.anyCommand]: [message_1, message_2]
            }
        );
    });
});
