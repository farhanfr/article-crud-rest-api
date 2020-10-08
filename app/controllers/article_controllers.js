const db = require("../models");
const Article = db.article;

exports.createArticle = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty"
        });
        return;
    }
        const article = {
            title: req.body.title,
            description: req.body.description,
            published: req.body.published ? req.body.published : false
        }
        Article.create(article).then((result) => {
            res.status(200).json({
                'status':200,
                'message':'success add article',
                'data':result
            });
        }).catch((err) => {
            res.status(500).json({
                'message':err.message
            });
        });
   

}

exports.getAllArticle = (req, res) => {
    Article.findAll().then((result) => {
        res.status(200).json({
            'status':200,
            'message':'success get all article',
            'data':result
        });
    }).catch((err) => {
        res.status(500).json({
            'message':err.message
        });
    });;
}

exports.getOneArticle = (req, res) => {
    const id = req.params.id;
    Article.findByPk(id).then((result) => {
        res.status(200).json({
            'status':200,
            'message':'success get one article',
            'data':result
        });
    }).catch((err) => {
        res.status(500).json({
            'message':err.message
        });
    });
}
exports.updateArticle = (req, res) => {
    const id = req.params.id;
    Article.update(req.body,{
        where:{
            id : id
        }
    }).then((result) => {
        console.log(result.body);
        if (result == 1) {            
            res.status(200).json({
                'status':200,
                'message':'success update article'
            });   
        } else {
            res.status(500).json({
                'status':500,
                'message':'cannot update article'
            }); 
        }
    }).catch((err) => {
        res.status(500).json({
            'message':err.message
        });
    });
}

exports.deleteArticle = (req, res) => {
    const id = req.params.id;
    Article.destroy({
        where : { id:id }
    }).then((result) => {
        if (result == 1) {            
            res.status(200).json({
                'status':200,
                'message':'success delete article'
            });   
        } else {
            res.status(500).json({
                'status':500,
                'message':'cannot delete article'
            }); 
        }
    }).catch((err) => {
        res.status(500).json({
            'message':err.message
        });
    });
}
exports.deleteAllArticle = (req, res) => {
    Article.destroy({
        truncate : true
    }).then((result) => {
        res.status(200).json({
            'status':200,
            'message':'success delete all article'
        });   
    }).catch((err) => {
        res.status(500).json({
            'message':err.message
        });
    });
}

exports.findAllPublished = (req, res) => {
    Article.findAll({
        where : {published:true}
    }).then((result) => {
        res.status(200).json({
            'status':200,
            'message':'success get published article',
            'data':result
        });
    }).catch((err) => {
        res.status(500).json({
            'message':err.message
        });
    });;
}

