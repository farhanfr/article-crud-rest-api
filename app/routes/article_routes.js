module.exports = app =>{
    const articles = require("../controllers/article_controllers");

    let router = require("express").Router();

    app.use("/api/article",router);

    router.post("/addArticle",articles.createArticle);
    router.get("/getAll",articles.getAllArticle);
    router.get("/getOneArticle/:id",articles.getOneArticle);
    router.get("/getAllPublished",articles.findAllPublished);
    router.put("/updateArticle/:id",articles.updateArticle);
    router.delete("/deleteArticle/:id",articles.deleteArticle);
    router.delete("/deleteAllArticle",articles.deleteAllArticle);


    
    
}