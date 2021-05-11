class Slingshot{
constructor(bodyA,pointB){
    var op={
        bodyA:bird.body,
        pointB:pointB,
        lenght:10,
        stifness:0.04
        
         }
         this.chain=Constraint.create(op)
         World.add(world,this.chain)
         this.pointB=pointB
}
  display()
  {
    if(this.chain.bodyA)//bodyA is having some value then true
    {
    var posA = this.chain.bodyA.position
    var posB = this.pointB
    strokeWeight(4)
    line(posA.x, posA.y, posB.x, posB.y)
    }
  }
  fly(){
    this.chain.bodyA=null   // bodyA is blank
  }
  
    
  
}