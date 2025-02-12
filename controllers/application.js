module.exports = (req, res) => {
    res.render("application", Object.assign({},
        {meta:{
            title:"StudySpace",
            description:""
        }}
    ));
}
