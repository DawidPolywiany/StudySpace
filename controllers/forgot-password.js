module.exports = (req, res) => {
    res.render("forgot-password", Object.assign({},
        {meta:{
            title:"Forgot your password?",
            description:""
        }}
    ))
}
