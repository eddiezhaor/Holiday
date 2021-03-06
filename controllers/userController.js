const db=require("../models")
module.exports={
    createNewUser: (req,res)=>{
        db.listing.create(req.body).then(dbnewUser=>{
            res.json(dbnewUser)
        })
    },
    updateUserData:(req,res)=>{
        db.listing.findOneAndUpdate({email:req.params.email},{$set:req.body},{new:true})
        .then(dbuser=>{
            res.json(dbuser)
        })
    },
    uploadImage:(req,res)=>{
        db.listing.findOneAndUpdate({email:req.params.email},{$push:{imageLink:req.body}},{new:true})
        .then(dbimage=>{
            res.json(dbimage)
        })
    },
    retrieveUserData:(req,res)=>{
        db.listing.findOne({email:req.params.email}).then(dbresult=>{
            res.json(dbresult)
        })
    },
    addTofavorites:(req,res)=>{
        db.listing.findOneAndUpdate({email:req.params.email},{$push:{favorites:{email:req.body.useremail,name:req.body.name,link:req.body.link}}},{new:true})
        .then(dbfavorites=>{
            res.json(dbfavorites)
        })
    },
    removeFavorites:(req,res)=>{
        db.listing.findOneAndUpdate({email:req.params.email},{$pull:{favorites:{email:req.params.emailWillDelete}}},{new:true})
        .then(dbresult=>{
            res.json(dbresult)
        })
    }
}