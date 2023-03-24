module.exports = (mongoose) => {
    var schema = mongoose.Schema(
        {
            code: String,
            firstname: String,
            lastname: String,
            email: String
        },
        {
            timestamps: true
        }

    );

    const Portfolio = mongoose.model("portfolio", schema)
    return Portfolio
}