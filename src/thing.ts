export interface IMessageGetter {
    getMessage(): string;
}

export class GreeterThing {
    private messageGetter: IMessageGetter;
    constructor(messageGetter: IMessageGetter) {
        this.messageGetter = messageGetter;
    }

    sayHello(): string {
        return this.messageGetter.getMessage();
    }
}
