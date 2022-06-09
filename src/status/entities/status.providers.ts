import { Status } from "./status.entity";

export const statusesProviders = [
  {
    provide: "STATUSES_REPOSITORY",
    useValue: Status
  }
];