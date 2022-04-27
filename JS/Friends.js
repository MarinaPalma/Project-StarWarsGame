class Friends {
  constructor(space) {
    this.space = space;
    this.x = Math.floor(Math.random() * 580);
    this.y = 0;
    this.width = 40;
    this.height = 35;
    this.imgFr = new Image();
    this.collided = false;
  }

  borderLeft() {
    return this.x;
  }
  borderRight() {
    return this.x + this.width;
  }

 borderTop() {
    return this.y;
  }

  borderBottom() {
    return this.y + this.height;
  }

  drawFriend() {
    this.imgFr.src = "/docs/assets/imgs/Grogu.png";
    this.space.ctx.drawImage(
      this.imgFr,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}





    //constructor ( space, droid,width, height)
    //this.width = width;
    //this.height = height;
    // this.imgDo = new Image();
    // this.droid = friend;
    //
// drawFriend() {
//   if (this.droid === "Grogu") {
//     this.img.src = "/docs/assets/imgs/Grogu.png";
//   } else if (this.droid === "Bo" {
//     this.img.src = "/docs/assets/imgs/d0.png";
//   }
//   this.space.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
// }


// this.friends.forEach((friend) => {
  //if(friends.droid === "Grogu") {
//friend.y +=3;
  // } else {
    //friend.y +=4;
  // }
  //
//   if (!friend.collided) {
//     friend.drawFriend();
//   }
// });




// createFriends() {
// if (this.frames % 350 === 0) {
//   this.friends.push(new Friends(this, "Grogu",40, 35));
// } 
// 
// if (this.frames % 400 === 0) {
//   this.enemies.push(new Enemy(this, "Bo", 30, 40));
// }
// }