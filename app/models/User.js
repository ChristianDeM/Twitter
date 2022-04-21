class User {
    constructor(id,usernamer, name, bio){
        this.id=id,
        this.usernamer=usernamer,
        this.name=name,
        this.bio=bio,
        this.dateCreated=new Date(),
        this.lastUpdate= new Date()
    }
  

}

module.exports=User