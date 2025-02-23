import process from "node:process";
import {
  type Context,
  Controller,
  Get,
  setupDefaultFullsoakLogger,
  ssr,
  useFullSoak,
} from "@fullsoak/fullsoak";
import { MyComponent } from "./components/MyComponent/index.tsx";
import { MyRouteAwareComponent } from "./components/MyRouteAwareComponent/index.tsx";

setupDefaultFullsoakLogger();

const GLOBAL_COMPONENTS_DIR: string = __dirname + "/components";

@Controller()
class MyController {
  @Get("/")
  renderDynamicallyImportedComponent() {
    return ssr(MyComponent, { foo: "bar" });
  }

  @Get("/app/:page*")
  renderMyRouteAwareComponent(ctx: Context) {
    return ssr(MyRouteAwareComponent, {
      foo: "Lorem Ipsum",
      path: ctx.request.url.pathname,
    });
  }
}

const port = Number(process.env["PORT"] || 0) ?? 3991;

useFullSoak({
  port,
  controllers: [MyController],
  componentsDir: GLOBAL_COMPONENTS_DIR,
});
