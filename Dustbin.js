class Recyclingbin
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
		this.width = 200;
		this.height = 213;
		this.wallThickness = 20;
		this.angle = 0;
		

		var x = this.x;
		var y = this.y;
		var width = 200;
		var height = 213;
		var wallThickness = 20;
		var angle = 0;
		

		var options =
		{
			isStatic: true
		};

		
		this.bottomWall = Bodies.rectangle(this.x, this.y, this.width, this.wallThickness, options);

		var xPos = this.x - (this.width / 2);
		var yPos = this.y - (this.height / 2);
		this.leftWall=Bodies.rectangle(xPos, yPos, this.wallThickness, this.height, options);
		Body.setAngle(this.leftWall, this.angle);

		xPos = this.x + (this.width / 2);
		this.rightWall = Bodies.rectangle(xPos, yPos, this.wallThickness, this.height, options);
		Body.setAngle(this.rightWall, -1 * this.angle);
		
		World.add(world, this.bottomWall);
		World.add(world, this.leftWall);
		World.add(world, this.rightWall);

	}
	
	display()
	{
			var posBottom = this.bottomWall.position;
			var posLeft = this.leftWall.position;
			var posRight = this.rightWall.position;

			var width = 200;
			var height = 213;
			var wallThickness = 20;
			var angle = 0;
			var x = 1000;
			var y = 580;

			var xPos = x - (width / 2);
			var yPos = y - (height / 2);

			var posX = x + (width / 2);

			var options =
		{
			isStatic: true
		};

			push();
			translate(posLeft.x, posLeft.y);
			fill(255);
			angleMode(RADIANS);			
			rotate(this.angle);
			pop();

			push();
			translate(posRight.x, posRight.y);
			fill(255);
			angleMode(RADIANS);
			rotate(-1 * this.angle);
			pop();

			push();
			
			fill("green");
			stroke ("green");
			angleMode(RADIANS);			
			rectMode(CENTER);
			rect(x, y, width, wallThickness, options);
			pop();

			push();
			
			fill("green");
			stroke ("green");
			angleMode(RADIANS);			
			rectMode(CENTER);
			rect(xPos, yPos + 10, wallThickness, height, options);
			pop();

			push();
		
			fill("green");
			stroke ("green");
			angleMode(RADIANS);			
			rectMode(CENTER);
			rect(posX, yPos+10, wallThickness, height, options);
			pop();
	}
}