module.exports = (req, res) => {
    res.render("signup", Object.assign({},
        {meta:{
            title:"Sign up to StudySpace",
            description:""
        }}
    ));
}
