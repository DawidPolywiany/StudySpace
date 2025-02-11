module.exports = (req, res) => {
    res.render("about", Object.assign({},
        {meta:{
            title:"",
            description:""
        }}
    ));
}
