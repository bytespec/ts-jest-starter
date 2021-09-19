import td, { when } from "testdouble";
import { GreeterThing, IMessageGetter } from "../src/thing";


describe("a thing", () => {
    let subject: GreeterThing;
    let messageGetter: IMessageGetter;

    beforeEach(() => {
        messageGetter = td.object<IMessageGetter>();
        subject = new GreeterThing(messageGetter);
    });

    it("returns a message", () => {
        let msg = "‍🐱‍👤";
        when(messageGetter.getMessage()).thenReturn(msg);

        let result = subject.sayHello();

        expect(result).toBe(msg);
    });

    it("returns a message (bad)", () => {
        let msg = "😀";
        when(messageGetter.getMessage()).thenReturn("🤔");

        let result = subject.sayHello();

        expect(result).toBe(msg);
    });
});