import { View } from "./view.entity";

export const viewsProviders = [
  {
    provide: "VIEWS_REPOSITORY",
    useValue: View
  }
];