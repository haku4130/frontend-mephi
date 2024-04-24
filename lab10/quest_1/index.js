const app = new PIXI.Application();

await app.init({ background: '#1099bb', resizeTo: window });

document.body.appendChild(app.view);

const rectangle = new PIXI.Graphics()
  .beginFill(0x406666)
  .drawRect(0, 0, 100, 100)
  .endFill();
rectangle.pivot.set(50, 50);
rectangle.x = app.screen.width / 2;
rectangle.y = app.screen.height / 2;

app.stage.addChild(rectangle);

app.ticker.add((time) => {
  rectangle.rotation += 0.05 * time.deltaTime;
});
