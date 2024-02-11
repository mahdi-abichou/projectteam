const db = require ('../database/index')


const SignUpClient=  async (req,res)=>{
    const x = await db.SignUpc(req.body)
    try{
        res.send(x[0])
    }
    catch(e){console.log(e);
  }
}

const GetallUserE =async (req,res)=>{
    const x = await db.getalle()
    try{
        res.send(x[0])
    }
    catch(e){ console.error(e)}
}

const GetallUserC =async (req,res)=>{
    const x = await db.getallc()
    try{
        res.send(x[0])
    }
    catch(e){ console.error(e)}
}

const SignINClient=async(req,res)=>{
    try{
        const x = await db.SignInc(req.body)
        console.log(x);
        res.json(x[0])
        
    }
    catch(e){console.log(e)}
}
const SignINEmployer=async(req,res)=>{
    try{
        const x = await db.SignIne(req.body)
        console.log(x);
        res.json(x[0])
        
    }
    catch(e){console.log(e)}
}



const SignUpEmployer=  async (req,res)=>{
    const x = await db.SignUpe(req.body)
    try{
        res.send(x)
    }
    catch(e){console.log(e);
  }
}

// get ALL posts
const getposts= async (req,res)=>{
    const x= await db.getAllposts()
  
  try{
      res.send(x[0])
  }
  catch(err){
  console.log(err);
  }
  }
const feedback=async (req,res)=>{
    const x= await db.Getuserreview(req.params.id)
  
    try{
        res.send(x[0])
    }
    catch(err){
    console.log(err);
    }
    
}
const updatetheemployer= async (req,res)=>{
    const x= await db.updateEmployer(req.body,req.params.id)
  
    try{
        res.send(x[0])
    }
    catch(err){
    console.log(err);
    }
}

  module.exports={SignINEmployer,GetallUserE,SignINClient,GetallUserC,SignUpClient,SignUpEmployer,getposts,feedback,updatetheemployer}