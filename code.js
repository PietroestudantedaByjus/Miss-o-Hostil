var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["cb61fa70-d1b5-4e8c-bc25-0d2aed2c807f","53b60dcf-8f3a-4217-a65d-938b3140b042","dd3ba5b7-c6b4-47dc-9473-4d803aa219c8","b348dd65-87df-49c0-8b55-7a5ea816b1b1","2809d717-05be-460d-bc0c-9ee943763efe","da54613a-9cfa-43fe-b3ab-8b3ace205a01","cb62d44a-47fc-4af8-84a6-b6337f7dd926","2ad30e8d-1d06-4865-8f42-771d10ad72ff","45e57f1a-8e70-44ae-928e-8fe27e8f618c","0a528fc8-355e-435f-b794-2522c3820b7d","b09b3878-d68e-4e6a-92a3-fcc46a1f3c90","71d10e89-5127-402f-b5fd-1d11dfb66c3f","26d7de77-61b4-457d-bab2-c3c8d3713aa0","c2233ae1-9a5e-4b10-bd17-cbb1f83f4f09","923385cc-c358-452b-84e2-0fd179dba355","74e2bf2f-c025-4f04-8ed3-9fe4a35300f4","d981371f-a2f3-4d12-ba83-576946aff433","b1b6e90c-56fc-4314-aab7-cbbe5e57ec80","67074329-ff8d-434b-93dd-ddfd8385dd2e","d252f6c8-76c0-4945-a3f4-f491a937b7a8","76af2969-9a3c-496a-b6c6-070505cf66d7","2efc6c82-ad04-40cf-8e20-2a171cfec4ee","16bc1527-0ec1-45aa-8572-8b495508a483","c415b527-08ec-48af-9bc0-cd4198ef60b0","80cbace2-c9b0-4b5c-abf9-1a864aa81471"],"propsByKey":{"cb61fa70-d1b5-4e8c-bc25-0d2aed2c807f":{"name":"background_landscape02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Iniwjg2LkdYOKciItYOH.FbJcQCgPi42/category_backgrounds/background_landscape02.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"Iniwjg2LkdYOKciItYOH.FbJcQCgPi42","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Iniwjg2LkdYOKciItYOH.FbJcQCgPi42/category_backgrounds/background_landscape02.png"},"53b60dcf-8f3a-4217-a65d-938b3140b042":{"name":"hammer_1","sourceUrl":"assets/api/v1/animation-library/gamelab/DjlavQQXkWpC6PJbUgACUcaFTCgz7eYH/category_video_games/hammer.png","frameSize":{"x":340,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"DjlavQQXkWpC6PJbUgACUcaFTCgz7eYH","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":340,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/DjlavQQXkWpC6PJbUgACUcaFTCgz7eYH/category_video_games/hammer.png"},"dd3ba5b7-c6b4-47dc-9473-4d803aa219c8":{"name":"gameplay_purplediamond_1","sourceUrl":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png","frameSize":{"x":400,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png"},"b348dd65-87df-49c0-8b55-7a5ea816b1b1":{"name":"retroship_07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/KpCgRTKx03gokZbOx3UQ94LKooyuP6eo/category_retro/retroship_07.png","frameSize":{"x":385,"y":283},"frameCount":1,"looping":true,"frameDelay":2,"version":"KpCgRTKx03gokZbOx3UQ94LKooyuP6eo","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":385,"y":283},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KpCgRTKx03gokZbOx3UQ94LKooyuP6eo/category_retro/retroship_07.png"},"2809d717-05be-460d-bc0c-9ee943763efe":{"name":"retroship_08_1","sourceUrl":"assets/api/v1/animation-library/gamelab/g5oABvfMdI51LfKaIk8Ody01cBqBF_Gd/category_retro/retroship_08.png","frameSize":{"x":385,"y":283},"frameCount":1,"looping":true,"frameDelay":2,"version":"g5oABvfMdI51LfKaIk8Ody01cBqBF_Gd","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":385,"y":283},"rootRelativePath":"assets/api/v1/animation-library/gamelab/g5oABvfMdI51LfKaIk8Ody01cBqBF_Gd/category_retro/retroship_08.png"},"da54613a-9cfa-43fe-b3ab-8b3ace205a01":{"name":"retroship_09_1","sourceUrl":"assets/api/v1/animation-library/gamelab/xeIPZ6.OZe7MJt6hQhqB7MI2ErpJyNY2/category_retro/retroship_09.png","frameSize":{"x":385,"y":283},"frameCount":1,"looping":true,"frameDelay":2,"version":"xeIPZ6.OZe7MJt6hQhqB7MI2ErpJyNY2","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":385,"y":283},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xeIPZ6.OZe7MJt6hQhqB7MI2ErpJyNY2/category_retro/retroship_09.png"},"cb62d44a-47fc-4af8-84a6-b6337f7dd926":{"name":"retroship_01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/7pS_wUgBGl7iDyydk99x7AHoAmXYQGOI/category_retro/retroship_01.png","frameSize":{"x":357,"y":386},"frameCount":1,"looping":true,"frameDelay":2,"version":"7pS_wUgBGl7iDyydk99x7AHoAmXYQGOI","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":357,"y":386},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7pS_wUgBGl7iDyydk99x7AHoAmXYQGOI/category_retro/retroship_01.png"},"2ad30e8d-1d06-4865-8f42-771d10ad72ff":{"name":"retroship_04_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ZyWPCgDe1ypOU5AnMjpHPHQ0fZ497FeS/category_retro/retroship_04.png","frameSize":{"x":277,"y":387},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZyWPCgDe1ypOU5AnMjpHPHQ0fZ497FeS","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":277,"y":387},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZyWPCgDe1ypOU5AnMjpHPHQ0fZ497FeS/category_retro/retroship_04.png"},"45e57f1a-8e70-44ae-928e-8fe27e8f618c":{"name":"retroship_21_1","sourceUrl":"assets/api/v1/animation-library/gamelab/1V75Vfoe.RrGZRMPR7RJKGTzrbR4gG_4/category_retro/retroship_21.png","frameSize":{"x":283,"y":308},"frameCount":1,"looping":true,"frameDelay":2,"version":"1V75Vfoe.RrGZRMPR7RJKGTzrbR4gG_4","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":283,"y":308},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1V75Vfoe.RrGZRMPR7RJKGTzrbR4gG_4/category_retro/retroship_21.png"},"0a528fc8-355e-435f-b794-2522c3820b7d":{"name":"fly_bot_1","sourceUrl":"assets/api/v1/animation-library/gamelab/CVtigtRo1bAJVBogp8xBgu85MC15nutH/category_robots/fly_bot.png","frameSize":{"x":124,"y":141},"frameCount":2,"looping":true,"frameDelay":2,"version":"CVtigtRo1bAJVBogp8xBgu85MC15nutH","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":141},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CVtigtRo1bAJVBogp8xBgu85MC15nutH/category_robots/fly_bot.png"},"b09b3878-d68e-4e6a-92a3-fcc46a1f3c90":{"name":"fly_bot_1_copy_1","sourceUrl":null,"frameSize":{"x":124,"y":141},"frameCount":1,"looping":true,"frameDelay":12,"version":"Hli9qfReBuA8kl3ZnuaNrYj5ILYEbWWN","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":124,"y":141},"rootRelativePath":"assets/b09b3878-d68e-4e6a-92a3-fcc46a1f3c90.png"},"71d10e89-5127-402f-b5fd-1d11dfb66c3f":{"name":"retrocreature_16_1","sourceUrl":null,"frameSize":{"x":365,"y":365},"frameCount":2,"looping":true,"frameDelay":12,"version":"126SiyMhW019W25fpgeyJgU4dG06.NZs","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":730},"rootRelativePath":"assets/71d10e89-5127-402f-b5fd-1d11dfb66c3f.png"},"26d7de77-61b4-457d-bab2-c3c8d3713aa0":{"name":"retroaliens_19_1","sourceUrl":"assets/api/v1/animation-library/gamelab/6qr.p7u0AwVuQG2aOCTpPkVNdMNfmsmR/category_retro/retroaliens_19.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"6qr.p7u0AwVuQG2aOCTpPkVNdMNfmsmR","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6qr.p7u0AwVuQG2aOCTpPkVNdMNfmsmR/category_retro/retroaliens_19.png"},"c2233ae1-9a5e-4b10-bd17-cbb1f83f4f09":{"name":"retrocreature_07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/buWKgi9MW28_9kaKJ1h3L.yr8_VGhuKY/category_retro/retrocreature_07.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"buWKgi9MW28_9kaKJ1h3L.yr8_VGhuKY","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/buWKgi9MW28_9kaKJ1h3L.yr8_VGhuKY/category_retro/retrocreature_07.png"},"923385cc-c358-452b-84e2-0fd179dba355":{"name":"retrocreature_18_1","sourceUrl":"assets/api/v1/animation-library/gamelab/EwmTcHfXSWckxh8lnt67ueK2VKQHkNP7/category_retro/retrocreature_18.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"EwmTcHfXSWckxh8lnt67ueK2VKQHkNP7","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/EwmTcHfXSWckxh8lnt67ueK2VKQHkNP7/category_retro/retrocreature_18.png"},"74e2bf2f-c025-4f04-8ed3-9fe4a35300f4":{"name":"spacebattle_01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/7puyuiL6CpZQIyVB1hzHvUwZkQzTMLxe/category_retro/spacebattle_01.png","frameSize":{"x":191,"y":140},"frameCount":1,"looping":true,"frameDelay":2,"version":"7puyuiL6CpZQIyVB1hzHvUwZkQzTMLxe","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":191,"y":140},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7puyuiL6CpZQIyVB1hzHvUwZkQzTMLxe/category_retro/spacebattle_01.png"},"d981371f-a2f3-4d12-ba83-576946aff433":{"name":"retrocreature_17_1","sourceUrl":null,"frameSize":{"x":365,"y":365},"frameCount":2,"looping":true,"frameDelay":12,"version":"bxE_qNI5FhVqz7QSjznuyJZKWE2fi9R6","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":730},"rootRelativePath":"assets/d981371f-a2f3-4d12-ba83-576946aff433.png"},"b1b6e90c-56fc-4314-aab7-cbbe5e57ec80":{"name":"retrocreature_20_1","sourceUrl":null,"frameSize":{"x":332,"y":365},"frameCount":2,"looping":true,"frameDelay":12,"version":"xcF_bJM8LFosmW9zSh.h0ch1eXd88ys9","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":730},"rootRelativePath":"assets/b1b6e90c-56fc-4314-aab7-cbbe5e57ec80.png"},"67074329-ff8d-434b-93dd-ddfd8385dd2e":{"name":"retrocreature_03_1","sourceUrl":null,"frameSize":{"x":398,"y":365},"frameCount":2,"looping":true,"frameDelay":12,"version":"b7ynYZmhOTYDpr_GiURpETpDUKJhMOig","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":730},"rootRelativePath":"assets/67074329-ff8d-434b-93dd-ddfd8385dd2e.png"},"d252f6c8-76c0-4945-a3f4-f491a937b7a8":{"name":"retrocreature_04_1","sourceUrl":null,"frameSize":{"x":365,"y":365},"frameCount":2,"looping":true,"frameDelay":12,"version":"qcXAVd6J25ZHlcJ5WoFnpsHHLIPjFHzE","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":730},"rootRelativePath":"assets/d252f6c8-76c0-4945-a3f4-f491a937b7a8.png"},"76af2969-9a3c-496a-b6c6-070505cf66d7":{"name":"retrocreature_05_1","sourceUrl":"assets/api/v1/animation-library/gamelab/gweexffTvzt5T_AHvh28Ivkd3olW3tsV/category_retro/retrocreature_05.png","frameSize":{"x":365,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"gweexffTvzt5T_AHvh28Ivkd3olW3tsV","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gweexffTvzt5T_AHvh28Ivkd3olW3tsV/category_retro/retrocreature_05.png"},"2efc6c82-ad04-40cf-8e20-2a171cfec4ee":{"name":"retrocreature_02_1","sourceUrl":null,"frameSize":{"x":332,"y":365},"frameCount":2,"looping":true,"frameDelay":12,"version":"uXL.6dUplNjKjqNaBlKf6cZHgp6b_Dqz","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":730},"rootRelativePath":"assets/2efc6c82-ad04-40cf-8e20-2a171cfec4ee.png"},"16bc1527-0ec1-45aa-8572-8b495508a483":{"name":"retroship_06_1","sourceUrl":"assets/api/v1/animation-library/gamelab/zA737Mj.O9TyFOGS3JWghxGqOvpbp8cq/category_retro/retroship_06.png","frameSize":{"x":391,"y":362},"frameCount":1,"looping":true,"frameDelay":2,"version":"zA737Mj.O9TyFOGS3JWghxGqOvpbp8cq","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":362},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zA737Mj.O9TyFOGS3JWghxGqOvpbp8cq/category_retro/retroship_06.png"},"c415b527-08ec-48af-9bc0-cd4198ef60b0":{"name":"sun_1","sourceUrl":null,"frameSize":{"x":150,"y":150},"frameCount":2,"looping":true,"frameDelay":12,"version":"6bYRNBHTlpdYBUcPv3VkfMGFrRQ.j1WV","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":300},"rootRelativePath":"assets/c415b527-08ec-48af-9bc0-cd4198ef60b0.png"},"80cbace2-c9b0-4b5c-abf9-1a864aa81471":{"name":"sun2_1","sourceUrl":null,"frameSize":{"x":150,"y":150},"frameCount":2,"looping":true,"frameDelay":12,"version":"GpKSroi2GWRJjOnFikQGvoSOSrtES7l6","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":300},"rootRelativePath":"assets/80cbace2-c9b0-4b5c-abf9-1a864aa81471.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var fundo = createSprite(200, 200);
fundo.setAnimation("background_landscape02_1");


var Mike = createSprite(10, 384, 20, 20);
Mike.shapeColor = "red";
Mike.setAnimation("fly_bot_1");
Mike.scale = 0.22;


var rectangle1 = createSprite(150, 350, 390, 10);
rectangle1.shapeColor = "brown";


var rectangle2 = createSprite(250, 310, 390, 10);
rectangle2.shapeColor = "brown";


var rectangle3 = createSprite(150, 270, 390, 10);
rectangle3.shapeColor = "brown";


var rectangle4 = createSprite(250, 230, 390, 10);
rectangle4.shapeColor = "brown";


var rectangle5 = createSprite(150, 190, 390, 10);
rectangle5.shapeColor = "brown";


var rectangle6 = createSprite(250, 150, 390, 10);
rectangle6.shapeColor = "brown";

var rectangle7 = createSprite(60, 125, 10, 60);
rectangle7.shapeColor = "brown";

var Martel1 = createSprite(20, 330);
Martel1.setAnimation("hammer_1");
Martel1.scale = 0.08;


var Martel2 = createSprite(250, 290);
Martel2.setAnimation("hammer_1");
Martel2.scale = 0.08;


var Martel3 = createSprite(250, 170);
Martel3.setAnimation("hammer_1");
Martel3.scale = 0.08;


var Crystal = createSprite(385, 130);
Crystal.setAnimation("gameplay_purplediamond_1");
Crystal.scale = 0.08;


var Alien1 = createSprite(180, 330);
Alien1.setAnimation("retroship_07_1");
Alien1.scale = 0.08;
Alien1.velocityX = 4;

var Alien2 = createSprite(100, 330);
Alien2.setAnimation("retroship_08_1");
Alien2.scale = 0.08;
Alien2.velocityX = 4;

var Alien3 = createSprite(60, 330);
Alien3.setAnimation("retroship_09_1");
Alien3.scale = 0.08;
Alien3.velocityX = 4;


var Alien4 = createSprite(300, 290);
Alien4.setAnimation("retroship_21_1");
Alien4.scale = 0.08;
Alien4.velocityX = 4;

var Alien5 = createSprite(100, 290);
Alien5.setAnimation("retroship_04_1");
Alien5.scale = 0.08;
Alien5.velocityX = 4;


var Alien6 = createSprite(200, 290);
Alien6.setAnimation("retroship_01_1");
Alien6.scale = 0.08;
Alien6.velocityX = 4;

var Alien9 = createSprite(20, 170);
Alien9.setAnimation("retrocreature_20_1");
Alien9.scale = 0.08;
Alien9.velocityX = 4;


var Alien10 = createSprite(200, 170);
Alien10.setAnimation("retrocreature_17_1");
Alien10.scale = 0.08;
Alien10.velocityX = 4;


var Alien11 = createSprite(300, 210);
Alien11.setAnimation("spacebattle_01_1");
Alien11.scale = 0.16;
Alien11.velocityX = 4;


var Alien12 = createSprite(200, 210);
Alien12.setAnimation("retrocreature_18_1");
Alien12.scale = 0.08;
Alien12.velocityX = 4;


var Alien13 = createSprite(250, 250);
Alien13.setAnimation("retrocreature_07_1");
Alien13.scale = 0.08;
Alien13.velocityX = 4;


var Alien14 = createSprite(150, 250);
Alien14.setAnimation("retroaliens_19_1");
Alien14.scale = 0.08;
Alien14.velocityX = 4;


var Alien15 = createSprite(150, 130);
Alien15.setAnimation("retrocreature_05_1");
Alien15.scale = 0.08;
Alien15.velocityX = 4;


var Alien16 = createSprite(390, 130);
Alien16.setAnimation("retrocreature_02_1");
Alien16.scale = 0.08;
Alien16.velocityX = 4;


var Alien17 = createSprite(100, 130);
Alien17.setAnimation("retroship_06_1");
Alien17.scale = 0.08;
Alien17.velocityX = 4;


var Alien18 = createSprite(300, 130);
Alien18.setAnimation("retroaliens_19_1");
Alien18.scale = 0.08;
Alien18.velocityX = 4;


var Alien7 = createSprite(80, 130);
Alien7.setAnimation("retrocreature_04_1");
Alien7.scale = 0.08;
Alien7.velocityX = 4;


var Alien8 = createSprite(200, 130);
Alien8.setAnimation("retrocreature_03_1");
Alien8.scale = 0.08;
Alien8.velocityX = 4;


createEdgeSprites();

var power = createGroup();










function draw() {
  drawSprites();
  if (keyDown("right")) {
Mike.x=Mike.x+5;
    }
if (keyDown("left")) {
Mike.x=Mike.x-5;
        }
if (keyDown("space")) {
Mike.velocityY=-5;
}
Mike.velocityY=Mike.velocityY+0.5;

if (keyWentDown("up")) {
var power1 = createSprite(Mike.x, Mike.y);
power1.setAnimation("sun_1");
power1.scale = 0.2;
power1.velocityX = 5;
power.add(power1);
}
if (keyWentDown("down")) {
var power2 = createSprite(Mike.x, Mike.y);
power2.setAnimation("sun2_1");
power2.scale = 0.2;
power2.velocityX = -5;
power.add(power2);

}
if (power.isTouching(Alien1)) {
Alien1.destroy();
power.destroyEach();

}
if (power.isTouching(Alien2)) {
Alien2.destroy();
power.destroyEach();


}
if (power.isTouching(Alien3)) {
Alien3.destroy();
power.destroyEach();

}
if (power.isTouching(Alien4)) {
Alien4.destroy();
power.destroyEach();

}
if (power.isTouching(Alien5)) {
Alien5.destroy();
power.destroyEach();

}
if (power.isTouching(Alien6)) {
Alien6.destroy();
power.destroyEach();

}
if (power.isTouching(Alien7)) {
Alien7.destroy();
power.destroyEach();

}
if (power.isTouching(Alien8)) {
Alien8.destroy();
power.destroyEach();

}
if (power.isTouching(Alien9)) {
Alien9.destroy();
power.destroyEach();

}
if (power.isTouching(Alien10)) {
Alien10.destroy();
power.destroyEach();

}
if (power.isTouching(Alien11)) {
Alien11.destroy();
power.destroyEach();

}
if (power.isTouching(Alien12)) {
Alien12.destroy();
power.destroyEach();

}
if (power.isTouching(Alien13)) {
Alien13.destroy();
power.destroyEach();

}
if (power.isTouching(Alien14)) {
Alien14.destroy();
power.destroyEach();

}
if (power.isTouching(Alien15)) {
Alien15.destroy();
power.destroyEach();

}
if (power.isTouching(Alien16)) {
Alien16.destroy();
power.destroyEach();

}
if (power.isTouching(Alien17)) {
Alien17.destroy();
power.destroyEach();

}
if (power.isTouching(Alien18)) {
Alien18.destroy();
power.destroyEach();


}


if (Mike.isTouching(Martel1)) {
Martel1.destroy();


}
if (Mike.isTouching(Martel2)) {
Martel2.destroy();

}
if (Mike.isTouching(Martel3)) {
Martel3.destroy();

}

 if(Mike.isTouching(Alien1)|| Mike.isTouching(Alien2)|| Mike.isTouching(Alien3)|| Mike.isTouching(Alien4)|| Mike.isTouching(Alien5)|| Mike.isTouching(Alien6)|| Mike.isTouching(Alien7)|| Mike.isTouching(Alien8)|| Mike.isTouching(Alien9)|| Mike.isTouching(Alien10)|| Mike.isTouching(Alien11)|| Mike.isTouching(Alien12)|| Mike.isTouching(Alien13)|| Mike.isTouching(Alien14)|| Mike.isTouching(Alien15)|| Mike.isTouching(Alien16)|| Mike.isTouching(Alien17)|| Mike.isTouching(Alien18)) {
      textSize(18);
      stroke("blue");
      fill ("maroon");
      background("red");
      text("Game over!!!", 150, 190);
   Alien1.setVelocity(0, 0);
    Alien2.setVelocity(0, 0);
    Alien3.setVelocity(0, 0);
    Alien4.setVelocity(0, 0);
    Alien5.setVelocity(0, 0);
    Alien6.setVelocity(0, 0);
    Alien7.setVelocity(0, 0);
    Alien8.setVelocity(0, 0);
    Alien9.setVelocity(0, 0);
    Alien10.setVelocity(0, 0);
    Alien11.setVelocity(0, 0);
    Alien12.setVelocity(0, 0);
    Alien13.setVelocity(0, 0);
    Alien14.setVelocity(0, 0);
    Alien15.setVelocity(0, 0);
    Alien16.setVelocity(0, 0);
    Alien17.setVelocity(0, 0);
    Alien18.setVelocity(0, 0);
    Mike.setVelocity(0, 0);
   
 }

if (Mike.isTouching(Crystal)) {
  stroke("white");
    fill("lightgreen");
    textSize(50);
    background("green");
    text("Ganhou", 100, 200);
    Alien1.setVelocity(0, 0);
    Alien2.setVelocity(0, 0);
    Alien3.setVelocity(0, 0);
    Alien4.setVelocity(0, 0);
    Alien5.setVelocity(0, 0);
    Alien6.setVelocity(0, 0);
    Alien7.setVelocity(0, 0);
    Alien8.setVelocity(0, 0);
    Alien9.setVelocity(0, 0);
    Alien10.setVelocity(0, 0);
    Alien11.setVelocity(0, 0);
    Alien12.setVelocity(0, 0);
    Alien13.setVelocity(0, 0);
    Alien14.setVelocity(0, 0);
    Alien15.setVelocity(0, 0);
    Alien16.setVelocity(0, 0);
    Alien17.setVelocity(0, 0);
    Alien18.setVelocity(0, 0);
    Mike.setVelocity(0, 0);
}




Mike.collide(edges);

Alien1.bounceOff(edges);
Alien2.bounceOff(edges);
Alien3.bounceOff(edges);
Alien4.bounceOff(edges);
Alien5.bounceOff(edges);
Alien6.bounceOff(edges);
Alien7.bounceOff(edges);
Alien8.bounceOff(edges);
Alien9.bounceOff(edges);
Alien10.bounceOff(edges);
Alien11.bounceOff(edges);
Alien12.bounceOff(edges);
Alien13.bounceOff(edges);
Alien14.bounceOff(edges);
Alien15.bounceOff(edges);
Alien16.bounceOff(edges);
Alien17.bounceOff(edges);
Alien18.bounceOff(edges);


Mike.collide(rectangle1);
Mike.collide(rectangle2);
Mike.collide(rectangle3);
Mike.collide(rectangle4);
Mike.collide(rectangle5);
Mike.collide(rectangle6);
Mike.collide(rectangle7);


Alien7.bounceOff(rectangle7);
Alien8.bounceOff(rectangle7);
Alien15.bounceOff(rectangle7);
Alien16.bounceOff(rectangle7);
Alien17.bounceOff(rectangle7);
Alien18.bounceOff(rectangle7);
}









// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
