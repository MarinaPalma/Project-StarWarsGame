class Friends {
    constructor(space) {
        this.space = space;
        this.x = Math.floor(Math.random() * 480);
        this.y = 0;
        this.width = 70;
        this.height = 50;
        this.imgEn = new Image();
      }


      friendBorderLeft() {
        return this.x;
      }
      friendBorderRight() {
        return this.x + this.width;
      }
    
      friendBorderTop() {
        return this.y;
      }
    
      friendBorderBottom() {
        return this.y + this.height;
      }
    
    drawEFriend(){
        this.imgEn.src = "/docs/assets/imgs/Grogu.png";
        this.space.ctx.drawImage(this.imgEn, this.x, this.y, this.width, this.height);
}
}