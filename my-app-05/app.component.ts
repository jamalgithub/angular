import {Component} from '@angular/core';
import {ServerObject} from './shared/server-object';
import {ElementObject} from './shared/element-object';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    serverElements: ElementObject[] = [
        // {
        //     type: 'server',
        //     name: 'TestServer',
        //     content: 'Just a test!'
        // }
        new ElementObject('server', 'TestServer', 'Just a test!')
    ];

    onRemoveServer(id: number) {
        const position = id;
        // this.servers.splice(position, 1);
    }

    onServerAdded(serverData: ServerObject) {
        this.serverElements.push(
            // {
            //     type: 'server',
            //     name: serverData.serverName,
            //     content: serverData.serverContent
            // }
            new ElementObject('server', serverData.serverName, serverData.serverContent)
        );
    }

    onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
        this.serverElements.push(
            // {
            //     type: 'blueprint',
            //     name: blueprintData.serverName,
            //     content: blueprintData.serverContent
            // }
            new ElementObject('blueprint', blueprintData.serverName, blueprintData.serverContent)
        );
    }

    onChangeFirst() {
        this.serverElements[0].name = 'Changed!';
    }

    onDestroyFirst() {
        this.serverElements.splice(0, 1);
    }
}
