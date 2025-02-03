module.exports = (req, res) => {
    res.render("index", Object.assign({},
        {meta:{
            title:"Main",
            description:""
        }}
    ));
}
