import { Component } from '@angular/core';

import { Devices } from '@spreewunder/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public mockDevice1 = new Devices.MockCamMicSetup(
    { video: true, audio: false, deviceID: null },
  ).getMedia();

}
