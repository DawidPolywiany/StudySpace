module.exports = (req, res) => {
    res.render("about", Object.assign({},
        {meta:{
            title:"About us",
            description:""
        }}
    ));
}
