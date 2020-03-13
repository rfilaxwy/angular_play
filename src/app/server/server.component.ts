import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.scss"]
})
export class ServerComponent implements OnInit {
  serverId = 1;
  serverStatus = "Offline";

  constructor() {}

  ngOnInit(): void {}
}
