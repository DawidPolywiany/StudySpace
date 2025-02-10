module.exports = (req, res) => {
    res.render("index", Object.assign({},
        {meta:{
            title:"Study Space",
            description:""
        }}
    ));
}
