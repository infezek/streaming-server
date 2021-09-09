import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
    constructor(protected app: ApplicationContract) { }

    public async ready() {
        console.log("oiiii...")
        await import('../start/socket')
        if (this.app.environment === 'web') {
        }
    }
}
