import { useFullSoak } from "@fullsoak/fullsoak/testing";
import { Controller, Get, ssr } from "@fullsoak/fullsoak";
import { makeHat } from "@fullsoak/fullsoak/batteries";
import { MyComponent } from "../src/components/MyComponent/index.tsx";
import { expect, test } from "bun:test";

@Controller()
class MyController {
  @Get("/")
  serve() {
    return ssr(MyComponent, { foo: "bar" }, {
      headContent: makeHat({ title: "FullSoak on Oven 🔥" }),
    });
  }
}

test("MyTsxComponent", async () => {
  const app = await useFullSoak({ controllers: [MyController] });
  const resp = await app.fetch(new Request("http://localhost/"));
  const output = await resp.text();
  expect(output).toMatchSnapshot();
});
